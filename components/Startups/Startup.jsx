import Image from 'next/image'

const Startup = ({
    name,
    logoPath,
    logoWidth,
    logoHeight,
    summary
}) => {

    return (
        <div className="grid grid-rows-2 bg-oxfordblue border border-oxfordblue rounded-xl px-5 py-14 shadow-lg">
            <div className="grid grid-cols-4 w-full mb-6">
                <div className="col-start-2 col-end-4 pt-7">
                    <Image src={logoPath} alt={name} width={logoWidth} height={logoHeight} className="inline-block"/>
                </div>
            </div>
            <p>{summary}</p>
        </div>
    )
}

export default Startup;