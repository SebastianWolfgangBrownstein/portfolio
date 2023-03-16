import { useState } from "react";
import Image from "next/image";
import { XIcon} from '@sebthedev/swanky-icons'
import colors from "../../data/colors";


const StartupDetails = ({
    showing,
    hideDetails,
    details
}) => {
    const [currentTab, setCurrentTab] = useState('overview')

    const {
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
    } = details;

    const hide = () => {
        hideDetails()
        setCurrentTab('overview')
    }

    return (
    <>
    {showing ? (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[101] outline-none focus:outline-none "
            >
                <div className="opacity-40 fixed inset-0 z-100 bg-black" onClick={() => hide()}></div>
                <div className="
                    relative w-auto my-6 mx-auto max-w-[90%]
                    lg:min-w-[50%]
                    2xl:max-w-7xl
                ">
                    {/* Content */}
                    <div className=" border-4 border-byzantine-dark rounded-lg shadow-lg relative flex flex-col w-full bg-byzantine-dark outline-none focus:outline-none">
                        {/* Header */}
                        <div className="bg-gunmetal flex items-center justify-start p-5 pl-12 rounded-t">
                            <div className=" grid grid-col-12">
                                <Image src={logoPath} alt={name} width={logoWidth} height={logoHeight} 
                                className="col-start-1 col-end-2 inline-block"/>
                            </div>
                            
                            <button
                                className="absolute top-3 right-3 p-1 bg-transparent border-0  leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => hide()}
                            >
                                <XIcon 
                                    fillColor="#3454d1"
                                    hoverColor="#d6ad30"
                                />
                            </button>
                        </div>
                        {/*body*/}
                        <div className="
                            relative p-6 flex-auto bg-overlay-700 mt-1 
                            2xl:min-h-100
                        ">
                            <div className="flex justify-start space-x-5 mb-8 pl-6">
                                <div 
                                    className="px-4 py-2 bg-overlay-300 border border-byzantine text-byzantine rounded-full transition-all duration-200 hover:cursor-pointer hover:bg-byzantine hover:text-black"
                                    style={currentTab === 'overview' ? {background: '#3454d1', color: 'black'} : {}}
                                    onClick={() => setCurrentTab('overview')}
                                >Overview</div>
                                <div 
                                    className="px-4 py-2 bg-overlay-300 border border-byzantine text-byzantine rounded-full transition-all duration-200 hover:cursor-pointer hover:bg-byzantine hover:text-black"
                                    style={currentTab === 'tech' ? {background: '#3454d1', color: 'black'} : {}}
                                    onClick={() => setCurrentTab('tech')}
                                >Tech Stack</div>
                                <div 
                                    className="px-4 py-2 bg-overlay-300 border border-byzantine text-byzantine rounded-full transition-all duration-200 hover:cursor-pointer hover:bg-byzantine hover:text-black"
                                    style={currentTab === 'team' ? {background: '#3454d1', color: 'black'} : {}}
                                    onClick={() => setCurrentTab('team')}
                                >Team</div>
                            </div>
                            {currentTab === 'overview' ? (
                                <section className="text-left mx-8">
                                    <div className="mb-8">
                                        <h2 className="text-gold text-lg mb-2"><strong>Summary</strong></h2>
                                        <p className="text-tan-200 text-xl leading-relaxed">
                                            {description}
                                        </p>
                                    </div>
                                    <div className="flex justify-start space-x-20">
                                        <div>
                                            <h2 className="text-gold text-lg mb-2"><strong>Founded</strong></h2>
                                            <p className="mb-4 text-tan-200 text-xl leading-relaxed">{founded}</p>
                                        </div>
                                        
                                        <div>
                                            <h2 className="text-gold text-lg mb-2"><strong>Lifespan</strong></h2>
                                            <p className="mb-4 text-tan-200 text-xl leading-relaxed">{lifespan}</p>
                                        </div>
                                        <div>
                                            <h2 className="text-gold text-lg mb-2"><strong>Status</strong></h2>
                                            <p className="mb-4 text-tan-200 text-xl leading-relaxed">{status}</p>
                                        </div>
                                    </div>
                                    
                                </section>
                            ) : currentTab === 'tech' ? (
                                <section className="text-left mx-8">
                                    {tech.hasOwnProperty('frontend') && (
                                        <div>
                                            <h3 className="text-gold pl-1 mb-3 text-lg"><strong>Frontend</strong></h3>
                                            <ul className="
                                                flex flex-wrap space-x-3 text-left
                                                lg:flex-nowrap lg:justify-start">
                                                {tech && tech.hasOwnProperty('frontend') && tech['frontend'].map((_tech, i) => (
                                                <li 
                                                    key={i}
                                                    className={`
                                                    border font-genos text-xl
                                                    bg-overlay-400 rounded-full px-3 pb-1 mb-4`}
                                                    style={{color: `${colors[_tech.toLowerCase()]}`, borderColor: `${colors[_tech.toLowerCase()]}`}}
                                                >{_tech}</li>
                                            ))}
                                            </ul>
                                        </div>
                                    )}
                                    {tech.hasOwnProperty('backend') && (
                                        <div>
                                            <h3 className="text-gold pl-1 mb-3 text-lg"><strong>Backend</strong></h3>
                                            <ul className="
                                                flex flex-wrap space-x-3 text-left
                                                lg:flex-nowrap lg:justify-start">
                                                {tech && tech.hasOwnProperty('backend') && tech['backend'].map((_tech, i) => (
                                                <li 
                                                    key={i}
                                                    className={`
                                                    border font-genos text-xl
                                                    bg-overlay-400 rounded-full px-3 pb-1 mb-4`}
                                                    style={{color: `${colors[_tech.toLowerCase()]}`, borderColor: `${colors[_tech.toLowerCase()]}`}}
                                                >{_tech}</li>
                                            ))}
                                            </ul>
                                        </div>
                                    )}
                                    {tech.hasOwnProperty('devops') && (
                                        <div>
                                            <h3 className="text-gold pl-1 mb-3 text-lg"><strong>DevOps</strong></h3>
                                            <ul className="
                                                flex flex-wrap space-x-3 text-left
                                                lg:flex-nowrap lg:justify-start">
                                                {tech && tech.hasOwnProperty('devops') && tech['devops'].map((_tech, i) => (
                                                <li 
                                                    key={i}
                                                    className={`
                                                    border font-genos text-xl
                                                    bg-overlay-400 rounded-full px-3 pb-1 mb-4`}
                                                    style={{color: `${colors[_tech.toLowerCase()]}`, borderColor: `${colors[_tech.toLowerCase()]}`}}
                                                >{_tech}</li>
                                            ))}
                                            </ul>        
                                        </div>
                                    )}
                                    {tech.hasOwnProperty('testing') && (
                                        <div>
                                            <h3 className="text-gold pl-1 mb-3 text-lg"><strong>Testing</strong></h3>
                                            <ul className="
                                                flex flex-wrap space-x-3 text-left
                                                lg:flex-nowrap lg:justify-start">
                                                {tech && tech.hasOwnProperty('testing') && tech['testing'].map((_tech, i) => (
                                                <li 
                                                    key={i}
                                                    className={`
                                                    border font-genos text-xl
                                                    bg-overlay-400 rounded-full px-3 pb-1 mb-4`}
                                                    style={{color: `${colors[_tech.toLowerCase()]}`, borderColor: `${colors[_tech.toLowerCase()]}`}}
                                                >{_tech}</li>
                                            ))}
                                            </ul>
                                        </div>
                                    )}
                                </section>
                            ): (
                                <section className="text-left mx-8">
                                    <ul>
                                        {team && team.map((member, i) => (
                                            <li key={i} className="
                                                grid grid-cols-4 gap-x-5 mb-6
                                                xl:w-1/2 xl:h-16 xl:mb-2
                                            ">
                                                <div className="ml-auto col-start-1 col-end-2 w-14 h-14 border border-gold rounded-full"></div>
                                                <div className="col-start-2 col-end-5 justify-items-center content-center">
                                                    <h2 className="text-xl text-gold">{member.name}</h2>
                                                    <p className='text-tan'>{member.title}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}
                            
                            
                            
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