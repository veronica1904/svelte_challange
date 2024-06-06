import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rcimeauakhppmmhisllo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjaW1lYXVha2hwcG1taGlzbGxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2MDkwNzEsImV4cCI6MjAzMzE4NTA3MX0.amyI6Acu2hBUXrVttgMecoqNrZKdLZqUrmfIxBV4W9o'


export const supabase = createClient(supabaseUrl,supabaseKey)
