import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kwxwevsvdxapuffedfoj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3eHdldnN2ZHhhcHVmZmVkZm9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1NTUwMTksImV4cCI6MjAyNDEzMTAxOX0.3lSJ-fCiNzZZyDD9QD_PzUd46Ch5IqLLjLoNRIVxe6I';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);