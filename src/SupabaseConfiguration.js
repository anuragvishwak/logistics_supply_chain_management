import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://etxlzcaublllptzhtnbz.supabase.co'
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0eGx6Y2F1YmxsbHB0emh0bmJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NzUzMzYsImV4cCI6MjA4MDM1MTMzNn0.HFdSu6DqzTnIg03bRr0iWYf488jGLvmD4v36tDog7ec"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
