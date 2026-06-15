import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CustamButton from './CustamButton.jsx'
import SingleDropdownList from './SingleDropdownList.jsx'
import Counter from './Counter.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CustamButton/>
    <SingleDropdownList/>
    <Counter/>
   
  </StrictMode>,
)
