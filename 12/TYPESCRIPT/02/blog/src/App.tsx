import { useState } from 'react';
import Index from './pages/Index';
import About from './pages/About';

import { GlobalContext } from './context';

import './App.css'

function App() {
  const [page, setPage] = useState(0);

  const user = {
    username: 'anas'
  };

  return (
    <>
      <header>
        <button onClick={() => {
          const counter = page + 1;
          setPage(counter);
        }}>Change Page</button>
      </header>
      <GlobalContext.Provider value={{ user }}>
        {page%2 === 0 ? <Index /> : <About />}
      </GlobalContext.Provider>
    </>
  )
}

export default App
