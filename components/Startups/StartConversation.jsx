import Link from 'next/link';
import { useState } from 'react';
import { ChatIcon } from '@sebthedev/swanky-icons'

const StartConversation = () => {
    const [hovering, setHovering] = useState(false);

    return (
        <div className="mt-32">
            <h2 className="font-play text-gold text-xl lg:text-2xl mb-5 lg:mb-3">Interested in working together?</h2>
            <p className="px-3 lg:px-0 text-lg text-tan mb-16 lg:mb-6">You&apos;re in luck! I&apos;m currently seeking long-term employment in an established team. Let&apos;s set up a time to chat.</p>
            <Link href="/collaborate">
                <button 
                    className="border border-byzantine text-byzantine px-14 py-3 rounded-full hover:bg-byzantine hover:text-black transition-all duration-200 shadow-lg"
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                >
                    <div className="flex">
                        <div className="w-10">
                            <ChatIcon 
                                width={26}
                                height={26}
                                fillColor={hovering ? "#000000":"#3454d1"}
                                title="ChatIcon"
                            />
                        </div>
                        <p>Start a conversation</p>
                    </div>
                    
                    
                </button>
            </Link>
        </div>
    )
}

export default StartConversation;