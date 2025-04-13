const events = [
    { date: "01 de abril 2025", text: "Fundación de Passion Fruit en Cochabamba, Bolivia" },
    { date: "01 de abril 2025", text: "Lanzamiento de nuestra primera línea de productos" },
    { date: "01 de abril 2025", text: "Expansión a nivel nacional" },
  ];
  
  export default function Timeline() {
    return (
      <div className="py-10 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-10">Nuestro Camino</h2>
        <p className="text-center text-gray-700 mb-6">
          A continuación, te mostramos los hitos más importantes de nuestra historia.
            
        </p>
        <div className="relative">
          {/* Línea central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-amber-300"></div>
  
          <div className="flex flex-col gap-12">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;
  
              return (
                <div
                  key={index}
                  className={`relative w-full flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Punto */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FFB525] rounded-full z-10"></div>
  
                  {/* Tarjeta */}
                  <div
                    className={`bg-white shadow-md rounded-xl p-6 w-full md:w-5/12 ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <h3 className="font-semibold text-[#FFB525] mb-1">{event.date}</h3>
                    <p className="text-gray-700 text-sm">{event.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  