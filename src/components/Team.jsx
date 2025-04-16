

const team = [
  {
    initials: "AE",
    name: "Ajata Ramos Erika",
    role: "Miembro del equipo",
    bio: "Apasionada por la innovación y la colaboración",
  },
  {
    initials: "CE",
    name: "Caballero Eliana Lizbeth",
    role: "Miembro del equipo",
    bio: "Creativa y entusiasta por el trabajo en equipo",
  },
  {
    initials: "CM",
    name: "Caisiri Perez Miguel",
    role: "Miembro del equipo",
    bio: "Comprometido con el desarrollo y la excelencia",
  },
  {
    initials: "EW",
    name: "Encinas Vargas Wendy",
    role: "Miembro del equipo",
    bio: "Responsable y enfocada en resultados",
  },
  {
    initials: "GM",
    name: "Garcia Copatiti Marieli Abigail",
    role: "Miembro del equipo",
    bio: "Apasionada por el aprendizaje continuo",
  },
  {
    initials: "HJ",
    name: "Huayta Cabezas Jessica Alejandra",
    role: "Miembro del equipo",
    bio: "Con visión de mejora constante",
  },
  {
    initials: "NJ",
    name: "Nogales Siles Jewer",
    role: "Miembro del equipo",
    bio: "Colaborativo y motivado por nuevos retos",
  },
  {
    initials: "PV",
    name: "Peñaloza Bravo Valeria",
    role: "Miembro del equipo",
    bio: "Contribuyendo con ideas frescas y soluciones",
  },
  {
    initials: "RF",
    name: "Ramos Loredo Fabricio Daniel",
    role: "Miembro del equipo",
    bio: "Dedicado y proactivo en cada proyecto",
  },
  {
    initials: "RC",
    name: "Rodriguez Ureña Cristhian Rodrigo",
    role: "Miembro del equipo",
    bio: "Enfocado en la calidad y el detalle",
  },
  {
    initials: "RA",
    name: "Rojas Mamani Ayde",
    role: "Miembro del equipo",
    bio: "Entusiasta y con gran disposición al trabajo",
  },
  {
    initials: "TJ",
    name: "Terrazas Ross Juan Gabriel",
    role: "Miembro del equipo",
    bio: "Apasionado por la tecnología y el crecimiento",
  },
  {
    initials: "TN",
    name: "Torrico Rodriguez Natalia",
    role: "Miembro del equipo",
    bio: "Comprometida con el desarrollo del grupo",
  },
  {
    initials: "VX",
    name: "Villca Cespedes Xanel Fabiana",
    role: "Miembro del equipo",
    bio: "Constante y motivada por el progreso",
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
