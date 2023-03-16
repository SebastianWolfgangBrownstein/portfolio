import Image from "next/image";
import {XIcon} from '@sebthedev/swanky-icons'


const StartupDetails = ({
    showing,
    hideDetails,
    details
}) => {
    const {
        logoPath, 
        name, 
        logoWidth, 
        logoHeight, 
        description, 
        founded, 
        lifespan, 
        status
    } = details;

    return (
    <>
    {showing ? (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[101] outline-none focus:outline-none"
            >
                <div className="opacity-40 fixed inset-0 z-100 bg-black" onClick={() => hideDetails()}></div>
                <div className="relative w-auto my-6 mx-auto max-w-7xl">
                    {/* Content */}
                    <div className="border-4 border-byzantine-dark rounded-lg shadow-lg relative flex flex-col w-full bg-byzantine-dark outline-none focus:outline-none">
                        {/* Header */}
                        <div className="bg-gunmetal flex items-center justify-center p-5 rounded-t">
                            <div className=" grid grid-col-12">
                                <Image src={logoPath} alt={name} width={logoWidth} height={logoHeight} 
                                className="col-start-1 col-end-2 inline-block"/>
                            </div>
                            
                            <button
                                className="absolute top-3 right-3 p-1 bg-transparent border-0  leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => hideDetails()}
                            >
                                <XIcon 
                                    fillColor="#3454d1"
                                    hoverColor="#d6ad30"
                                />
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto bg-overlay-700 mt-1">
                            <div className="flex justify-start space-x-5 mb-8">
                                <div className="px-4 py-2 bg-overlay-300 border border-byzantine text-byzantine rounded-full">Overview</div>
                                <div className="px-4 py-2 bg-overlay-300 border border-byzantine text-byzantine rounded-full">Tech Stack</div>
                                <div className="px-4 py-2 bg-overlay-300 border border-byzantine text-byzantine rounded-full">Team</div>
                            </div>
                            <section className="text-left mx-8">
                                <div className="mb-8">
                                    <h2 className="text-tan-200 text-lg mb-2">Summary</h2>
                                    <p className="text-gold text-xl leading-relaxed">
                                        {description}
                                    </p>
                                </div>
                                <div className="flex justify-start space-x-20">
                                    <div>
                                        <h2 className="text-tan-200 text-lg mb-2">Founded</h2>
                                        <p className="mb-4 text-gold text-xl leading-relaxed"><strong>{founded}</strong></p>
                                    </div>
                                    
                                    <div>
                                        <h2 className="text-tan-200 text-lg mb-2">Lifespan</h2>
                                        <p className="mb-4 text-gold text-xl leading-relaxed"><strong>{lifespan}</strong></p>
                                    </div>
                                    <div>
                                        <h2 className="text-tan-200 text-lg mb-2">Status</h2>
                                        <p className="mb-4 text-gold text-xl leading-relaxed"><strong>{status}</strong></p>
                                    </div>
                                </div>
                                
                            </section>
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </>
    ):null}
        
    </>
    
    
    )
}

export default StartupDetails;