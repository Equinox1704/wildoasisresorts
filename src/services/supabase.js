import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://vosjrnwbqlafwmqhynnh.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvc2pybndicWxhZndtcWh5bm5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1ODM4NTgsImV4cCI6MjA3ODE1OTg1OH0.UB1o5G27unHPdW775cFWDVKEHAWadFNB2OtxY4UvMLs";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;