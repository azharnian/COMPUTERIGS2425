import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomeCard from "./components/WelcomeCard";
import GoodbyeCard from "./components/GoodbyeCard";

function App() {

  return (
    <>
      <Header />
      
      <WelcomeCard name={"Felix"} />
      <WelcomeCard name={"Gwen"} />

      <GoodbyeCard name={"Felix"} sex={"male"} />
      <GoodbyeCard name={"Gwen"} sex={"female"} />
      <GoodbyeCard />

      <Footer />
    </>
  )
}

export default App
