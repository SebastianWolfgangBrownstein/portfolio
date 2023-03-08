import Link from "next/link";
import { HandWaveIcon } from '@sebthedev/swanky-icons';

const SayHello = () => {

    return (
        <Link href="/contact" role="button">
            <div className="select-none flex justify-center items-center md:text-lg md:text-gold bg-overlay-600 border border-gold w-10 h-10 md:w-auto md:h-auto md:px-10 md:py-1.5 rounded-full transition-all duration-500 hover:bg-gold hover:text-black shadow-lg">
                <span className="hidden md:block">Say Hello</span>
                <HandWaveIcon 
                    width={20}
                    height={20}
                    thickness="light"
                    fillColor='#d6ad30'
                    className="md:hidden"
                />
            </div>
        </Link>
        
    )
}

export default SayHello;