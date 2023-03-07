import Link from "next/link";

const SayHello = () => {

    return (
        <Link href="/contact" role="button">
            <div className="text-lg text-gold bg-overlay-600 border border-gold px-10 py-1.5 rounded-full transition-all duration-500 hover:bg-gold hover:text-black shadow-lg">
                <span>Say Hello</span>
            </div>
        </Link>
        
    )
}

export default SayHello;