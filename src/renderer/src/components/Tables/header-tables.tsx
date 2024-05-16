type TOptionAvailability = {
  availability: string;
};

const conteudoAvailability: TOptionAvailability[] = [
  { availability: "Todas" },
  { availability: "Disponível" },
  { availability: "Reservado" },
  { availability: "Ocupado" },
];
export function HeaderTables() {
  return (
    <header className="flex border-2 shadow-md border-gray-200 rounded-lg px-4 py-2 gap-2 items-center justify-center w-full">
      {conteudoAvailability.map(({ availability }, i: number) => (
        <div
          className={`text-black hover:bg-amareloFood/40 p-2 rounded-lg`}
          key={`availability_${availability}-${i}`}
        >
          <button className="text-md px-1">{availability}</button>
        </div>
      ))}
    </header>
  );
}
