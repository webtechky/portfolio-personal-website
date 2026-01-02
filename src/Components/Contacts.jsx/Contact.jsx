import './Contact.css'
import theme_logo from '../../assets/infinity-design-img.png'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { useState } from 'react'
import {InformationDetails,ContactText} from './ContactDynamicContent.js'

function Contact() {
    const [status, setStatus] = useState("")
    const [loading, setLoading] = useState(false)

    const onSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        setStatus("")

        const formData = new FormData(event.target)
        formData.append("access_key", "ab1e3135-cdf4-4272-a060-d2193b46a860") 
                const object = Object.fromEntries(formData)
        const json = JSON.stringify(object)

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json())

            if (res.success) {
                setStatus("✅ Message sent successfully!")
                event.target.reset()
            } else {
                setStatus("❌ Failed to send message. Try again.")
            }
        } catch (error) {
            console.error(error)
            setStatus("❌ Something went wrong. Please try again later.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div id="contact" className="Contact">
            <div className="Contact-title">
                <h1>Get In Touch</h1>
                <img src={theme_logo} alt="Contact Img" />
            </div>

            <div className="Contact-Section">
                <div className="contact-Left">
                    <h1>Let's Talk</h1>
                    <p>{ContactText.ContactMessages}</p>

                    <div className="Contact-Details">
                        <div className="Contact-Detail">
                            <FaEnvelope size={24} color="#fff" />
                            <p>{InformationDetails.Email}</p>
                        </div>
                        <div className="Contact-Detail">
                            <FaPhoneAlt size={24} color="#fff" />
                            <p>{InformationDetails.Phone}</p>
                        </div>
                        <div className="Contact-Detail">
                            <FaMapMarkerAlt size={24} color="#fff" />
                            <p>{InformationDetails.Location}</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="Contact-Right">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? "Sending..." : "Submit"}
                    </button>

                    {status && <p className="form-status">{status}</p>}
                </form>
            </div>
        </div>
    )
}

export default Contact
