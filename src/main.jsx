import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'




//the root element is in index.html
createRoot(document.getElementById('root')).render(
    
  <StrictMode>
    <App />
  </StrictMode>,
)
