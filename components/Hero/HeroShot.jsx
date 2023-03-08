import { useState, useEffect } from 'react';
import classes from './HeroShot.module.css';
import Image from "next/image";

const HeroShot = () => {
    const [glitching, setGlitching] = useState(false);

    useEffect(() => {

        const toggleGlitch = setInterval(() => {
            setGlitching(!glitching)
        }, 6000)

        return () => {
            clearInterval(toggleGlitch)
        }
    }, [glitching])
    
    return (
        <div className="z-10 flex justify-center mb-5">
            <div className={classes.glitch}>
                <Image src='/images/HeroShotSepia.png' width={350} height={800} quality={100} alt="Image of Sebastian Brownstein" priority={true}/>
                
                
                <div className={glitching ? classes.glitchLayers : classes.glitchHidden}>
                    <div className={classes.glitchLayer}></div>
                    <div className={classes.glitchLayer}></div>
                </div>
            </div>
        </div>
    )
}

export default HeroShot;