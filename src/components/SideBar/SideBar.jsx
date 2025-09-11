import './SideBar.css'
import logo from "../../assets/portfolio-logo.png"
import { Link } from "react-router-dom"


function SideBar() {
    return (
        <header>
            <img className="sideBarLogo" src={logo} alt="portfolio-logo" />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact Me</Link>
            </nav>
        </header>
    )
}

export default SideBar