type THeaderText = {
  title: string;
};

export function TextHeader({ title }: THeaderText) {
  return (
    <div className="flex p-4 items-start justify-start w-full">
      <h1 className="text-xl font-medium text-black">{title}</h1>
    </div>
  );
}
