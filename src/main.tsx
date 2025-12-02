import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppWithPWA } from './App'
import './index.css'
import '@/lib/sweetalert'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithPWA />
  </StrictMode>,
) 
