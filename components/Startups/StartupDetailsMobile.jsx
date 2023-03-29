import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { XIcon, ArrowLeftIcon} from '@sebthedev/swanky-icons'
import colors from "../../data/colors";
import { gsap } from 'gsap';


const StartupDetailsMobile = ({
    showing,
    hideDetails,
    details
}) => {
    const detailsRef = useRef(null);
    const [currentTab, setCurrentTab] = useState('overview');
    const [expanded, setExpanded] = useState(false)

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

    useEffect(() => {
        gsap.set(detailsRef.current, {
            xPercent: -100
        })
    }, [])

    useEffect(() => {

        // console.log('Showing: ', showing)
        // console.log('Expanded: ', expanded)
        const expand = gsap.to(detailsRef.current,
         {
             xPercent: 0,
             duration: 0.5,
             paused: true
         })

         const collapse = gsap.to(detailsRef.current, {
            xPercent: -100,
            duration: 0.5,
            paused:true
         })


        if(showing && !expanded) {
            expand.play()
            setExpanded(true);
        } else if (expanded && !showing) {
            collapse.play()
            setExpanded(false);
        }
    }, [showing, expanded])

    const hide = () => {
        hideDetails()
        
        setCurrentTab('overview')
    }

    return (
        <>
            <div ref={detailsRef} className="
                top-0 bottom-0 left-0 right-0 fixed z-[101] bg-black outline-none focus:outline-none
                lg:w-1/2
                xl:w-1/4
            ">
                <div className="w-full h-full overflow-y-auto pb-24">
                    {/* <div  className="fixed inset-0 z-100 bg-black"></div> */}
                    <div className="fixed w-full z-[101] bg-gunmetal-dark/90 ">
                            {/* Header */}
                            <div className="px-4 py-3">
                                <div className=" grid grid-col-12">
                                        {showing && <Image src={logoPath} alt={name} width={100} height={33} 
                                        className="col-start-1 col-end-2 inline-block"/>}
                                </div>
                                
                                <button
                                    className="absolute top-6 right-3 p-1 bg-transparent border-0  leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => hide()}
                                >
                                    <XIcon 
                                        fillColor="#3454d1"
                                        hoverColor="#d6ad30"
                                    />
                                </button>
                            </div>
                        </div>
                        {/* Overview */}
                        <section className="mt-28 text-left mx-5 sm:mx-8">
                            <div className="mb-8">
                                <h1 className="text-gold text-lg mb-2"><strong>Summary</strong></h1>
                                <p className="
                                    text-tan-300 text-lg leading-relaxed tracking-wide
                                    xs:text-xl xs:leading-9
                                ">{description}</p>
                            </div>
                            <div className="flex flex-col xs:flex-row xs:space-x-10 sm:space-x-16">
                                <div className="mb-3">
                                    <h2 className="text-gold text-lg mb-1"><strong>Founded</strong></h2>
                                    <p className="text-tan-300 text-lg xs:text-xl leading-relaxed">{founded}</p>
                                </div>
                                <div className="mb-3">
                                    <h2 className="text-gold text-lg mb-1"><strong>Lifespan</strong></h2>
                                    <p className="text-tan-300 text-lg xs:text-xl leading-relaxed">{lifespan}</p>
                                </div>
                                <div className="mb-3">
                                    <h2 className="text-gold text-lg mb-1"><strong>Status</strong></h2>
                                    <p className="text-tan-300 text-lg xs:text-xl leading-relaxed">{status}</p>
                                </div>
                            </div>
                            
                        </section>
                        {/* Tech */}
                        <section className="text-left mt-10 mx-5 sm:mx-8">
                            
                            {tech.hasOwnProperty('frontend') && (
                                <div className="mb-5">
                                    <h2 className="text-gold mb-4 text-lg"><strong>Frontend</strong></h2>
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
                                <div className="mb-5">
                                    <h2 className="text-gold mb-4 text-lg"><strong>Backend</strong></h2>
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
                                <div className="mb-5">
                                    <h2 className="text-gold mb-4 text-lg"><strong>DevOps</strong></h2>
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
                                <div className="mb-5">
                                    <h2 className="text-gold mb-4 text-lg"><strong>Testing</strong></h2>
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
                        {/* Team */}
                        <section className="mt-10 text-left mx-5 pb-10 sm:mx-8">
                            <h2 className="text-gold text-lg mb-6"><strong>Team</strong></h2>
                            <ul>
                                {team && team.map((member, i) => (
                                    <li key={i} className="
                                        flex justify-start items-center space-x-5 mb-6
                                    ">
                                        <div className="w-14 h-14 border border-gold rounded-full"></div>
                                        <div className="justify-items-center content-center">
                                            <h2 className="text-xl text-gold">{member.name}</h2>
                                            <p className='text-tan'>{member.title}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </section>
                        {/* Back Button */}
                        <button 
                                className="
                                    mx-auto mt-0  w-3/4 sm:w-1/2 rounded-full text-byzantine border border-byzantine transition-all duration-200"
                                onClick={() => hide()}
                            >
                                <div className="flex justify-center items-center w-44 h-full px-6 py-6 mx-auto">
                                    
                                    <strong className="font-play text-xl">
                                        Return
                                    </strong>
                                </div>
                        </button>
                    </div>
                </div>
                
        </>
    )
}

export default StartupDetailsMobile;