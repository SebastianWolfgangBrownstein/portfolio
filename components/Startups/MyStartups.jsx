import Startup from './Startup';

import StartConversation from './StartConversation';
import startupDetails from '../../data/startupDetails';
import useMediaQuery from '../../hooks/useMediaQuery';


const MyStartups = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

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
                ">My love for entrepenuership started young. After some friends and I discovered a grove of mango trees in the forest, I would climb the trees and knock down fruit for the others to gather. Then we would hold up a sign and sell them on the side of the road at half the price of the super market. Since then, my entrepenurial passion has evolved into creating digital products and experiences that challenge the status quo.</p>
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
                    details={startupDetails['sxd']}
                    isMobile={isMobile}
                />
                <Startup 
                    details={startupDetails['arxade']}
                    isMobile={isMobile}
                />
                <Startup 
                    details={startupDetails['cambling']}
                    isMobile={isMobile}
                />
                <Startup 
                    details={startupDetails['personafi']}
                    isMobile={isMobile}
                />
            </div>
            
            <StartConversation />
            
        </section>
  )
}

export default MyStartups;