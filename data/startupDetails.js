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
                name: "Jack Mackey",
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

export default startupDetails;