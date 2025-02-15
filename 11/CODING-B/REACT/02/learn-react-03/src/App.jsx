import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Header />
      <h1>Hello, world!</h1>
      <Card color="salmon" text="Click"/>
      <Card color="yellowgreen" text="Push"/>
      <Footer></Footer>
    </>
  )
}

export default App
