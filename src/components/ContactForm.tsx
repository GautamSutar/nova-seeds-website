import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';
import { submitEnquiry } from '../lib/supabase';
import { INDIAN_STATES } from '../utils/states';

const schema = z.object({
  name: z.string().min(2, 'nameRequired'),
  mobile: z.string().regex(/^[6-9]\d{9}$/, 'mobileInvalid'),
  state: z.string().min(1, 'stateRequired'),
  district: z.string().optional(),
  message: z.string().min(5, 'messageRequired'),
  // Honeypot field – must be empty
  _hp: z.string().max(0),
});

type FormData = z.infer<typeof schema>;

interface ContactFormProps {
  type?: 'contact' | 'dealer_application' | 'product_enquiry';
  onSuccess?: () => void;
}

export default function ContactForm({ type = 'contact', onSuccess }: ContactFormProps) {
  const { t } = useTranslation();
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { _hp: '' },
  });

  const onSubmit = async (data: FormData) => {
    // Honeypot check
    if (data._hp) return;
    setStatus('loading');
    const result = await submitEnquiry({
      name: data.name,
      mobile: data.mobile,
      state: data.state,
      district: data.district,
      message: data.message,
      type,
    });
    if (result.success) {
      setStatus('success');
      reset();
      onSuccess?.();
    } else {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-4">✅</div>
        <p className="text-brand-green font-bold text-xl">{t('contact.success')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {/* Honeypot – hidden from real users */}
      <input type="text" tabIndex={-1} aria-hidden="true" style={{ display: 'none' }} {...register('_hp')} />

      <div>
        <label htmlFor="cf-name" className="form-label">{t('contact.name')} *</label>
        <input
          id="cf-name"
          type="text"
          autoComplete="name"
          className={`form-input ${errors.name ? 'border-red-400' : ''}`}
          placeholder={t('contact.name')}
          {...register('name')}
        />
        {errors.name && <p className="form-error">{t(`contact.validation.${errors.name.message}`)}</p>}
      </div>

      <div>
        <label htmlFor="cf-mobile" className="form-label">{t('contact.mobile')} *</label>
        <input
          id="cf-mobile"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          maxLength={10}
          className={`form-input ${errors.mobile ? 'border-red-400' : ''}`}
          placeholder="10-digit mobile number"
          {...register('mobile')}
        />
        {errors.mobile && <p className="form-error">{t(`contact.validation.${errors.mobile.message}`)}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-state" className="form-label">{t('contact.state')} *</label>
          <select
            id="cf-state"
            className={`form-input ${errors.state ? 'border-red-400' : ''}`}
            {...register('state')}
          >
            <option value="">{t('dealers.selectState')}</option>
            {INDIAN_STATES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.state && <p className="form-error">{t(`contact.validation.${errors.state.message}`)}</p>}
        </div>
        <div>
          <label htmlFor="cf-district" className="form-label">{t('contact.district')}</label>
          <input
            id="cf-district"
            type="text"
            className="form-input"
            placeholder={t('contact.district')}
            {...register('district')}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="form-label">{t('contact.message')} *</label>
        <textarea
          id="cf-message"
          rows={4}
          className={`form-input resize-none ${errors.message ? 'border-red-400' : ''}`}
          placeholder={t('contact.message')}
          {...register('message')}
        />
        {errors.message && <p className="form-error">{t(`contact.validation.${errors.message.message}`)}</p>}
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">{t('contact.error')}</p>
      )}

      <button
        type="submit"
        id="contact-submit-btn"
        disabled={status === 'loading'}
        className="btn-primary w-full"
      >
        <Send size={18} />
        {status === 'loading' ? t('contact.sending') : t('contact.send')}
      </button>
    </form>
  );
}
