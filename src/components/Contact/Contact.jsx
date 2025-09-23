import "./Contact.css"
import SideBar from "../SideBar/SideBar"
import emailjs from "@emailjs/browser"
import { useRef } from "react"

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(
            () => {
                alert("Your message has been sent successfully. I will respond as soon as possible.")
                form.current.reset();
            },
            () => {
                alert("There was an error sending your message. Please try again.")
            }
        );
    }

    return (
        <>
            <SideBar />
            <div className="contact">
                <h1>Contact Me</h1>
                <p>
                    Thank you for your interest in getting in touch! I value open communication and welcome any inquiries, feedback, or collaboration opportunities. 
                    Please don't hesitate to get in touch with me by filling out the contact form.
                </p>

                <form ref={form} onSubmit={sendEmail}>
                
                    <div className="form-group">
                        <input className="text" placeholder="Name" type="text" id="name" name="from_name" required />
                        <input className="text"placeholder="Email" type="email" id="email" name="from_email" required />
                        <textarea className="textbox" placeholder="Message" id="message" name="message" required></textarea>
                        <button type="submit">Send</button>
                    </div>
                    
                </form>
            </div>
            
  



        </>
    )
}

