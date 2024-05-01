import React from 'react'
import { FaFacebookF, FaLinkedinIn , FaInstagram} from "react-icons/fa";
import { DiRor, DiRuby, DiJavascript1, DiGithubBadge } from "react-icons/di";

const LinkedInIcon = () => (
  <a href="https://www.linkedin.com/in/vinay-singh-rajput" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn />
  </a>
);

const InstagramIcon = () => (
  <a href="https://www.instagram.com/vinay_rajput_002" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
);

const FacebookIcon = () => (
  <a href="https://www.facebook.com/vinay.chouhan.777158" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>
);

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FacebookIcon />
            </span>
            <span className="bannerIcon">
              <InstagramIcon />
            </span>
            <span className="bannerIcon">
              <LinkedInIcon />
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