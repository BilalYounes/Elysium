import './header.scss'
import logo1 from '../../assets/logo-bbc.png'
import logo2 from '../../assets/logo-bi.png'
import logo3 from '../../assets/logo-forbes.png'
import logo4 from '../../assets/logo-techcrunch.png'
import logo from '../../assets/logo3.png'
const Header = () => {
  return (
    <>
      <div className='header'>
        <img src={logo} alt="the Main Logo" className="header__logo" />

        <h3 className="heading-3">Your own home:</h3>
        <h1 className="heading-1">The ultimate personal freedom</h1>
        <button className="btn header__btn">View our properties</button>
        <div className="header__seenon-text">Seen on</div>
        <div className='header__seenon-logo'  >
          <img className="header__seenon-logo header__seenon-logo-1 " src={logo1} alt="BBC logo" />
          <img className="header__seenon-logo header__seenon-logo-2" src={logo2} alt="Bi logo" />
          <img className="header__seenon-logo header__seenon-logo-3" src={logo3} alt="Forbes logo" />
          <img className=" header__seenon-logo header__seenon-logo-4" src={logo4} alt="Techrunch logo" />
        </div>
      </div>


    </>
  )
}

export default Header