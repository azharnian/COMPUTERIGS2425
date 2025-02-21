import { useState } from "react"
import Question from "../Question"
import { data } from "./data"

export default function FAQList()
{
    const [questions, setQuestion] = useState(data);
    return(
        <>
            <div className="FAQ__list">
                <Question   question={questions[0].question} 
                            answer={questions[0].answer} 
                            detail={questions[0].detail} 
                />
            </div>
        </>
    )
}