import { TTypes } from "../stars-now-menu";
import notfound from "../../../img/fallback.jpeg";

export const CardItem = ({
  description,
  img,
  price,
  title,
  onOpen,
  expanded,
}: TTypes & { onOpen: () => void; expanded: boolean }) => {
  const cardWidth = expanded ? "xl:w-44" : "xl:w-46";
  return (
    <div
      onClick={onOpen}
      className={`relative border-2 bottom-2 hover:scale-105 cursor-pointer items-center justify-center shadow-zinc-300 shadow-2xl border-gray-200 rounded-lg flex flex-col bg-white w-36 md:w-36 lg:w-48 ${cardWidth} h-52`}
    >
      <div className="items-center flex justify-center w-40 lg:w-40 xl:w-full h-32 overflow-hidden rounded-t-lg">
        {img ? (
          <img
            className="w-28 md:w-28 lg:w-40 xl:w-full h-full object-cover"
            src={img}
            alt={title}
          />
        ) : (
          <img
            className="md:w-36 lg:w-full h-full object-cover"
            src={notfound}
            alt={title}
          />
        )}
      </div>
      <div className="bg-gray-100 rounded-b-lg w-full h-20 flex flex-col py-4 px-4 items-start justify-start mt-2">
        <h6 className="text-black font-medium text-lg">{title}</h6>
        <div className="flex items-start flex-col justify-start w-full max-w-xs">
          <p className="text-black truncate font-extralight text-xs max-w-full">
            {description}
          </p>
          <p className="text-black font-extralight text-xs">{price}</p>
        </div>
      </div>
    </div>
  );
};
