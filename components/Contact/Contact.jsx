import { useState } from "react";
import Header from "../Layout/Header";
import ContactActions from './ContactActions';


const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const { name, email, message } = formData;

    const onReset = () => {
        setFormData({
            name: '',
            email: '',
            message: ''
        });
        setSubmitted(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log('Sending...')
        console.log('Form Data:', formData)

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((res) => {
            console.log('Response recieved')
            if (res.status === 200) {
                console.log('Response success!')
                setSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                })
            }
        })
    }

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <>
            <Header 
                links={<ContactActions onReset={onReset}/>}
            />
            {submitted ? (
                <section className="bg-gunmetal-light flex flex-col items-center w-full lg:h-screen text-center pt-56">
                    <h2 className="text-4xl text-gold font-play mb-10">Thanks for taking the time to reach out!<br/>Your message has arrived in my inbox.</h2>

                    <p className="text-2xl text-tan"> I will do my best to get back to you within 24 hours.</p>
                </section>
            ):(
                <section className="bg-gunmetal-dark flex flex-col items-center w-full text-center pt-40 pb-40">
                    <h1 className="text-4xl text-gold font-play mb-12">Let&apos;s chat, <br/>I&apos;m here to help. </h1>
                    <form 
                        onSubmit={e => onSubmit(e)}
                        className="grid grid-cols-6 gap-x-8 gap-y-6 px-5"
                    >
                        <div className="col-span-6 md:col-span-3 text-left">
                            <label className="text-lg font-play block mb-3 text-tan-300" htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" 
                                className="bg-gunmetal-light min-w-96 w-full text-xl tracking-wide h-14 rounded px-4 text-gold-100"
                                value={name}
                                onChange={onChange}
                                required
                            />
                        </div>

                        <div className="col-span-6 md:col-span-3 text-left">
                            <label className="text-lg font-play block mb-3 text-tan-300" htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" 
                                className="bg-gunmetal-light w-full text-xl tracking-wide h-14 rounded px-4 text-gold-100"
                                value={email}
                                onChange={onChange}
                                required
                            />
                        </div>

                        <div className="col-span-6 text-left">
                            <label className="text-lg font-play block mb-3 text-tan-300" htmlFor="message">Message</label>
                            <textarea 
                                id="message" name="message" cols="80" rows="8" spellCheck="false"
                                className="bg-gunmetal-light form-textarea rounded text-xl tracking-wide px-4 py-6 text-gold-100" 
                                style={{maxWidth: '100%', minHeight: '6rem'}}
                                value={message}
                                onChange={onChange}
                            />
                        </div>
                        
                        <div className="col-span-6 lg:col-start-3 lg:col-end-5 mt-7">
                            <button 
                                type="submit"
                                className="text-lg text-gold bg-overlay-600 border border-gold px-24 lg:px-20 py-3 rounded-full transition-all duration-200 hover:bg-gold hover:text-black shadow-lg"
                            >Submit</button>
                        </div>
                    </form>
                </section>
            )}
        </>
    )
}

export default Contact;