import LetsChat from "./LetsChat";

export const Footer = () => {
    return (
        <footer className="flex flex-col items-center w-full text-center pb-28" style={{backgroundImage: "radial-gradient(circle at center, #870000, #190a05, #190a05)"}}>
            <LetsChat />

            <div className="mt-32 mb-10">
                <h1 className="text-6xl font-genos text-gold">SEB</h1>
            </div>
            <div className="w-64 mb-24 lg:w-1/6 lg:px-10 lg:mb-14">
                <p className="text-xl text-tan">Living, learning, & leveling up one day at a time.</p>
            </div>
            <div className="flex space-x-5 mb-16">
                <div className="w-12 h-12 border-2 border-byzantine rounded-full"></div>
                <div className="w-12 h-12 border-2 border-byzantine rounded-full"></div>
                <div className="w-12 h-12 border-2 border-byzantine rounded-full"></div>
            </div>
            <div className="">
                <span className="text-sm text-tan">Made by me &copy; 2023</span>
            </div>
        </footer>
    );
};

export default Footer;
