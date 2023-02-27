import Image from "next/image";

export const Hero = () => {
    return (
        <section className="w-full h-screen pt-36" style={{backgroundImage: "radial-gradient(circle at center, #0f0c29, #302b63, #24243e);"}}>
            <div className="z-10 flex justify-center mb-5">
                <Image className="sepia" src="/images/TorsoShot.png" width={350} height={800} quality={100} alt="Seb"/>
            </div>
            <div className="z-20 text-center -mt-12">
                <h1 className="text-6xl mb-6 font-genos bg-gradient-to-r from-midnight-400 via-mint to-midnight-400 bg-clip-text text-transparent">SEBASTIAN WOLFGANG BROWNSTEIN</h1>
                <h2 className="text-2xl">FULL STACK WEB DEVELOPER</h2>
            </div>
        </section>
    );
};

export default Hero;
