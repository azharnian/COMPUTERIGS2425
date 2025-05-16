import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

function NoMatch()
{
  return (
    <>
      <h1>Not Found 404!</h1>
    </>
  )
}

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App