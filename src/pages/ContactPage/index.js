import React, { useState } from 'react';
import axios from "~/api/auth";

function ContactPage() {
    const [formStatus, setFormStatus] = useState('Send')
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('Sending...');

        const content = {
            toName: name,
            toEmail: email,
            fromEmail: "hobovn.website@gmail.com",
            subject: "Contact HOBOVN",
            message: message,
        };

        //Send userAccount to server and back to home page
        try {
            const response = await axios.post('/api/mail/sendNewMail', content);
            if (response.status === 200) {
                setFormStatus('Send')
            }
        } catch (error) {
            console.log(error);
        }

        
    };
    return (
        <div className="container mt-5">
            <h2 className="mb-3">Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                        Name
                    </label>
                    <input className="form-control" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input className="form-control" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="message">
                        Message
                    </label>
                    <textarea className="form-control" id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                </div>
                
                <button className="btn btn-danger" type="submit">
                {formStatus}
                </button>
            </form>
        </div>
    )
}

export default ContactPage;