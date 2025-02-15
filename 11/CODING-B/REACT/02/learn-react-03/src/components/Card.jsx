import { useState } from "react"

export default function Card({color, text}) {
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