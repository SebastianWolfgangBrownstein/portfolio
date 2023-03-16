import Image from 'next/image'
import { ArrowLeftIcon } from '@sebthedev/swanky-icons'
import useMediaQuery from '../../hooks/useMediaQuery';

const Startup = ({
    name,
    logoPath,
    logoWidth,
    logoHeight,
    summary,
    details,
    expand
}) => {
    const isDesktop = useMediaQuery("(min-width: 1024px)");

    const expandInfo = (_details) => {
        const details = {
            ..._details,
            logoPath: logoPath,
            name: name,
            logoWidth: 150,
            logoHeight: 50,
        }

        expand(details);
    }

    return (
        <div id="startup" className="
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
                    <Image src={logoPath} alt={name} width={logoWidth} height={logoHeight} className="inline-block"/>
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
                    onClick={() => expandInfo(details)}
                >
                    <span 
                    className="flex lg:inline-block font-play text-center"
                    >Learn more 
                    {!isDesktop && <ArrowLeftIcon 
                        width={15}
                        height={15}
                        className="ml-2 mt-1 rotate-180"
                        fillColor={'#3454d1'}
                    />}</span>
            </button>
            
            
            
        </div>
    )
}

export default Startup;

{/* <div id="startup" className="
            grid grid-rows-[40%_1fr] gap-y-3 px-5 pt-0 pb-4 bg-gunmetal border border-gold rounded-xl shadow-lg
            xs:grid-rows-2 xs:pb-9
            sm:grid-rows-4 sm:gap-y-3 sm:pt-2 sm:pb-16
            md:grid-rows-2 md:gap-y-0 md:pt-8 md:pb-8 
            lg:gap-y-2 lg:pb-0
            xl:grid-rows-3 xl:gap-y-0 xl:pb-10 xl:pt-2 
            2xl:grid-rows-2 2xl:pb-8 2xl:px-4
        " >
            <div className="
                grid grid-cols-5 w-full mb-2
                xs:row-start-1 xs:row-end-2
                sm:row-start-1 sm:row-end-4
                md:row-start-1 md:row-end-2
                xl:row-start-1 xl:row-end-3 
                2xl:row-start-1 2xl:row-end-2
            ">
                <div className="col-start-2 col-end-5 pt-7">
                    <Image src={logoPath} alt={name} width={logoWidth} height={logoHeight} className="inline-block"/>
                </div>
            </div>
            <div className="
                md:flex md:flex-col md:space-y-2
                lg:space-y-6
                xl:space-y-8
                2xl:space-y-9
            ">
                <p className="
                    text-tan text-lg italic
                    xs:text-xl
                    sm:text-2xl sm:px-5
                    2xl:text-xl 2xl:px-0
                ">{summary}</p>
                <button 
                    className="
                        mx-auto mt-0 px-6 py-3 rounded-full text-byzantine transition-all duration-200 
                        xs:mt-0
                        md:mt-0  
                        lg:w-1/2 lg:px-6 lg:py-3 lg:border lg:border-byzantine lg:hover:bg-byzantine lg:hover:text-black lg:shadow-lg
                        "
                    onClick={() => expandInfo(details)}
                >
                    <span 
                    className="flex lg:inline-block font-play text-center"
                    >Learn more 
                    {!isDesktop && <ArrowLeftIcon 
                        width={15}
                        height={15}
                        className="ml-2 mt-1 rotate-180"
                        fillColor={'#3454d1'}
                    />}</span>
                </button>
            </div>
            
            
            
        </div> */}