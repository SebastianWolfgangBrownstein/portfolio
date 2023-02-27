import Image from 'next/image'

const Testimonial = ({
    author,
    authorTitle,
    quote,
    imagePath
}) => {

    return (
        <div className="mb-10">
            <div className="flex justify-center w-full mb-10">
                <div className="">
                    <Image src={imagePath} alt={author} width={100} height={80}/>
                </div>
            </div>
            <div className="px-1 xl:px-28 mb-10">
                <p className="leading-8 xl:leading-7 tracking-wide text-lg">&quot;{quote}&quot;</p>
            </div>
            <div className="">
                <h3 className="mb-1 text-lg font-bold text-mint">{author}</h3>
                <p>{authorTitle}</p>
            </div>
        </div>
    )
}

export default Testimonial;