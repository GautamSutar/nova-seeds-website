-- =====================================================
-- Nova Seeds – Supabase SQL Schema
-- Run this in your Supabase SQL Editor
-- =====================================================

-- ========== ENQUIRIES TABLE ==========
CREATE TABLE IF NOT EXISTS public.enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  mobile TEXT NOT NULL,
  state TEXT NOT NULL,
  district TEXT,
  message TEXT NOT NULL,
  type TEXT DEFAULT 'contact' CHECK (type IN ('contact', 'dealer_application', 'product_enquiry')),
  ip_address TEXT,           -- optional, for spam detection
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_enquiries_created ON public.enquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_type ON public.enquiries (type);

-- ========== DEALERS TABLE ==========
CREATE TABLE IF NOT EXISTS public.dealers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  name_hi TEXT,
  address TEXT NOT NULL,
  address_hi TEXT,
  phone TEXT NOT NULL,
  state TEXT NOT NULL,
  state_hi TEXT,
  district TEXT NOT NULL,
  district_hi TEXT,
  city TEXT NOT NULL,
  city_hi TEXT,
  lat NUMERIC(10, 6),
  lng NUMERIC(10, 6),
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_dealers_state ON public.dealers (state);
CREATE INDEX IF NOT EXISTS idx_dealers_active ON public.dealers (is_active);

-- ========== TESTIMONIALS TABLE ==========
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name_hi TEXT NOT NULL,
  name_en TEXT NOT NULL,
  location_hi TEXT,
  location_en TEXT,
  text_hi TEXT NOT NULL,
  text_en TEXT NOT NULL,
  rating INT DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ========== FAQS TABLE ==========
CREATE TABLE IF NOT EXISTS public.faqs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  question_hi TEXT NOT NULL,
  question_en TEXT NOT NULL,
  answer_hi TEXT NOT NULL,
  answer_en TEXT NOT NULL,
  category TEXT DEFAULT 'general',
  sort_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE
);

-- =====================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================

-- ENQUIRIES: Anyone can insert, only admins can read
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert enquiries"
  ON public.enquiries FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow admin read enquiries"
  ON public.enquiries FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow admin delete enquiries"
  ON public.enquiries FOR DELETE
  USING (auth.role() = 'authenticated');

-- DEALERS: Anyone can read active dealers, only admins can write
ALTER TABLE public.dealers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read active dealers"
  ON public.dealers FOR SELECT
  USING (is_active = TRUE);

CREATE POLICY "Allow admin all on dealers"
  ON public.dealers FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- TESTIMONIALS: Anyone can read active ones
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read active testimonials"
  ON public.testimonials FOR SELECT
  USING (is_active = TRUE);

CREATE POLICY "Allow admin all on testimonials"
  ON public.testimonials FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- FAQS: Anyone can read active ones
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read active faqs"
  ON public.faqs FOR SELECT
  USING (is_active = TRUE);

CREATE POLICY "Allow admin all on faqs"
  ON public.faqs FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- =====================================================
-- SEED DATA – Sample dealers
-- =====================================================
INSERT INTO public.dealers (name, name_hi, address, address_hi, phone, state, state_hi, district, district_hi, city, city_hi, is_active)
VALUES
  ('Rajesh Agrovet', 'राजेश एग्रोवेट', 'Main Market, Alwar, Rajasthan – 301001', 'मुख्य बाज़ार, अलवर, राजस्थान – 301001', '+91-9414123456', 'Rajasthan', 'राजस्थान', 'Alwar', 'अलवर', 'Alwar', 'अलवर', TRUE),
  ('Kisan Beej Bhandar', 'किसान बीज भंडार', 'Subzi Mandi Road, Bharatpur, Rajasthan – 321001', 'सब्ज़ी मंडी रोड, भरतपुर, राजस्थान – 321001', '+91-9829234567', 'Rajasthan', 'राजस्थान', 'Bharatpur', 'भरतपुर', 'Bharatpur', 'भरतपुर', TRUE),
  ('Shree Balaji Krishi Kendra', 'श्री बालाजी कृषि केंद्र', 'Station Road, Sikar, Rajasthan – 332001', 'स्टेशन रोड, सीकर, राजस्थान – 332001', '+91-9887345678', 'Rajasthan', 'राजस्थान', 'Sikar', 'सीकर', 'Sikar', 'सीकर', TRUE),
  ('Jai Kisan Agricultural Store', 'जय किसान एग्रीकल्चरल स्टोर', 'Krishi Road, Mathura, Uttar Pradesh – 281001', 'कृषि रोड, मथुरा, उत्तर प्रदेश – 281001', '+91-9456445789', 'Uttar Pradesh', 'उत्तर प्रदेश', 'Mathura', 'मथुरा', 'Mathura', 'मथुरा', TRUE),
  ('Ganga Beej Bhandar', 'गंगा बीज भंडार', 'GT Road, Agra, Uttar Pradesh – 282001', 'जी.टी. रोड, आगरा, उत्तर प्रदेश – 282001', '+91-9627556890', 'Uttar Pradesh', 'उत्तर प्रदेश', 'Agra', 'आगरा', 'Agra', 'आगरा', TRUE),
  ('Annadata Agro Center', 'अन्नदाता एग्रो सेंटर', 'Old Bus Stand, Hisar, Haryana – 125001', 'पुराना बस स्टैंड, हिसार, हरियाणा – 125001', '+91-9896667901', 'Haryana', 'हरियाणा', 'Hisar', 'हिसार', 'Hisar', 'हिसार', TRUE),
  ('Malwa Seed Corporation', 'मालवा सीड कॉर्पोरेशन', 'Nagda Road, Ratlam, Madhya Pradesh – 457001', 'नागदा रोड, रतलाम, मध्य प्रदेश – 457001', '+91-9425778012', 'Madhya Pradesh', 'मध्य प्रदेश', 'Ratlam', 'रतलाम', 'Ratlam', 'रतलाम', TRUE),
  ('Sona Krishi Seva Kendra', 'सोना कृषि सेवा केंद्र', 'Civil Lines, Kota, Rajasthan – 324001', 'सिविल लाइंस, कोटा, राजस्थान – 324001', '+91-9414889123', 'Rajasthan', 'राजस्थान', 'Kota', 'कोटा', 'Kota', 'कोटा', TRUE);

-- =====================================================
-- SEED DATA – Sample FAQs
-- =====================================================
INSERT INTO public.faqs (question_hi, question_en, answer_hi, answer_en, category, sort_order)
VALUES
  ('Gold Medal 941 की बुआई का सही समय क्या है?', 'What is the right sowing time for Gold Medal 941?', 'सरसों की बुआई सामान्यतः अक्टूबर से नवम्बर के बीच की जाती है।', 'Mustard is generally sown between October and November.', 'cultivation', 1),
  ('Gold Medal 941 कहाँ से खरीदें?', 'Where can I buy Gold Medal 941?', 'हमारे डीलर खोजें पेज पर जाकर अपने नज़दीकी अधिकृत डीलर को खोजें।', 'Visit our Find Dealer page to find your nearest authorized dealer.', 'purchase', 2),
  ('असली नोवा सीड्स बीज की पहचान कैसे करें?', 'How to identify genuine Nova Seeds products?', 'असली बीज पर नोवा सीड्स का आधिकारिक लोगो, बैच नंबर और बीज लाइसेंस नंबर होता है।', 'Genuine seeds have the official Nova Seeds logo, batch number, and seed license number.', 'authenticity', 3);
