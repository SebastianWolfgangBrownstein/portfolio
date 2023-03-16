import { useState, useEffect } from 'react';
import Startup from './Startup'
import StartupDetails from './StartupDetails';
import StartConversation from './StartConversation';
import startupDetails from '../../data/startupDetails'


const MyStartups = () => {
    
    const [showingDetails, setShowingDetails] = useState(false);

    const [details, setDetails] = useState({
        logoPath: "",
        name: "",
        logoWidth: "",
        logoHeight: "",
        description: "",
        founded: "",
        lifespan: "",
        status: "",
        tech: [],
        team: []
    })

    const moreInfo = (_startupDetails) => {
        const {logoPath, name, logoWidth, logoHeight, description, founded, lifespan, status, tech, team} = _startupDetails;
        setDetails({
            ...details,
            logoPath,
            name,
            logoWidth,
            logoHeight,
            description,
            founded,
            lifespan,
            status,
            tech,
            team
        })
        setShowingDetails(true);
    }

    const hideDetails = () => {
        setShowingDetails(false);
        setDetails({
            logoPath: "",
            name: "",
            logoWidth: "",
            logoHeight: "",
            description: "",
            founded: "",
            lifespan: "",
            status: "",
            tech: [],
            team: []
        })
    }

    return (
        <section id="experience" className="
            w-full bg-gunmetal text-center py-20 
            xl:py-36">
            <div className="
                px-5 mb-12 
                lg:px-10
                xl:px-20
                2xl:px-96 xl:mb-14"
            >
                <h1 className="text-3xl font-play text-gold mb-5 lg:mb-10">My Startups</h1>
                <p className="
                text-tan text-md tracking-wide leading-relaxed
                    xs:text-lg xs:leading-relaxed
                    sm:text-lg sm:leading-loose  
                    lg:text-xl lg:leading-relaxed
                ">My love for entrepenuership started young. After some friends and I discovered a grove of mango trees in the forest, I would climb the trees and knock down fruit for the others to gather. Then we would hold up a sign and sell them on the side of the road for half the price of the super market. Since then, my entrepenurial passion has evolved into creating digital products and experiences that sell. Today I&apos;m battle tested in taking ideas from vision to production.</p>
            </div>
            
            <div className="
                grid justify-items-start px-6 gap-y-10
                md:grid-cols-2 md:gap-4
                lg:gap-8
                xl:gap-8
                2xl:gap-y-0 2xl:gap-x-6 2xl:grid-cols-4 2xl:px-20
                "
            >
                <Startup 
                    name="SXD"
                    logoPath="/images/SXDLogo.png"
                    logoWidth={300}
                    logoHeight={100}
                    summary="A decentralized cloud storage platform for securely storing large multimedia files."
                    details={startupDetails['sxd']}
                    expand={moreInfo}
                />
                <Startup 
                    name="Arxade"
                    logoPath="/images/ArxadeLogo.png"
                    logoWidth={300}
                    logoHeight={100}
                    summary="A suite of backend APIs for live streaming, real-time communication, and multiplayer gaming."
                    details={startupDetails['arxade']}
                    expand={moreInfo}
                />
                <Startup 
                    name="CamBling"
                    logoPath="/images/CamBlingLogo.png"
                    logoWidth={300}
                    logoHeight={100}
                    summary="A gamified adult webcam site with a fully modernized design & disruptive performer policies."
                    details={startupDetails['cambling']}
                    expand={moreInfo}
                />
                <Startup 
                    name="Personafi"
                    logoPath="/images/PersonafiLogo.png"
                    logoWidth={300}
                    logoHeight={100}
                    summary="A marketplace of voice & personality skins for electronic personal assistants like Alexa."
                    details={startupDetails['personafi']}
                    expand={moreInfo}
                />
            </div>
            <StartupDetails 
                showing={showingDetails}
                hideDetails={hideDetails}
                details={details}
            />
            
            <StartConversation />
            
        </section>
  )
}

export default MyStartups;