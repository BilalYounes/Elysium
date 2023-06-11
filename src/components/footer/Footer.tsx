import './footer.scss'
const Footer = () => {
    return (
        <div className='footer'>
            <ul className="nav">
                <li className="nav__item"><a href="#" className="nav__link">Find your dream home</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Request proposal</a></li>

                <li className="nav__item"><a href="#" className="nav__link">Download home planner</a></li>

                <li className="nav__item"><a href="#" className="nav__link">Contact us</a></li>

                <li className="nav__item"><a href="#" className="nav__link">Submit your property</a></li>

                <li className="nav__item"><a href="#" className="nav__link">Come work with us!</a></li>


            </ul>
            <p className="copyright">
                &copy; I hope you like Elysium site. for more project check out my Portfolio There is the link <a href="https://bilalyounes.github.io/MyPorto/" className="footer__link">here</a> 
            </p>
        </div>
    )
}

export default Footer