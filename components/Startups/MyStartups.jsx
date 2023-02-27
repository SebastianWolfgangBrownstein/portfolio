import Image from 'next/image'
import Startup from './Startup'
import { ChatIcon } from '@sebthedev/swanky-icons'

const MyStartups = () => {
  return (
    <section className="w-full bg-midnight-100 text-center py-20 xl:py-36">
        <div className="px-5 mb-12 xl:px-150 xl:mb-14">
            <h2 className="text-3xl font-secular text-ivory mb-5 lg:mb-10">My Startups</h2>
            <p className="text-lg lg:text-xl">My love for entrepenuership started young. After some friends and I discovered a grove of mango trees in the forest, I would climb the trees and knock down fruit for the others to gather. Then we would hold up a sign and sell them on the side of the road for half the price of the super market. Since then, my entrepenurial passion has evolved into creating digital products and experiences that sell. Turning ideas into reality is what I live for.</p>
        </div>
        
        <div className="grid md:grid-cols-2 justify-items-start space-y-11 md:space-y-1 md:space-x-1 xl:space-y-0 xl:grid-cols-4 px-6 xl:px-60">
            <Startup 
                name="SXD"
                logoPath="/images/SXDLogo.png"
                logoWidth={300}
                logoHeight={100}
                summary="A decentralized cloud storage platform for securely storing large multimedia files."
            />
            <Startup 
                name="Arxade"
                logoPath="/images/ArxadeLogo.png"
                logoWidth={300}
                logoHeight={100}
                summary="A suite of backend APIs for live streaming, real-time communication, and multiplayer gaming."
            />
            <Startup 
                name="CamBling"
                logoPath="/images/CamBlingLogo.png"
                logoWidth={300}
                logoHeight={100}
                summary="A gamified adult webcam site with a fully modernized design & disruptive performer policies."
            />
            <Startup 
                name="Personafi"
                logoPath="/images/PersonafiLogo.png"
                logoWidth={300}
                logoHeight={100}
                summary="A marketplace of voice & personality skins for electronic personal assistants like Alexa."
            />
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