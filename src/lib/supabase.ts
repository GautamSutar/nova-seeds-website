import { createClient } from '@supabase/supabase-js';
import { siteConfig } from '../config';

// These are read from .env – see .env.example
export const supabase = createClient(
  siteConfig.supabaseUrl,
  siteConfig.supabaseAnonKey,
);

// ============ Types ============
export interface Enquiry {
  id?: string;
  name: string;
  mobile: string;
  state: string;
  district?: string;
  message: string;
  type?: 'contact' | 'dealer_application' | 'product_enquiry';
  created_at?: string;
}

export interface Dealer {
  id: string;
  name: string;
  name_hi?: string;
  address: string;
  address_hi?: string;
  phone: string;
  state: string;
  state_hi?: string;
  district: string;
  district_hi?: string;
  city: string;
  city_hi?: string;
  lat?: number;
  lng?: number;
  is_active?: boolean;
}

// ============ Helpers ============

/** Submit an enquiry to Supabase. Falls back silently if Supabase is not configured. */
export async function submitEnquiry(data: Enquiry): Promise<{ success: boolean; error?: string }> {
  if (!siteConfig.supabaseUrl || !siteConfig.supabaseAnonKey) {
    console.warn('Supabase not configured – enquiry not saved.');
    return { success: true }; // Degrade gracefully in demo mode
  }
  const { error } = await supabase.from('enquiries').insert([data]);
  if (error) return { success: false, error: error.message };
  return { success: true };
}

/** Fetch dealers from Supabase, fallback to static JSON. */
export async function fetchDealers(): Promise<Dealer[]> {
  if (!siteConfig.supabaseUrl || !siteConfig.supabaseAnonKey) {
    const { default: data } = await import('../data/dealers.json');
    return data as Dealer[];
  }
  const { data, error } = await supabase.from('dealers').select('*').eq('is_active', true);
  if (error || !data?.length) {
    const { default: fallback } = await import('../data/dealers.json');
    return fallback as Dealer[];
  }
  return data;
}
