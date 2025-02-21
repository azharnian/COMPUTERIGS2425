export default function FAQ({children})
{
    return (
        <>
            <section className="FAQ__list__container">
                <h1 className="FAQ__heading">Frequently Asked Questions</h1>
                
                <div className="FAQ__get__started__email">
                    <h3>
                        Ready to watch? Enter your email to create or restart your
                        membership.
                    </h3>
                    {children}
                </div>
            </section>
        </>
    )
}