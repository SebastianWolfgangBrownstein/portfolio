import Startup from './Startup'
import StartConversation from './StartConversation';

const MyStartups = () => {
  return (
    <section className="w-full bg-gunmetal text-center py-20 xl:py-36">
        <div className="px-5 mb-12 xl:px-150 xl:mb-14">
            <h1 className="text-3xl font-play text-gold mb-5 lg:mb-10">My Startups</h1>
            <p className="text-lg text-tan lg:text-xl">My love for entrepenuership started young. After some friends and I discovered a grove of mango trees in the forest, I would climb the trees and knock down fruit for the others to gather. Then we would hold up a sign and sell them on the side of the road for half the price of the super market. Since then, my entrepenurial passion has evolved into creating digital products and experiences that sell. Today I&apos;m battle tested in taking an idea from vision to production.</p>
        </div>
        
        <div className="grid md:grid-cols-2 justify-items-start space-y-11 md:space-y-2 md:space-x-2 xl:space-y-0 xl:space-x-6 xl:grid-cols-4 px-6 xl:px-60">
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
        
        <StartConversation />
        
    </section>
  )
}

export default MyStartups;