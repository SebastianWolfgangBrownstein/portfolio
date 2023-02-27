import Image from 'next/image'
import { ChatIcon } from '@sebthedev/swanky-icons'

const MyStartups = () => {
  return (
    <section className="w-full bg-midnight-100 text-center py-36">
        <div className="px-150 mb-14">
            <h2 className="text-3xl font-secular text-ivory mb-10">My Startups</h2>
            <p className="text-xl">My love for entrepenuership started as a child when some friends and I discovered a grove of mango trees in the forest. I would climb the trees and knock mangos down while another friend gathered them in a sack. Then we would hold up a sign and sell them on the side of the road for half the price of the super market. Since then, my entrepenurial passion has evolved into creating digital products and experiences that sell. Turning ideas into reality is what I live for.</p>
        </div>
        
        <div className="grid grid-cols-4 gap-x-4 px-60">
            <div className="grid grid-rows-2 bg-oxfordblue border border-oxfordblue rounded-xl px-5 py-14 shadow-lg">
                <div className="grid grid-cols-4 w-full mb-6">
                    <div className="col-start-2 col-end-4 pt-7">
                        <Image src="/images/SXDLogo.png" alt="SXD" width={300} height={50} className="inline-block"/>
                    </div>
                </div>
                <p>A decentralized cloud storage platform for securely storing large multimedia files.</p>
            </div>
            <div className="grid grid-rows-2 bg-oxfordblue border border-oxfordblue rounded-xl px-5 py-14 shadow-lg">
                <div className="grid grid-cols-5 w-full mb-6">
                    <div className="col-start-2 col-end-5">
                        <Image src="/images/ArxadeLogo.png" alt="Arxade" width={300} height={100}/>
                    </div>
                </div>
                <p>A suite of backend APIs for live streaming, real-time communication, and multiplayer gaming.</p>
            </div>
            <div className="grid grid-rows-2 bg-oxfordblue border border-oxfordblue rounded-xl px-5 py-14 shadow-lg">
                <div className="grid grid-cols-5 w-full mb-6">
                    <div className="col-start-2 col-end-5">
                        <Image src="/images/CamBlingLogo.png" alt='CamBling' width={200} height={50}/>
                    </div>
                </div>
                <p>A gamified adult webcam site with a fully modernized design & disruptive performer policies.</p>
            </div>
            <div className="grid grid-rows-2 bg-oxfordblue border border-oxfordblue rounded-xl px-5 py-14 shadow-lg">
                <div className="grid grid-cols-5">
                    <div className="relative col-start-2 col-end-5 pb-5">
                        <Image src="/images/PersonafiLogo.png" alt="Personafi" width={220} height={50} className="absolute -top-8 "/>
                    </div>
                </div>
                <p>A marketplace of voice & personality skins for electronic personal assistants like Alexa.</p>
            </div>
        </div>
        <div className="mt-32">
            <h2 className="text-2xl mb-3">Interested in collaborating with me?</h2>
            <p className="text-lg mb-6">I&apos;m always open to discussing development work or partnership opportunities.</p>
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
    </section>
  )
}

export default MyStartups;