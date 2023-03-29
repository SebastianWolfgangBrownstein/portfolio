import Image from "next/image";
import { capitalizeFirstLetter } from "../../util/capitalizeFirstLetter";

const Project = ({
    name,
    description,
    technologies,
    imagePath,
    imageAlt
}) => {

    return (
        <li className="grid grid-cols-12">
            <div className="bg-oxfordblue lg:bg-byzantine col-start-1 col-end-13 lg:col-start-1 lg:col-end-8 row-start-1 row-end-[-1] relative h-96 w-full rounded-md overflow-hidden">
                <Image className="opacity-10 lg:opacity-80 transition-all duration-300 ease-linear lg:hover:opacity-100" src={imagePath} fill alt={imageAlt}/>
            </div>
            <div className="col-start-1 col-end-13 lg:col-start-7 lg:col-end-[-1] row-start-1 row-end-[-1] z-10 pt-7 pointer-events-none">
                <div className="text-left lg:text-right pl-4 lg:pl-0">
                    <small className="block text-sm text-tan my-1 lg:my-2.5">Featured Project</small>
                    <h2 className="font-play text-gold text-3xl mb-2 lg:mb-5">{name}</h2>
                </div>
                <div className="text-left lg:text-right lg:bg-gunmetal p-6 mb-5 rounded-md lg:shadow-md">
                    <p className="text-tan">{description}</p>
                </div>
                <div className="">
                    <ul className="flex flex-wrap space-x-0 lg:flex-nowrap lg:justify-end lg:space-x-3 text-right">
                        {technologies.map((tech, i) => (
                            <li 
                                key={i}
                                className={`
                                border border-${tech} text-${tech} font-genos text-xl
                                bg-overlay-400 rounded-full px-3 pb-1 mb-4`}
                            >{tech === 'ffmpeg' ? tech : capitalizeFirstLetter(tech)}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    )
}

export default Project;