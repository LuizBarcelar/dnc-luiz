import  React  from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { AppProvider } from './contexts/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
