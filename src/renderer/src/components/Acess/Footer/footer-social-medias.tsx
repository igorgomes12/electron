/* eslint-disable prettier/prettier */
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "phosphor-react";

export function FooterSocialMedias() {
  return (
    <div className="flex -mt-28 flex-col items-center justify-centers gap-2 ">
      <div className="flex items-center px-1 gap-x-8">
        <button className="bg-transparent text-blue-600 ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/liderautomacaoguarapari/?fref=ts"
          >
            <FacebookLogo size={24} />
          </a>
        </button>
        <button className="bg-transparent text-rose-400 ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/liderautomacao.oficial/"
          >
            <InstagramLogo size={24} />
          </a>
        </button>
        <button className="bg-transparent  text-red-500 ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCmN-Txnu9mgntNmmSM6WE6A/featured"
          >
            <YoutubeLogo size={24} />
          </a>
        </button>
        <button className="bg-transparent  text-blue-300 ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://br.aedin.com/company/liderautomacao"
          >
            <LinkedinLogo size={24} />
          </a>
        </button>
      </div>
      <span className="text-xs py-1">
        Copyright © Lider Automação - {new Date().getFullYear()}
      </span>
    </div>
  );
}
