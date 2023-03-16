import Image from 'next/image'

const Startup = ({
    name,
    logoPath,
    logoWidth,
    logoHeight,
    summary
}) => {

    return (
        <div className="
        grid grid-rows-2 space-y-6 max-h-80 h-80 px-5 py-4 bg-gunmetal border border-gold rounded-xl shadow-lg
        lg:h-96 lg:space-y-10
        xl:h-80 xl:space-y-3 xl:py-3">
            <div className="grid grid-cols-5 w-full mb-14 xl:mb-6">
                <div className="col-start-2 col-end-5 pt-7">
                    <Image src={logoPath} alt={name} width={logoWidth} height={logoHeight} className="inline-block"/>
                </div>
            </div>
            <p className="text-tan">{summary}</p>
        </div>
    )
}

export default Startup;