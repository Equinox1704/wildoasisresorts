import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://cijsgqleaawugreftrtk.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpanNncWxlYWF3dWdyZWZ0cnRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4NjcyNTksImV4cCI6MjAzODQ0MzI1OX0._sWjc3ZpZ5SIseYMO5Nq7YEBvZOzaBEtrfdUoXxRB2A";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;