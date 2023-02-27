
export const Footer = () => {
    return (
        <footer className="flex flex-col items-center w-full bg-midnight-100 text-center pb-28">
            <div className="flex justify-center items-center space-x-32 w-3/4 h-32 rounded-xl bg-midnight-400 shadow-lg px-10 py-20 -mt-10">
                <div className="grow px-3 w-full">
                    <h2 className="text-3xl font-bold">Start a project</h2>
                </div>
                
                <div className="w-5/6">
                    <p className="">Interested in working together? We should set up a time to chat. I&apos;ll buy the coffee.</p>
                </div>
                
                <div className="grow px-3 w-full">
                    <button className="text-lg border border-mint px-12 py-3 rounded-full transition-all duration-200 hover:bg-mint hover:text-black shadow-lg">Let&apos;s do this</button>
                </div>
            </div>

            <div className="mt-32 mb-10">
                <h1 className="text-6xl font-genos">SEB</h1>
            </div>
            <div className="w-1/6 px-10 mb-14">
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
