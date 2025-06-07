import './assets/main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
document.addEventListener('DOMContentLoaded', async () => {
    // await window.api.insertNames('CAGANITA');
    const names = await window.api.getData();
    const divNames = document.getElementById('names');
    divNames.innerHTML = names.map(n => JSON.stringify(n)).join('<br>');
});
console.log('DOM fully loaded and parsed');
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
