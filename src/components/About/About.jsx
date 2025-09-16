import "./About.css"
import SideBar from "../SideBar/SideBar"
import reactLogo from "../../assets/react-logo.png"
import jsLogo from "../../assets/jsLogo.png"
import htmlLogo from "../../assets/html-logo.png"
import cssLogo from "../../assets/css-logo.png"
import pythonLogo from "../../assets/python-logo.png"

function About() {
    return (
        <>
            <SideBar />
            <div>
                <p>
                    Driven by a commitment to continuous growth, I aim to thrive on transforming
                    complex challenges into elegant software solutions. My journey in software 
                    development is fueled by a passion for learning and a dedication to excellence.
                    What captivates me about software engineering is the perfect blend of analytical 
                    thinking, creative problem solving, and the power to build tools that can make a 
                    positive and meaningful impact to people's lives. When I step away from coding, 
                    you'll find me enjoying the outdoors, hitting the trails for a run, or rock climbing.
                </p>
            </div>
            <div>
                <img src={reactLogo} alt="React Logo" />
                <img src={jsLogo} alt="Javascript Logo" />
                <img src={htmlLogo} alt="HTML Logo" />
                <img src={cssLogo} alt="CSS Logo" />
                <img src={pythonLogo} alt="Python Logo" />
            </div>
    
        </>
        
    )
}

export default About