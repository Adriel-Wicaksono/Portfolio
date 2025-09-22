import "./Contact.css"
import SideBar from "../SideBar/SideBar"

export default function Contact() {
    return (
        <>
            <SideBar />
            <div className="contact">
                <h1>Contact Me</h1>
                <p>
                    Thank you for your interest in getting in touch! I value open communication and welcome any inquiries, feedback, or collaboration opportunities. 
                    Please don't hesitate to get in touch with me by filling out the contact form.
                </p>

                <form className="contact-form" action="https://formspree.io/f/mnqyojwp" method="POST">
                
                    <div className="form-group">
                        <input className="text" placeholder="Name" type="text" id="name" name="name" required />
                        <input className="text"placeholder="Email" type="email" id="email" name="email" required />
                        <textarea className="textbox" placeholder="Message" id="message" name="message" required></textarea>
                        <button type="submit">Send</button>
                    </div>
                    
                </form>
            </div>
            
  



        </>
    )
}

