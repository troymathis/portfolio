import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        const serviceId = 'service_hwln7b6';
        const templateId = 'template_d7j49bm';
        const userId = 'PbX5Xn4Xaf60qxrOM';
        const templateParams = {
            name,
            subject,
            email,
            message
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => alert('Thank you! We will be in touch soon.'))
            .catch(error => alert('Uh oh, something went wrong. Try again later'));


        if (name && email && message) {
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all the required fields.');
        }
    }

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    const createForm = () => {
        return (
            <form>
                <div className='fields'>
                <input type='text'
                name='name'
                value={name}
                onChange= {e => setName(e.target.value)}
                placeholder="Name"
                />

                <input type='email'
                name='email'
                value={email}
                onChange= {e => setEmail(e.target.value)}
                placeholder="Email"
                />

                <input type='text'
                name='subject'
                placeholder="Subject"
                value={subject}
                onChange= {e => setSubject(e.target.value)}
                />
                <br />
                </div>
                <div className='body'>
                <textarea type='text'
                name='body'
                placeholder="What's on your mind?"
                value={message}
                onChange= {e => setMessage(e.target.value)}
                />
                </div>
                <button onClick={submit}>Reach Out!</button>
            </form>
        )
    }

    return(
        <div className="contact">
            <h1>Get in Touch!</h1>
            <p>
                If anything here interests you or even if you'd like to
                have a casual conversation, fill out this contact form and I'll
                get back to you as soon as possible. Hope to hear from you soon!
            </p>
            <div className="form">{createForm()}</div>
        </div>
    )
}

export default Contact;