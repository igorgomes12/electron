/* eslint-disable no-undef */
export type TButtonsComand = {
  icon?: JSX.Element;
  titleButton: string;
  className?: string;
  onClick?: () => void;
};

export function ButtonIcon({
  icon,
  titleButton,
  className,
  onClick,
}: TButtonsComand) {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-100 border-r-gray-400 border-b-gray-400 border-2 shadow-lg hover:bg-gray-200 flex items-center flex-col gap-1 rounded-md w-full p-1 ${className}`}
    >
      {icon}
      <p className="text-xs text-black">{titleButton}</p>
    </button>
  );
}
