import "./Home.css"
import logo from "../../assets/portfolio-logo.png"
import SideBar from "../SideBar/SideBar"

export default function Home() {
    return (
        <div>
            <SideBar />
            <img className="homeLogo"src={logo} alt="portfolio-logo" />
            <div className="Intro">
                <p>Hello, I'm Adriel.<br></br>3rd Year Computer Science Student.<br></br>University of Maryland College Park.</p>
            </div>
        </div>
        
    )
}

