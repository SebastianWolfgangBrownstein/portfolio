import LetsChat from "./LetsChat";

export const Footer = () => {
    return (
        <footer className="flex flex-col items-center w-full bg-midnight-100 text-center pb-28">
            <LetsChat />

            <div className="mt-32 mb-10">
                <h1 className="text-6xl font-genos">SEB</h1>
            </div>
            <div className="w-64 mb-24 lg:w-1/6 lg:px-10 lg:mb-14">
                <p className="text-xl">Living, learning, & leveling up one day at a time.</p>
            </div>
            <div className="flex space-x-5 mb-16">
                <div className="w-12 h-12 border-2 border-amethyst rounded-full"></div>
                <div className="w-12 h-12 border-2 border-amethyst rounded-full"></div>
                <div className="w-12 h-12 border-2 border-amethyst rounded-full"></div>
            </div>
            <div className="">
                <span className="text-sm">Made by me &copy; 2023</span>
            </div>
        </footer>
    );
};

export default Footer;
