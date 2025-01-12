import { useState } from "react";

export default function Counter({start})
{
    let [counter, setCounter] = useState(start ? start : 0);

    const subBtnHandler = () => {
        setCounter(counter -= 1);
    }

    return (
        <>
            <div className="box">
                <h1 id="counter">{ counter }</h1>
                <div className="btnBox">
                <button onClick={subBtnHandler}>-</button>
                <button onClick={() => setCounter(counter += 1)}>+</button>
                </div>
            </div>
        </>
    )
}