import Link from 'next/link';

import {
    GithubIcon,
    LinkedinIcon,
    EnvelopeIcon
} from '@sebthedev/swanky-icons'

import LetsChat from "./LetsChat";

export const Footer = () => {
    return (
        <footer id="contact" className="flex flex-col items-center w-full text-center pb-28" style={{backgroundImage: "radial-gradient(circle at center, #870000, #190a05, #190a05)"}}>
            <LetsChat />
            
            <Link href="/">
                <div className="mt-32 mb-10">
                    <span className="text-6xl font-genos text-gold">SEB</span>
                </div>
            </Link>
            
            <div className="w-64 mb-24 lg:w-1/6 lg:px-10 lg:mb-14">
                <p className="text-xl font-play text-tan-150 tracking-wider">Vengo, Vedo, Vinco</p>
            </div>
            <div className="flex space-x-5 mb-16">
                <a href="https://www.linkedin.com/in/swolfgangb/" rel="noreferrer noopener" target="_blank">
                    <div className="flex justify-center items-center w-12 h-12 border-2 bg-byzantine border-byzantine hover:bg-gold hover:border-gold transition-all duration-500 rounded-full">
                        <LinkedinIcon 
                            width={28}
                            height={28}
                            fillColor='#0f1314'
                            title="LinkedinIcon"
                        />
                    </div>
                </a>
                <a href="https://github.com/SebastianWolfgangBrownstein" rel="noreferrer noopener" target="_blank">
                    <div className="flex justify-center items-center w-12 h-12  bg-gunmetal border-byzantine hover:bg-gold hover:border-gold transition-all duration-500 rounded-full">
                            <GithubIcon 
                                width={50}
                                height={50}
                                fillColor="#3454d1"
                                title="GithubIcon"
                            />
                    </div>
                </a>
                <a href="mailto:sbrownstein.dev@gmail.com">
                    <div className="flex justify-center items-center pb-1 w-12 h-12 border-2 border-byzantine bg-byzantine hover:bg-gold hover:border-gold transition-all duration-500 rounded-full">
                        <EnvelopeIcon 
                            width={27}
                            height={27}
                            fillColor='#0f1314'
                            title="MailIcon"
                        />
                    </div>
                </a>
            </div>
            <div className="">
                <span className="text-sm text-tan">Made by me &copy; 2023</span>
            </div>
        </footer>
    );
};

export default Footer;
