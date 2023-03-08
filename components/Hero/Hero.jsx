
import HeroShot from './HeroShot'

export const Hero = () => {
    return (
        <section className="relative w-full lg:min-h-[52rem] lg:h-screen pb-10 pt-32" style={{backgroundImage: "radial-gradient(circle at center, #870000, #190a05, #190a05)"}}>  
            <HeroShot />
            <div className="z-20 text-center -mt-4">
                <h1 className="text-4xl md:text-5xl mb-6 font-genos bg-gradient-to-r from-tan via-gold to-tan bg-clip-text text-transparent">FULL STACK WEB DEVELOPER</h1>
            </div>
        </section>
    );
};

export default Hero;
