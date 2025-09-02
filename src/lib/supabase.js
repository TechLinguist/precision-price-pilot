import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://gqowkcgecxtgdfhgutro.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdxb3drY2dlY3h0Z2RmaGd1dHJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1MzU5NDksImV4cCI6MjA2NzExMTk0OX0.pMku2b0pbu_SyDkUl6cOndimnUvQu5wdtNqyY5XyGfA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)