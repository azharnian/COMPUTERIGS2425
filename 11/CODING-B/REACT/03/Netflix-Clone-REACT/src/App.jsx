import Header from "./components/Header"
import Main from "./components/Main"
import Hero from "./components/Hero"
import FAQ from "./components/FAQ"

import EmailForm from "./forms/EmailForm"

function App() {

  return (
    <>
      <Header />
      <Main>
          <Hero>
            <EmailForm />
          </Hero>

          <FAQ>
            <EmailForm />
          </FAQ>
      </Main>
    </>
  )
}

export default App
