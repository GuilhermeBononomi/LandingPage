import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)