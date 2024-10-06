import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Sessions } from './session/Sessions'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sessions />
  </StrictMode>,
)
