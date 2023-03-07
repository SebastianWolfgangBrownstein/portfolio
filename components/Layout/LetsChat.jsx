
const LetsChat = () => {

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-32 w-96 lg:w-3/4 lg:h-32 rounded-xl bg-byzantine-darker shadow-lg lg:px-10 py-14 lg:py-20 -mt-10">
            <div className="grow px-3 w-full mb-8 lg:mb-0">
                <h2 className="font-play text-3xl font-bold text-gold">Ready to Interview</h2>
            </div>
            
            <div className="w-5/6 mb-8 lg:mb-0">
                <p className="text-tan-150">Interested in recruiting me? <strong>I&apos;m currently seeking full-time work</strong> and would love to chat. I know we can build something amazing together.</p>
            </div>
            
            <div className="grow px-3 w-full">
                <button className="text-lg text-gold bg-overlay-600 border border-gold px-12 py-3 rounded-full transition-all duration-200 hover:bg-gold hover:text-black shadow-lg">Let&apos;s do this</button>
            </div>
        </div>
    )
}

export default LetsChat;