

const team = [
  {
    initials: "JR",
    name: "Fabricio Daniel Ramos Loredo",
    role: "Desarrollador y Operaciones",
    bio: "Apasionado con el cuidado de lentes y dispositivos ópticos",
  },
  {
    initials: "AM",
    name: "Fabricio Daniel Ramos Loredo",
    role: "Operaciones",
    bio: "Experta en gestión de calidad y procesos",
  },
  {
    initials: "PL",
    name: "Fabricio Daniel Ramos Loredo",
    role: "Innovación y operaciones",
    bio: "Química de Materiales",
  },
  {
    initials: "JR",
    name: "Fabricio Daniel Ramos Loredo",
    role: "Desarrollador y Operaciones",
    bio: "Apasionado con el cuidado de lentes y dispositivos ópticos",
  },
  {
    initials: "JR",
    name: "Fabricio Daniel Ramos Loredo",
    role: "Desarrollador y Operaciones",
    bio: "Apasionado con el cuidado de lentes y dispositivos ópticos",
  },
  {
    initials: "JR",
    name: "Fabricio Daniel Ramos Loredo",
    role: "Desarrollador y Operaciones",
    bio: "Apasionado con el cuidado de lentes y dispositivos ópticos",
  },
  {
    initials: "JR",
    name: "Fabricio Daniel Ramos Loredo",
    role: "Desarrollador y Operaciones",
    bio: "Apasionado con el cuidado de lentes y dispositivos ópticos",
  },
  {
    initials: "JR",
    name: "Fabricio Daniel Ramos Loredo",
    role: "Desarrollador y Operaciones",
    bio: "Apasionado con el cuidado de lentes y dispositivos ópticos",
  },
  {
    initials: "JR",
    name: "Fabricio Daniel Ramos Loredo",
    role: "Desarrollador y Operaciones",
    bio: "Apasionado con el cuidado de lentes y dispositivos ópticos",
  },
  {
    initials: "JR",
    name: "Fabricio Daniel Ramos Loredo",
    role: "Desarrollador y Operaciones",
    bio: "Apasionado con el cuidado de lentes y dispositivos ópticos",
  },
  {
    initials: "JR",
    name: "Fabricio Daniel Ramos Loredo",
    role: "Desarrollador y Operaciones",
    bio: "Apasionado con el cuidado de lentes y dispositivos ópticos",
  },
  {
    initials: "JR",
    name: "Fabricio Daniel Ramos Loredo",
    role: "Desarrollador y Operaciones",
    bio: "Apasionado con el cuidado de lentes y dispositivos ópticos",
  },

];

export default function TeamGrid() {
  return (
    <div className="bg-[#ffb525] py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">
        Nuestro Equipo Directivo
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
          >
            <div className="bg-amber-300 text-black font-bold text-xl w-16 h-16 rounded-full flex items-center justify-center mb-4">
              {member.initials}
            </div>
            <h3 className="font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
            <p className="text-sm text-gray-500 mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
