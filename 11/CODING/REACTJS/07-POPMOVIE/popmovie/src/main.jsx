import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StarRatings from './components/StarRatings.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <StarRatings
      max={10}
      size={24}
      color="#fcc419"
    /> */}
  </StrictMode>,
)
