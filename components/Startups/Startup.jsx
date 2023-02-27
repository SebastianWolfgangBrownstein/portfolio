import Image from 'next/image'

const Startup = ({
    name,
    logoPath,
    logoWidth,
    logoHeight,
    summary
}) => {

    return (
        <div className="h-80 grid grid-rows-2 space-y-6 lg:space-y-3 bg-gunmetal border border-gold rounded-xl px-5 py-4 xl:py-3 shadow-lg">
            <div className="grid grid-cols-5 w-full mb-6">
                <div className="col-start-2 col-end-5 pt-7">
                    <Image src={logoPath} alt={name} width={logoWidth} height={logoHeight} className="inline-block"/>
                </div>
            </div>
            <p className="text-tan">{summary}</p>
        </div>
    )
}

export default Startup;