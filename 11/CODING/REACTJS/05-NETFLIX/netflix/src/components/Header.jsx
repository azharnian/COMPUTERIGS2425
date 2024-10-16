
function Header()
{

    return (
    <header>
        <nav className="navbar">
          <div className="navbar__brand">
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt="logo"
              className="brand__logo"
            />
          </div>
  
          <div className="navbar__nav__items">
            <div className="nav__item">
              <div className="dropdown__container">
                <i className="fas fa-globe"></i>
                <select
                  name="languages"
                  id="languagesSelect"
                  className="language__drop__down"
                >
                  <option value={"english"} defaultValue={true} style={{color : 'black'}}>English</option>
                  <option value={"indonesia"} style={{color : 'black'}}>Indonesia</option>
                </select>
              </div>
            </div>
  
            <div className="nav__item">
              <button className="signin__button">Sign in</button>
            </div>
          </div>
        </nav>
      </header> 
    )
}

export default Header;