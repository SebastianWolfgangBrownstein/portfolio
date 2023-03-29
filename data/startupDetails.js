const startupDetails = {
    sxd: {
        description: `
            SXD is a decentralized cloud media storage platform for storing high volume multimedia files. 
            The platform leverages a decentralized file storage infrastructure and other Web3 technologies 
            to store large media files more securely and at a fraction the cost of conventional cloud storage solutions. 
            Files are encrypted in transit & at rest and erasure encoded for triple redundancy. My backend solution 
            employs strategic caching layers to minimize user bandwidth usage. The platform is designed to be trustless, 
            allowing the user to back up their media in the cloud while maintaining complete data privacy and control.`,
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
                photoUrl: "/images/SebastianHeadshot.jpeg",
                title: "Founder & Lead Developer"
            }
        ]
    },
    arxade: {
        description: `
            Arxade is a collection of microservices for one-to-many live streaming, real-time communication, user payments 
            & payouts, session orchestration, ranking algorithm computation, and auxiliary systems. Arxade emerged in the process of 
            rearchitecting the essential backend technologies of CamBling into individually scalable systems.`,
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
                photoUrl: "/images/SebastianHeadshot.jpeg",
                title: "Founder & Lead Developer"
            },
            {
                name: "Chuck Mudarski",
                photoUrl: "/images/ChuckProfile.png",
                title: "Head of Marketing"
            },
        ]
    },
    cambling: {
        description: `
            CamBling was a full-featured adult live streaming platform. My development work included: One-to-many live streaming support 
            for 100s of performers & 1000s of viewers, mass micropayment infrastructure, integration with 3rd-party broadcast 
            softwares, user-managed storefronts for media sales, bluetooth hardware integrations, achieving sub-second end-to-end 
            latency on video streams, building custom real-time adult games (leveraging WebGL), and designing a proprietary ranking 
            algorithm to combat unfair discrimination. After 3+ years of development, CamBling soft launched. Due to lack of 
            funding, the project was unable to sustain itself.`,
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
                photoUrl: "/images/SebastianHeadshot.jpeg",
                title: "Founder & Lead Developer"
            },
            {
                name: "Chuck Mudarski",
                photoUrl: "/images/ChuckProfile.png",
                title: "Head of Marketing"
            },
            {
                name: "Milosh Spasik",
                photoUrl: "/images/MiloshProfile.jpeg",
                title: "Frontend Developer"
            },
            {
                name: "Sandy Cowper",
                photoUrl: "/images/SandyHeadshot.jpeg",
                title: "Junior Developer"
            },
            {
                name: "Jack Mackey",
                photoUrl: "/images/JackHeadshot.jpeg",
                title: "Marketing & Outreach"
            }
        ]
    },
    personafi: {
        description: `
            Personafi was an early stage marketplace concept for custom voice and personality modules compatible with 
            personal assistant tech, like Amazon Alexa & Google Home. Personafi's vision was to turn human personality 
            traits into purchasable digital assets. A virtual assistant's backstory, opinions, humor, and outlook would 
            be chosen to suit the user. This project was highly conceptual and only reached the prototyping phase.`,
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
                photoUrl: "/images/SebastianHeadshot.jpeg",
                title: "Founder & Lead Developer"
            }
        ]
    }
}

export default startupDetails;