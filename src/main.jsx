import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pags/App'
import Header from './components/header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>,
)
