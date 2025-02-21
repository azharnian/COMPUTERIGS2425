export default function EmailForm()
{
    return (
        <>
            <div className="email__form__container">
                <div className="form__container">
                <input type="email" className="email__input" placeholder=" " />
                <label className="email__label">Email Address</label>
                </div>
                <button className="primary__button">
                Get Started <i className="fal fa-chevron-right"></i>
                </button>
            </div>
        </>
    )
}