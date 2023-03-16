import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { XIcon} from '@sebthedev/swanky-icons'
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
            <div ref={detailsRef} className="top-0 bottom-0 left-0 right-0 fixed z-[101] bg-black outline-none focus:outline-none">
                
                {/* <div  className="fixed inset-0 z-100 bg-black"></div> */}
                <div className="w-full z-[101]">
                    {/* Header */}
                    <div className="">
                        <div className=" grid grid-col-12">
                                {/* <Image src={logoPath} alt={name} width={logoWidth} height={logoHeight} 
                                className="col-start-1 col-end-2 inline-block"/> */}
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
                </div>
            </div>
        </>
    )
}

export default StartupDetailsMobile;