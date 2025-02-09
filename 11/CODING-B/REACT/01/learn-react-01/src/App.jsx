import Welcome from './components/Welcome'
import Goodbye from './components/Goodbye'

import './App.css'

function App() {

  return (
    <>
      <h1>Hello, world!</h1>
      <Welcome name="John"/>
      <Welcome name="Jane"/>
      <Goodbye name="Cindy"/>
    </>
  )
}

export default App
