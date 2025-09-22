import "./About.css"
import SideBar from "../SideBar/SideBar"
import reactLogo from "../../assets/react-logo.png"
import jsLogo from "../../assets/jsLogo.png"
import htmlLogo from "../../assets/html-logo.png"
import cssLogo from "../../assets/css-logo.png"
import pythonLogo from "../../assets/python-logo.png"
import javaLogo from "../../assets/java-logo.png"
import nodeJSLogo from "../../assets/NodeJS logo.png"

function About() {
    return (
        <>
            <SideBar />
            <div className="aboutText">
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
            <div className="logos">
                <div className="layer1">
                    <img src={reactLogo} alt="React Logo" />
                    <img src={nodeJSLogo} alt="NodeJS Logo" />
                </div>
                <div className="layer2">
                    <img src={htmlLogo} alt="HTML Logo" />
                    <img className="cssLogo" src={cssLogo} alt="CSS Logo" />
                    <img src={jsLogo} alt="Javascript Logo" />
                </div>
                <div className="layer3">
                    <img className="java" src={javaLogo} alt="Java Logo" />
                    <img src={pythonLogo} alt="Python Logo" />
                </div>
            </div>
    
        </>
        
    )
}

export default About