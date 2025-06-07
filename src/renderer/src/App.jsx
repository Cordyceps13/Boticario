import Versions from './components/Versions'
import Home from './pages/Home'
import {HashRouter, Routes, Route} from 'react-router-dom'
// import electronLogo from './assets/electron.svg'


// document.addEventListener('DOMContentLoaded', async () => {
//     // await window.api.insertNames('CAGANITA');
//     const names = await window.api.getData();
//     const divNames = document.getElementById('names');
//     divNames.innerHTML = names.map(n => JSON.stringify(n)).join('<br>');
// });
// console.log('DOM fully loaded and parsed');

function App() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/versions" element={<Versions />} />
      </Routes>
    </HashRouter>
  )
}

export default App
