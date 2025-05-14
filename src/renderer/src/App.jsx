import Versions from './components/Versions'
import Home from './pages/Home'
import {HashRouter, Routes, Route} from 'react-router-dom'
// import electronLogo from './assets/electron.svg'

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
