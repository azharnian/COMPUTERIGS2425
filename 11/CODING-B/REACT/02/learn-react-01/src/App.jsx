import { useState } from "react"

function Card({color, text}) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  const cardStyle = {
    width : '100px',
    height : '100px',
    backgroundColor : color,
    display : 'flex',
    justifyContent : 'center',
    alignItem : 'center',
    flexDirection : 'column',
    textAlign : 'center',
  }

  const textStyle = {

  }

  const buttonStyle = {

  }

  return (
    <>
      <div style={cardStyle}>
        <h3 style={textStyle}>{count}</h3>
        <button onClick={handleClick} style={buttonStyle}>{text}</button>
      </div>
    </>
  )
}

function App() {

  return (
    <>
      <h1>Hello, world!</h1>
      <Card color="salmon" text="Click"/>
      <Card color="yellowgreen" text="Push"/>
    </>
  )
}

export default App
