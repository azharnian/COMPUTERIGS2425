function Header() {
    const headerStyle = {
      backgroundColor : "salmon"
    }
  
    const ulStyle = {
      listStyleType : "none",
      display : "flex",
      justifyContent : "center",
      alignItem : "center",
      gap : "50px",
      padding : "20px 0px"
    }
  
    return (
      <header style={headerStyle}>
        <ul style={ulStyle}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </header>
    )
}

export default Header;