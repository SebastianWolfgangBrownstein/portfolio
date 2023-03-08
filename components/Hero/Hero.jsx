import Image from "next/image";

export const Hero = () => {
    return (
        <section className="relative w-full lg:h-screen pb-10 pt-32" style={{backgroundImage: "radial-gradient(circle at center, #870000, #190a05, #190a05)"}}>  
            <div className="z-10 flex justify-center mb-5">
                <Image className="sepia z-10 ml-8" src="/images/TorsoShot.png" width={350} height={800} quality={100} priority={true} alt="Seb"/>
            </div>
            <div className="z-20 text-center -mt-4">
                {/* <h1 className="text-6xl mb-6 font-genos bg-gradient-to-r from-tan via-gold to-tan bg-clip-text text-transparent">SEBASTIAN WOLFGANG BROWNSTEIN</h1> */}
                <h1 className="text-5xl mb-6 font-genos bg-gradient-to-r from-tan via-gold to-tan bg-clip-text text-transparent">FULL STACK WEB DEVELOPER</h1>
            </div>
        </section>
    );
};

export default Hero;
