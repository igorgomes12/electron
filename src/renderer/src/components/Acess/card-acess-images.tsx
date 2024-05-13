/* eslint-disable prettier/prettier */
import pdv from "../../img/webfoodAnimation.gif";
import { FooterSocialMedias } from "./Footer/footer-social-medias";
export function CardAcessImage() {
  return (
    <div className="flex flex-col justify-between border-r bg-white p-10 text-gray-600">
      <div className="flex -mt-20 flex-col justify-center h-full items-center gap-3 text-lg text-gray-600">
        <img
          className="max-w-[30rem] w-[10rem] sm:w-[15rem] md:w-[20rem] lg:w-[25rem] xl:w-[30rem]"
          src={pdv}
          alt="images"
        />
      </div>
      <footer className="items-center gap-4 justify-center flex text-sm">
        <FooterSocialMedias />
      </footer>
    </div>
  );
}
