import { GlobalContext } from './context';

import { RouterProvider } from 'react-router-dom';
import { router } from './routers';

import './App.css'

function App() {
  // const [page, setPage] = useState(0);

  const user = {
    username: 'anas'
  };

  // return (
  //   <>
  //     <header>
  //       <button onClick={() => {
  //         const counter = page + 1;
  //         setPage(counter);
  //       }}>Change Page</button>
  //     </header>
  //     <GlobalContext.Provider value={{ user }}>
  //       {page%2 === 0 ? <Index /> : <About />}
  //     </GlobalContext.Provider>
  //   </>
  // )

  return (
    <>
      <GlobalContext.Provider value={{user}}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>  
    </>
  )
}

export default App
