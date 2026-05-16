import { useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Image,
  FileText,
  Mail,
} from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "portfolio", label: "Portfolio", icon: Briefcase },
  { id: "gallery", label: "Gallery", icon: Image },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function PremiumPortfolio() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomePage />;

      case "about":
        return <AboutPage />;

      case "portfolio":
        return <PortfolioPage />;

      case "gallery":
        return <GalleryPage />;

      case "contact":
        return <ContactPage />;

      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="flex flex-col">
          <h1 className="text-2xl font-black tracking-wider bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Opik Iskandar
          </h1>
          
          <div className="hidden md:flex gap-3">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl transition duration-300 ${
                    activePage === item.id
                      ? "bg-cyan-400 text-black shadow-[0_0_25px_rgba(34,211,238,0.5)]"
                      : "bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-300"
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-28 px-6 pb-20 transition-all duration-500">
        {renderPage()}
      </div>
    </div>
  );
}

/* ================= HOME ================= */

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center min-h-[85vh]">
      <div>
        <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-300 mb-6">
          With our great power comes great responsibility
        
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Ilustrator
         - <span className="block text-cyan-400">
             Gamer, Football and Badminton Lovers.
          </span>
        </h1>

        <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-xl">
          Menggabungkan teknologi, kreativitas, gaming, sport dan
          visual art menjadi pengalaman digital modern
        </p>

        <div className="flex gap-4 mt-10 flex-wrap">
          <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition">
            Explore Portfolio
          </button>

          <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            View Projects
          </button>
        </div>
      </div>

      <div className="relative flex justify-center">
        <div className="absolute w-72 h-72 bg-cyan-500/30 blur-3xl rounded-full animate-pulse" />

        <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6">
          <img
            src="public/opik.jpg.jpeg"
            alt="Opik"
            className="mt-4 w-20 h-20 rounded-full object-cover brightness-110 contrast-110 border-2 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-105 transition duration-500"
          />

        </div>
      </div>
    </div>
  );
}

/* ================= ABOUT ================= */

function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
        <h2 className="text-5xl font-black mb-8 text-cyan-400">
          About Me
        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed">
          Halo semuanya perkenal kan nama saya Opik Iskandar
          Saya siswa TKJ yang suka dunia desain,
          bermain game FC Mobile, Mobile Legends Bang Bang,
          pecinta sepakbola dan Badminton dunia (Football and Badminton Lovers),
          editing visual modern.
        </p>



        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {["Sports lovers", "Ilustration Design", "Gaming Content"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-black/30 p-8"
            >
              <h3 className="text-2xl font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= PORTFOLIO ================= */

function PortfolioPage() {
  const projects = [
    { title: "My Sketch", image: "public/sketch.jpg.jpeg" },
    { title: "History my Game", image: "public/history my game. jpg.jpeg" },
    { title: "Football fans", image: "public/football fans.jpg.jpeg" },
    { title: "Badminton fans ", image: "public/Badminton fans.jpg.jpeg" },
    { title: "TKJ activities", image: "public/TKJ activites.jpg.jpeg" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
        <h2 className="text-5xl font-black">Portfolio</h2>

        <span className="text-zinc-400">
          Modern creative showcase.
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-2 transition duration-500 ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            <h3 className="text-3xl font-bold mt-6">{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= GALLERY ================= */

function GalleryPage() {
   const projects = [
    { title: "Spider-man Miles Morales", image: "public/Spiderman.jpg.jpeg" },
    { title: "Kalea Mlbb", image: "public/kalea.jpg.jpeg" },
    { title: "Big Hero", image: "public/astro.jpg.jpeg" },
    { title: "Arkan Dzaki Salman", image: "public/Arkan.jpg.jpeg" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
        <h2 className="text-5xl font-black">Artwork Gallery</h2>

        <span className="text-zinc-400">
          This is a work of art.
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-2 transition duration-500 ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            <h3 className="text-3xl font-bold mt-6">{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
      
            



/* ================= CONTACT ================= */

function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-6xl font-black leading-tight">
        Let’s Build
        <span className="block text-cyan-400">
        -Something Amazing.
        </span>
      </h2>

      <p className="text-zinc-400 text-lg mt-8 leading-relaxed">
        Siap membuat project digital modern dengan visual premium dan
        pengalaman pengguna futuristik.
      </p>

      <div className="flex justify-center gap-4 flex-wrap mt-10">

        <button className="px-10 py-5 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition">
          Contact Me -
          Instagram: pikandarlyn -

          Youtube: pikkaci -

          Tiktok: piskanara -

        </button>

        <button className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
          GgMu 
        </button>
      </div>
    </div>
  );
}