import { useState } from 'react';
import Startup from './Startup'
import StartupDetails from './StartupDetails';
import StartConversation from './StartConversation';


const MyStartups = () => {
    const startupDetails = {
        sxd: {
            description: "SXD is a decentralized cloud media storage platform for storing high volume multimedia files. The platform leverages a decentralized file storage infrastructure (Storj) and other Web3 technologies to store large media files more securely and at a fraction the cost of conventional cloud storage solutions. Files are encrypted in transit & at rest and erasure encoded for triple redundancy. My backend solution also utilizes multiple caching layers to minimize user bandwidth usage. I designed the application to give the user maximal control over the security vs accessibility of their files.",
            founded: "12/2022",
            lifespan: "Ongoing",
            status: "In development",
            tech: {
                frontend: ['NextJS', 'Typescript', 'Sass', 'RxJS'],
                backend: ['NextJS', 'Redis', 'Ramda', 'Web3', 'MongoDB', 'S3'],
                devops: ['Docker', 'Kubernetes'],
                testing: ['Jest', 'Supertest']
            },
            team: [
                {
                    name: "Sebastian Brownstein",
                    photoUrl: "",
                    title: "Founder & Lead Developer"
                }
            ]
        },
        arxade: {
            description: "A collection of backend microservice APIs for live streaming, real time communication, user payments & payouts, session orchestration, ranking algorithm computation, and auxiliary systems. After the failed launch of CamBling, I refactored & refined each of the application’s essential technologies into individually scalable microservices, orchestrated using Kubernetes. All modules were rewritten in Typescript.",
            founded: "8/2020",
            lifespan: "Ongoing",
            status: "In development",
            tech: {
                backend: ['Typescript', 'NodeJS', 'WebRTC', 'Socket.io', 'MongoDB'],
                devops: ['Docker', 'Kubernetes', 'Ambassador', 'Nginx'],
                testing: ['Jest', 'Supertest']
            }, 
            team: [
                {
                    name: "Sebastian Brownstein",
                    photoUrl: "",
                    title: "Founder & Lead Developer"
                },
                {
                    name: "Chuck Mudarski",
                    photoUrl: "",
                    title: "Head of Marketing"
                },
            ]
        },
        cambling: {
            description: "Full-featured adult live streaming platform. Built to better serve the adult models in the industry, CamBling was designed based largely on direct user feedback from hundreds of models. The application included several highly innovative features found nowhere else, such as sub-second end-to-end latency on video streams, custom designed adult games (leveraging WebGL), and a unique ranking algorithm built to combat unfair discrimination. After 3+ years of development we suffered a failed launch from which we never recovered",
            founded: "12/2018",
            lifespan: "3.5 Years",
            status: "Concluded",
            tech: {
                frontend: ['ReactJS', 'Redux', 'CSS', 'BabylonJS', 'PixiJS', 'ThreeJS'],
                backend: ['Javascript', 'NodeJS', 'Express', 'MongoDB', 'S3', 'Cloudfront', 'Lodash'],
                testing: ['Jest']
            }, 
            team: [
                {
                    name: "Sebastian Brownstein",
                    photoUrl: "",
                    title: "Founder & Lead Developer"
                },
                {
                    name: "Chuck Mudarski",
                    photoUrl: "",
                    title: "Head of Marketing"
                },
                {
                    name: "Milosh Spasik",
                    photoUrl: "",
                    title: "Frontend Developer"
                },
                {
                    name: "Sandy Cowper",
                    photoUrl: "",
                    title: "Junior Developer"
                },
                {
                    name: "Dave Baroni",
                    photoUrl: "",
                    title: "Marketing & Outreach"
                }
            ]
        },
        personafi: {
            description: "A Proto-Personality is a conceptual yet-to-be-designed alternative personality for voice assistants like Alexa or Google Home. Each Proto-Personality, once fully designed by Personafi, will feature a unique backstory, personal opinions about the subjects that interest them, a unique sense of humor, and a fresh outlook on the world.",
            founded: "3/2016",
            lifespan: "1 Year",
            status: "Concluded",
            tech: {
                frontend: ['ReactJS', 'CSS'],
                backend: ['NodeJS', 'Express', 'Python', 'Pocketsphinx', 'Tensorflow']
            },
            team: [
                {
                    name: "Sebastian Brownstein",
                    photoUrl: "",
                    title: "Founder & Lead Developer"
                }
            ]
        }
    }
    const [showingDetails, setShowingDetails] = useState(false);

    const [details, setDetails] = useState({
        logoPath: "",
        name: "",
        logoWidth: "",
        logoHeight: "",
        description: "",
        founded: "",
        lifespan: "",
        status: "",
        tech: [],
        team: []
    })

    const moreInfo = (_startupDetails) => {
        const {logoPath, name, logoWidth, logoHeight, description, founded, lifespan, status, tech, team} = _startupDetails;
        setDetails({
            ...details,
            logoPath,
            name,
            logoWidth,
            logoHeight,
            description,
            founded,
            lifespan,
            status,
            tech,
            team
        })
        setShowingDetails(true);
    }

    const hideDetails = () => {
        console.log('Hiding Details')
        setShowingDetails(false);
        setDetails({
            logoPath: "",
            name: "",
            logoWidth: "",
            logoHeight: "",
            description: "",
            founded: "",
            lifespan: "",
            status: "",
            tech: [],
            team: []
        })
    }

    return (
        <section id="experience" className="
            w-full bg-gunmetal text-center py-20 
            xl:py-36">
            <div className="
                px-5 mb-12 
                lg:px-10
                xl:px-20
                2xl:px-96 xl:mb-14"
            >
                <h1 className="text-3xl font-play text-gold mb-5 lg:mb-10">My Startups</h1>
                <p className="
                text-tan text-md tracking-wide leading-relaxed
                    xs:text-lg xs:leading-relaxed
                    sm:text-lg sm:leading-loose  
                    lg:text-xl lg:leading-relaxed
                ">My love for entrepenuership started young. After some friends and I discovered a grove of mango trees in the forest, I would climb the trees and knock down fruit for the others to gather. Then we would hold up a sign and sell them on the side of the road for half the price of the super market. Since then, my entrepenurial passion has evolved into creating digital products and experiences that sell. Today I&apos;m battle tested in taking ideas from vision to production.</p>
            </div>
            
            <div className="
                grid justify-items-start px-6 gap-y-10
                md:grid-cols-2 md:gap-4
                lg:gap-8
                xl:gap-8
                2xl:gap-y-0 2xl:gap-x-6 2xl:grid-cols-4 2xl:px-20
                "
            >
                <Startup 
                    name="SXD"
                    logoPath="/images/SXDLogo.png"
                    logoWidth={300}
                    logoHeight={100}
                    summary="A decentralized cloud storage platform for securely storing large multimedia files."
                    details={startupDetails['sxd']}
                    expand={moreInfo}
                />
                <Startup 
                    name="Arxade"
                    logoPath="/images/ArxadeLogo.png"
                    logoWidth={300}
                    logoHeight={100}
                    summary="A suite of backend APIs for live streaming, real-time communication, and multiplayer gaming."
                    details={startupDetails['arxade']}
                    expand={moreInfo}
                />
                <Startup 
                    name="CamBling"
                    logoPath="/images/CamBlingLogo.png"
                    logoWidth={300}
                    logoHeight={100}
                    summary="A gamified adult webcam site with a fully modernized design & disruptive performer policies."
                    details={startupDetails['cambling']}
                    expand={moreInfo}
                />
                <Startup 
                    name="Personafi"
                    logoPath="/images/PersonafiLogo.png"
                    logoWidth={300}
                    logoHeight={100}
                    summary="A marketplace of voice & personality skins for electronic personal assistants like Alexa."
                    details={startupDetails['personafi']}
                    expand={moreInfo}
                />
            </div>
            <StartupDetails 
                showing={showingDetails}
                hideDetails={hideDetails}
                details={details}
            />
            
            <StartConversation />
            
        </section>
  )
}

export default MyStartups;