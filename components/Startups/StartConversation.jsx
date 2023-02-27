import { ChatIcon } from '@sebthedev/swanky-icons'

const StartConversation = () => {
    return (
        <div className="mt-32">
            <h2 className="text-xl lg:text-2xl mb-5 lg:mb-3">Interested in collaborating with me?</h2>
            <p className="px-3 lg:px-0 text-lg mb-16 lg:mb-6">I&apos;m always open to discussing development work or partnership opportunities.</p>
            <button className="border border-mint text-mint px-14 py-3 rounded-full hover:bg-mint hover:text-black transition-all duration-200 shadow-lg">
                <div className="flex">
                    <div className="w-10">
                        <ChatIcon 
                            width={26}
                            height={26}
                            fillColor={"#affcaf"}
                        />
                    </div>
                    <p>Start a conversation</p>
                </div>
                
                
            </button>
        </div>
    )
}

export default StartConversation;