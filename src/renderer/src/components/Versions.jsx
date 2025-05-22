import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { getData } from '../../../database/database';

function Versions() {
  const [versions] = useState(window.electron.process.versions)
  const [data, setData] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem('loggedIn') === 'true') {
      console.log('Usuário está logado:', sessionStorage.getItem('username'));
    }

    window.api.getData().then(rows => {
      console.log('Data from DB:', rows);
      setData(rows);
    });
  }, []);

  const handleReturn = () => {
    sessionStorage.setItem('loggedIn', 'false');
    console.log('Usuário deslogado:', sessionStorage.getItem('username'));
    sessionStorage.removeItem('username');
  }


  return (
    <>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.id}: {item.info}
          </li>
        ))}
      </ul>
      <ul className="versions">
        <Link className="electron-version" onClick={handleReturn} to="/">Electron v{versions.electron}</Link>
        <li className="chrome-version">Chromium v{versions.chrome}</li>
        <li className="node-version">Node v{versions.node}</li>
      </ul>
    </>
  )
}

export default Versions
