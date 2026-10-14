// ============================================================
// Nova Seeds – Site Configuration
// Edit this file to update phone numbers, email, address, etc.
// Non-technical owners: change values between the quotes only.
// ============================================================

export const siteConfig = {
  // Company
  companyName: 'Nova Seeds',
  companyFullName: 'Nova Research & Hybrid Seeds',
  tagline: 'अच्छे बीज, भरपूर पैदावार',
  taglineEn: 'Good Seeds, Abundant Harvest',

  // Contact
  phone: '+91-9026215560',
  whatsapp: '919026215560',
  email: 'novaseeds@hotmail.com',
  address: '184/1 Shiv Vihar, Road No. 5, V.K.I.A, Jaipur, Rajasthan',
  workingHours: 'Mon–Sat: 9:00 AM – 6:00 PM',

  // Seed License
  seedLicenseNo: 'LIC/XXXX/XXXXX', // Replace with actual seed license number

  // Social
  facebook: 'https://facebook.com/novaseeds',
  youtube: 'https://youtube.com/@novaseeds',

  // Maps
  googleMapsEmbedUrl: '', // Add Google Maps embed URL
  googleMapsLink: 'https://maps.google.com/?q=Nova+Seeds',

  // E-Commerce Mode
  // 'enquiry' = WhatsApp/enquiry only (no payment) – DEFAULT
  // 'ecommerce' = full cart + Razorpay
  ecommerceMode: 'enquiry' as 'enquiry' | 'ecommerce',

  // Analytics (loaded only after cookie consent)
  ga4MeasurementId: 'G-XXXXXXXXXX', // Replace with actual GA4 ID
  metaPixelId: '',                   // Replace with Meta Pixel ID

  // reCAPTCHA
  recaptchaSiteKey: '',              // Replace with Google reCAPTCHA v3 site key

  // Supabase (use .env for actual values)
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL ?? '',
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? '',
};
