import { socialMedia } from '@/data'
import MagicButton from '@/components/ui/MagicButton'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
  return (
     <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
   
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple-300">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:mailtonypd@proton.me">
          <MagicButton
            className="mb-10"
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base mb-5 text-sm md:font-normal font-light">
          Copyright © 2024 Tony P D
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              href={info.link}
              target="_blank"
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200  border border-red-500 rounded-full hover:scale-120"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer