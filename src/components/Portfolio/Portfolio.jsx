import "./Portfolio.css"
import SideBar from "../SideBar/SideBar"
import Button from "./Button.jsx"

export default function Portfolio() {
    return (
        <>
            <SideBar />
            <div className="projects">
                <div className="project1">
                    <Button name="Youtube Drive" url="https://cmsc335final-rrek.onrender.com/" background="white"/>
                </div>
            </div>
        </>
        
    )
}