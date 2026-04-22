import { ArrowRight, Utensils, ShoppingCart, Pill, Workflow, Brain } from "lucide-react";

const blueTools = [
  {
    name: "BlueChef",
    description: "Planificador de menú familiar con IA. Menús prácticos considerando alergias y gustos de todos.",
    icon: Utensils,
    price: "~$5 USD",
  },
  {
    name: "BlueCart",
    description: "Lista de compras colaborativa vía WhatsApp conectada a Google Sheets.",
    icon: ShoppingCart,
    price: "~$5 USD",
  },
  {
    name: "BlueMed",
    description: "Resumen de historial médico familiar organizado por integrante.",
    icon: Pill,
    price: "~$5 USD",
  },
  {
    name: "BlueFlow",
    description: "Automatizaciones sencillas para el hogar y negocio (Bots, Calendarios).",
    icon: Workflow,
    price: "~$5 USD",
  },
  {
    name: "BlueMind",
    description: "Herramienta de estudio con IA basada en tus propios materiales.",
    icon: Brain,
    price: "~$5 USD",
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-brand-text font-sans">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-brand-blue">thebluewoman</div>
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#herramientas" className="hover:text-brand-dark transition">Herramientas</a>
            <a href="#comunidad" className="hover:text-brand-dark transition">Comunidad</a>
            <a href="https://azulmunguia.com" target="_blank" className="hover:text-brand-dark transition">Sobre Azul</a>
          </div>
          <button className="bg-brand-coral text-white px-6 py-2 rounded-full font-semibold text-sm">
            Únete gratis
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-dark leading-tight">
              IA práctica para gestionar tu hogar y negocio sin perder la cordura.
            </h1>
            <p className="text-xl text-brand-text/80">
              Herramientas diseñadas por una mujer real para ayudarte a gestionar múltiples roles de forma concreta y sencilla.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#herramientas" className="bg-brand-coral text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2">
                Ver las herramientas <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#comunidad" className="bg-white text-brand-text border-2 border-gray-100 px-8 py-4 rounded-full font-semibold text-center">
                Únete a la comunidad
              </a>
            </div>
          </div>
          <div className="bg-brand-bgLight aspect-square rounded-3xl flex items-center justify-center text-brand-blue/40 font-medium">
            [Imagen: Mujer real y práctica]
          </div>
        </div>
      </header>

      {/* BLUE TOOLS */}
      <section id="herramientas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-brand-dark mb-12 text-center">Blue Tools</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blueTools.map((tool, i) => (
              <div key={i} className="p-8 rounded-2xl border border-gray-100 space-y-4 hover:border-brand-blue/30 transition">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-dark">
                  <tool.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">{tool.name}</h3>
                <p className="text-brand-text/80 leading-relaxed">{tool.description}</p>
                <div className="pt-4 font-bold text-brand-blue">{tool.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE AZUL */}
      <section className="py-24 bg-brand-bgLight">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white aspect-[3/4] rounded-2xl"></div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-brand-dark">Soy Azul Munguia</h2>
            <p className="text-lg leading-relaxed">
              Maestra, mamá y emprendedora. Uso la IA para recuperar tiempo práctico para mi familia y mis negocios. Creé estas herramientas porque yo también las necesito.
            </p>
            <a href="https://azulmunguia.com" className="text-brand-blue font-bold flex items-center gap-2">
              Conoce más sobre mi enfoque <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-brand-text/60 border-t border-gray-100">
        <p>© 2025 The Blue Woman. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
