import { useState } from "react"

export default function Card({color, text}) {
    const [count, setCount] = useState(0);
  
    const handleClick = () => {
      setCount(count + 1);
    }
  
    const cardStyle = {
      width : '100px',
      height : '100px',
      backgroundColor : color ? color : 'pink',
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
          <button onClick={handleClick} style={buttonStyle}>{text ? text : "check!"}</button>
        </div>
      </>
    )
    /*
    if (text)
    {
      return (
      <>
        <div style={cardStyle}>
          <h3 style={textStyle}>{count}</h3>
          <button onClick={handleClick} style={buttonStyle}>{text}</button>
        </div>
      </>
      )
    }
    return (
    <>
      <div style={cardStyle}>
        <h3 style={textStyle}>{count}</h3>
        <button onClick={handleClick} style={buttonStyle}>check!</button>
      </div>
    </>
    )
    */
  }