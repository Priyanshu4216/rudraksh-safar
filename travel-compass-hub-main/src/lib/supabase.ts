import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 
  import.meta.env.VITE_SUPABASE_URL || 'https://jhnszzidjqwaxghapohe.supabase.co';
export const supabaseAnonKey = 
  import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_EaNuHOROVkChSA0EnjbsiQ_Ay48mPso';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
