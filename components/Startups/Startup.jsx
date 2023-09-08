import { useState } from 'react';
import Image from 'next/image'
import { ArrowLeftIcon } from '@sebthedev/swanky-icons';
import StartupDetails from './StartupDetails';
import StartupDetailsMobile from './StartupDetailsMobile';

const Startup = ({
    details,
    isMobile
}) => {
    const { name, logoPath, summary } = details;

    const [showingDetails, setShowingDetails] = useState(false);

    const expandInfo = () => setShowingDetails(true);
    const hideDetails = () => setShowingDetails(false);

    return (
        <>
        
        <div className="
            flex flex-col justify-between px-5 pt-0 pb-4 bg-gunmetal border border-gold rounded-xl shadow-lg
            xs:flex xs:flex-col xs:pb-9
            sm:flex sm:flex-col sm:pt-2 sm:pb-16
            md:flex md:flex-col md:pt-8 md:pb-8 
            lg:flex lg:flex-col lg:pb-10
            xl:flex xl:flex-col xl:pb-10 xl:pt-2 
            2xl:flex 2xl:flex-col 2xl:pb-8 2xl:px-4
        " >
            <div className="
                grid grid-cols-5 w-full mb-2
            ">
                <div className="col-start-2 col-end-5 pt-7">
                    <Image src={logoPath} alt={name} width={300} height={100} className="inline-block"/>
                </div>
            </div>
            
            <p className="
                text-tan text-lg italic
                xs:text-xl
                sm:text-2xl sm:px-5
                2xl:text-xl 2xl:px-0 2xl: mb-6
            ">{summary}</p>
                
            
            <button 
                    className="
                        mx-auto mt-0 px-6 py-3 rounded-full text-byzantine transition-all duration-200 
                        xs:mt-0
                        md:mt-0  
                        lg:w-1/2 lg:px-6 lg:py-3 lg:border lg:border-byzantine lg:hover:bg-byzantine lg:hover:text-black lg:shadow-lg
                        "
                    onClick={() => expandInfo()}
                >
                    <span 
                    className="flex lg:inline-block font-play text-center"
                    >Learn more 
                    {isMobile && <ArrowLeftIcon 
                        width={15}
                        height={15}
                        className="ml-2 mt-1 rotate-180"
                        fillColor={'#3454d1'}
                    />}</span>
            </button>
        </div>
        {isMobile ? (
            <StartupDetailsMobile 
                showing={showingDetails}
                hideDetails={hideDetails}
                details={details}
            />
        ):(
            <StartupDetails 
                showing={showingDetails}
                hideDetails={hideDetails}
                details={details}
            />
        )}
        
        </>
    )
}

export default Startup;