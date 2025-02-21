export default function Question({question, answer, detail})
{
    return (
        <>
            <div className="FAQ__accordian">
                <button className="FAQ__title">
                {question}<i className="fal fa-plus"></i>
                </button>
                <div className="FAQ__visible">
                <p>
                    {answer}
                </p>
                <p>
                    {detail}
                </p>
                </div>
            </div>
        </>
    )
}