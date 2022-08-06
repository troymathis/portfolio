const Contact = () => {
    const createForm = () => {
        return (
            <form>
                <input type='text'
                name='name'
                placeholder="Name"
                />

                <input type='email'
                name='email'
                placeholder="Email"
                />

                <input type='text'
                name='subject'
                placeholder="Subject"
                />
                <br />
                <textarea type='text'
                name='body'
                placeholder="What's on your mind?"
                />
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
            {createForm()}
        </div>
    )
}

export default Contact;