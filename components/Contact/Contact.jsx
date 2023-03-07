
const Contact = () => {

    const onSubmit = (e) => {
        e.preventDefault();

        console.log('form submitted')
    }

    return (
        <section className="bg-gunmetal-light flex flex-col items-center w-full h-screen text-center pt-48">
            <h1 className="text-3xl text-gold font-play mb-10">Thanks for taking the time to reach out!</h1>
            <form 
                onSubmit={e => onSubmit(e)}
                className=" grid grid-cols-6 gap-x-8 gap-y-6 px-5"
            >
                <div className="col-span-3 text-left">
                    <label className="block mb-3 text-tan-300" htmlFor="name">Name</label>
                    <input type="text" name="Name" id="name" 
                        className="bg-gunmetal-lighter w-full text-lg h-14 rounded px-4 text-gold-100"
                    />
                </div>

                <div className="col-span-3 text-left">
                    <label className="block mb-3 text-tan-300" htmlFor="email">Email</label>
                    <input type="email" name="Email" id="email" 
                        className="bg-gunmetal-lighter w-full text-lg h-14 rounded px-4 text-gold-100"
                    />
                </div>

                <div className="col-span-6 text-left">
                    <label className="block mb-3 text-tan-300" htmlFor="message">Message</label>
                    <textarea 
                    id="message" name="message" cols="80" rows="8" spellCheck="false"
                    className="bg-gunmetal-lighter form-textarea rounded text-lg px-4 py-6 text-gold-100" 
                    style={{maxWidth: '100%', minHeight: '6rem'}}
                    />
                </div>
                
                <div className="col-start-3 col-end-5 mt-7">
                    <button className="text-lg text-gold bg-overlay-600 border border-gold px-16 py-3 rounded-full transition-all duration-200 hover:bg-gold hover:text-black shadow-lg">Submit</button>
                </div>
                
            </form>
        </section>
    )
}

export default Contact;