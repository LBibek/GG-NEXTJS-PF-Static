import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxFace,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <a href="https://www.youtube.com/@goinggenius" target="_blank" rel="noopener noreferrer" className="text-[15px] ml-[6px]">Youtube</a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <a href="https://github.com/LBibek" target="_blank" rel="noopener noreferrer" className="text-[15px] ml-[6px]">Github</a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <a href="https://discord.gg/7puuzdfS" target="_blank" rel="noopener noreferrer" className="text-[15px] ml-[6px]">Discord</a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <a href="https://www.instagram.com/goinggenius/" target="_blank" rel="noopener noreferrer" className="text-[15px] ml-[6px]">Instagram</a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxFace />
              <a href="https://www.facebook.com/Goinggenius" target="_blank" rel="noopener noreferrer" className="text-[15px] ml-[6px]">Facebook</a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <a href="https://www.linkedin.com/company/74885864" target="_blank" rel="noopener noreferrer" className="text-[15px] ml-[6px]">Linkedin</a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Genius</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                bibeklamatamg@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Going Genius Dev 2024. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
