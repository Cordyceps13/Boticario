import { useState } from 'react'
import { Link } from 'react-router-dom'

function Versions() {
  const [versions] = useState(window.electron.process.versions)
  if (sessionStorage.getItem('loggedIn') === 'true') {
    console.log('Usuário está logado:', sessionStorage.getItem('username'));
  }

  const handleReturn = () => {
    sessionStorage.setItem('loggedIn', 'false');
    console.log('Usuário deslogado:', sessionStorage.getItem('username'));
    sessionStorage.removeItem('username');
  }

  return (
    <ul className="versions">
      <Link className="electron-version" onClick={handleReturn} to="/">Electron v{versions.electron}</Link>
      <li className="chrome-version">Chromium v{versions.chrome}</li>
      <li className="node-version">Node v{versions.node}</li>
    </ul>
  )
}

export default Versions
