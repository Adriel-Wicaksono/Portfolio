import { ExternalLink } from "lucide-react"
import "./Button.css"
export default function Button(props) {


    return (
        <>
            <button type="button" onClick={()=> window.open(props.url, "_blank")}>
                <span >{props.name}</span>
                <ExternalLink className="external-link" />
            </button>
        </>
    )
}