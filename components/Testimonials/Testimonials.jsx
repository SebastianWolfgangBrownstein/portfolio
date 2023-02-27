import Image from 'next/image'

const Testimonials = () => {
  return (
    <section className="w-full bg-oxfordblue text-center px-150 py-36">
        <h2 className="text-2xl font-secular mb-5">Testimonials</h2>
        <p className="mb-16">People I&apos;ve worked with have said some nice things...</p>
        <div className="">
          <div className="flex justify-center w-full mb-10">
            <div className="">
              <Image src="/images/chuck_bitmoji.png" alt="Chuck Mudarski" width={100} height={80}/>
            </div>
          </div>
          <div className="px-28 mb-10">
            <p className="leading-7 tracking-wide text-lg">&quot;During my time working under and with Sebastian, I not only found a leader worth following, but a mentor who pushed me to grow in my role as a graphic designer and branding specialist. He tasked me with things I believed to be beyond my ability, let alone my station in the company, but he believed I could do it. It was his assurance that pushed me over the wall and led me to success if I couldn&apos;t find it myself. To operate alongside Seb is to be his teammate. A teammate that will give you every tool you need to succeed and show you how to use them.&quot;</p>
          </div>
          <div className="">
            <h3 className="mb-1 text-lg font-bold text-mint">Chuck Mudarski</h3>
            <p>Head of Marketing, CamBling</p>
          </div>
        </div>
    </section>
  )
}

export default Testimonials