import { useState, useEffect } from "react"

export default function App()
{
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState("");

    function handleAddButton()
    {
        setCounter(counter+1);
    }

    function handleSubButton()
    {
        setCounter(counter-1);
    }

    function handleChangeText(e)
    {
        setText(e.target.value);
    }

    useEffect(()=>{
        console.log(counter);
    }, [counter]);

    return(
        <>
            <h1>{ counter }</h1>
            <div id="buttons">
                <button onClick={handleAddButton}>Add</button>
                <button onClick={handleSubButton}>Sub</button>
            </div> 

            <form>
                <input type="text" value={text} onChange={handleChangeText} />    
            </form>  
        </>
    )
}