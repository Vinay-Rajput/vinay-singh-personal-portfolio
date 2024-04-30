import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { DiRor, DiRuby, DiJavascript1, DiGithubBadge } from "react-icons/di";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <DiRor />
            </span>
            <span className="bannerIcon">
              <DiRuby />
            </span>
            <span className="bannerIcon">
              <DiJavascript1 />
            </span>
            <span className="bannerIcon">
              <DiGithubBadge />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media