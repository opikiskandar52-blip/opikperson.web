import React, { useState, useRef, useEffect } from 'react';

export default function App() {
const [currentTrack, setCurrentTrack] = useState({ title: 'Belum diputar', id: 0, url: '' });
const [isPlaying, setIsPlaying] = useState(false);
const [activeSection, setActiveSection] = useState('home');
const [isMenuOpen, setIsMenuOpen] = useState(false); // <--- TAMBAHKAN INI
const audioRef = useRef(null);

  const tracks = [
    { id: 1, title: 'Romi Jahat- Bunga Kertas Merah Berduri', artist: 'Romi Jahat', url: '/Romi Jahat - Bunga Kertas Merah Berduri [tSbTFH8gtXk].mp3', duration: '04.12' },
    { id: 2, title: 'Dongker- Merusak Kesenangan', artist: 'Dongker', url: '/Merusak Kesenangan - Dongker (Unofficial Lyrics) [7Ymd0E1MIGg].mp3', duration: '3:12' },
    { id: 3, title: 'The Jansen- Mereguk Anti Depresan Lagi', artist: 'The Jansen', url: '/The Jansen - Mereguk Anti Depresan Lagi.mp3', duration: '4:27' }
  ];

  useEffect(() => {
    if (!audioRef.current || !currentTrack.url) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack]);

  const handlePlay = (track) => {
    if (audioRef.current) {
      if (currentTrack.id !== track.id) {
        setCurrentTrack(track);
        audioRef.current.src = track.url;
      }
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.snap-section');
    const options = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          entry.target.classList.add('reveal-active');
        } else {
          entry.target.classList.remove('reveal-active');
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="punk-studio-wrapper">
      {/* Google Fonts (Cabinet Grotesk, Inter, & Permanent Marker untuk coretan Punk) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@800&family=Inter:wght@400;500;600&family=Permanent+Marker&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <style>{`
        :root {
          --border-glow: rgba(255, 255, 255, 0.04);
          --text-neon: #ffffff;
          --text-soft: #8a8a93;
          /* Neon Pop-Punk: Hot Magenta & Electric Cyan */
          --glow-magenta: rgba(236, 72, 153, 0.5);
          --glow-cyan: rgba(6, 182, 212, 0.45);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body, html { overflow: hidden; height: 100%; width: 100%; background: #030305; }

        /* SNAP ENGINE SPLIT PAGES */
        .snap-engine {
          width: 100vw; height: 100vh;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
          scroll-behavior: smooth;
        }

        section {
          width: 100vw; height: 100vh;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          display: flex; align-items: center; justify-content: center;
          padding: 120px 80px 60px 80px; position: relative;
          overflow: hidden;
        }

        /* BACKGROUND PANEL BASE */
        #home { background: #050508; }
        #jansen { background: #0c080e; }
        #playlist { background: #06080b; }
        #lab { background: #0b070c; }
        #profile { background: #040404; }

        /* FIXED NAVIGATION */
        header {
          position: fixed; top: 0; left: 0; width: 100%; display: flex; justify-content: space-between;
          align-items: center; padding: 30px 60px; z-index: 100;
          background: linear-gradient(to bottom, rgba(3,3,5,0.9) 0%, transparent 100%);
          backdrop-filter: blur(12px);
        }
        .brand-logo { 
          font-family: 'Cabinet Grotesk', sans-serif; font-size: 1.3rem; font-weight: 800; letter-spacing: -0.5px; color: #fff;
          text-shadow: 0 0 12px var(--glow-magenta);
        }
        .brand-logo span { color: var(--text-soft); font-weight: 400; text-shadow: none; }
        
        nav ul { display: flex; list-style: none; gap: 8px; background: rgba(255,255,255,0.01); padding: 5px; border-radius: 40px; border: 1px solid var(--border-glow); }
        .nav-link {
          background: none; border: none; color: var(--text-soft); font-weight: 500; font-size: 0.8rem;
          padding: 8px 20px; cursor: pointer; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); border-radius: 30px;
        }
        .nav-link:hover, .nav-link.active { color: #fff; }
        .nav-link.active { 
          background: rgba(236, 72, 153, 0.1); color: #ec4899; font-weight: 600; 
          border: 1px solid rgba(236, 72, 153, 0.3);
          box-shadow: 0 0 15px rgba(236, 72, 153, 0.2);
        }

        /* TEXT GLOWING POP-PUNK ARCHITECTURE */
        .glow-title {
          font-family: 'Cabinet Grotesk', sans-serif; font-weight: 800; font-size: 4rem; line-height: 1.05; 
          letter-spacing: -1.5px; margin-bottom: 25px; color: var(--text-neon);
          text-shadow: 0 0 20px var(--glow-magenta), 0 0 40px rgba(255,255,255,0.1);
        }
        .glow-title span { 
          color: #fff;
          text-shadow: 0 0 25px var(--glow-cyan), 0 0 50px rgba(6, 182, 212, 0.2);
        }
        
        .meta-tag { font-size: 0.75rem; font-weight: 600; color: #ec4899; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 20px; display: block; text-shadow: 0 0 8px rgba(236, 72, 153, 0.4); }
        .desc-text { color: var(--text-soft); font-size: 1.05rem; line-height: 1.65; }

        /* PUNK SCRIBBLE LYRICS WATERMARK */
        .punk-scribble {
          position: absolute; font-family: 'Permanent Marker', cursive;
          color: rgba(236, 72, 153, 0.14); font-size: 1.8rem; transform: rotate(-8deg);
          pointer-events: none; z-index: 1; text-shadow: 0 0 10px rgba(236, 72, 153, 0.05);
        }

        /* STICKER SLAP ATTACHMENT */
        .sticker-badge {
          background: #ec4899; color: #000; font-family: 'Cabinet Grotesk', sans-serif;
          font-weight: 800; font-size: 0.7rem; padding: 4px 12px; text-transform: uppercase;
          transform: rotate(-4deg); display: inline-block; border-radius: 4px;
          box-shadow: 3px 3px 0px #fff; margin-bottom: 15px;
        }

        /* GRID CONTENT SYSTEM */
        .page-grid { width: 100%; max-width: 1200px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; z-index: 2; }
        .page-number {
          position: absolute; top: 100px; right: 60px; font-family: 'Cabinet Grotesk', sans-serif;
          font-size: 10rem; font-weight: 800; opacity: 0.015; line-height: 1; pointer-events: none;
        }

        /* ANIMATION INTERSECTION OBSERVER CORES */
        .anim-fade { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal-active .delay-1 { opacity: 1; transform: translateY(0); transition-delay: 0.1s; }
        .reveal-active .delay-2 { opacity: 1; transform: translateY(0); transition-delay: 0.25s; }
        .reveal-active .delay-3 { opacity: 1; transform: translateY(0); transition-delay: 0.4s; }
        .reveal-active .delay-4 { opacity: 1; transform: translateY(0); transition-delay: 0.55s; }

        /* BRUTALIST IMAGE FRAMES */
        .studio-frame { 
          border-radius: 28px; overflow: hidden; border: 1px solid var(--border-glow); 
          background: rgba(255,255,255,0.01); height: 440px; position: relative;
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.8);
        }
        .studio-frame img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(115%); opacity: 0.25; }

        /* TRACK CONTAINER STRIP */
        .track-list-container { display: flex; flex-direction: column; gap: 12px; }
        .track-strip {
          display: flex; justify-content: space-between; align-items: center; padding: 18px 24px;
          background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.02); border-radius: 16px;
          cursor: pointer; transition: all 0.3s ease;
        }
        .track-strip:hover { background: rgba(255,255,255,0.02); border-color: rgba(255,255,255,0.1); }
        .track-strip.active { 
          border-color: #ec4899; background: rgba(236,72,153,0.02); 
          box-shadow: 0 0 20px rgba(236,72,153,0.05);
        }

        /* CONSOLE BOX HUD */
        .console-box { font-family: monospace; font-size: 0.85rem; color: #a1a1aa; background: #020203; padding: 30px; border-radius: 20px; border: 1px solid var(--border-glow); }
        .console-box span { color: #fff; text-shadow: 0 0 10px rgba(255,255,255,0.5); }

        .badge-cloud { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 25px; }
        .badge-node { background: rgba(255,255,255,0.01); border: 1px solid var(--border-glow); font-size: 0.8rem; padding: 8px 16px; border-radius: 30px; color: #fff; }
        .badge-node.punk-accent { border-color: rgba(236,72,153,0.3); color: #ec4899; }

        /* TOAST BOX FLOATING */
        .now-playing-float { position: fixed; bottom: 40px; left: 60px; background: rgba(5,5,8,0.8); border: 1px solid rgba(236,72,153,0.2); padding: 12px 24px; border-radius: 40px; display: flex; align-items: center; gap: 12px; z-index: 99; font-size: 0.8rem; backdrop-filter: blur(10px); }
        .magenta-pulse { width: 6px; height: 6px; background: #ec4899; border-radius: 50%; box-shadow: 0 0 10px #ec4899; }
      `}</style>

      <audio ref={audioRef} />

      {/* HEADER NAV */}
      <header>
        <div className="brand-logo">RANGGA <span>/ HUB</span></div>
        {/* Tombol Hamburger muncul hanya di mobile */}
  <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
    <i className="fa-solid fa-bars"></i>
  </button>
        <nav>
          <ul>
            <li><button className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button className={`nav-link ${activeSection === 'jansen' ? 'active' : ''}`} onClick={() => scrollToSection('jansen')}>The Jansen</button></li>
            <li><button className={`nav-link ${activeSection === 'playlist' ? 'active' : ''}`} onClick={() => scrollToSection('playlist')}>Playlist</button></li>
            <li><button className={`nav-link ${activeSection === 'lab' ? 'active' : ''}`} onClick={() => scrollToSection('lab')}>Lab Node</button></li>
            <li><button className={`nav-link ${activeSection === 'profile' ? 'active' : ''}`} onClick={() => scrollToSection('profile')}>Kreator</button></li>
          </ul>
        </nav>
      </header>

      {/* AUDIO STATUS TOAST */}
      {currentTrack.id !== 0 && isPlaying && (
        <div className="now-playing-float">
          <div className="magenta-pulse"></div>
          <span style={{ color: '#fff' }}>Now Playing: <strong>{currentTrack.title}</strong></span>
        </div>
      )}

      {/* SYSTEM CORE SNAP MODULES */}
      <div className="snap-engine">
        
        {/* SLIDE 01: HOME DECK */}
        <section id="home" className="snap-section">
          <div className="page-number">01</div>
          <div className="punk-scribble" style={{ bottom: '15%', left: '5%' }}>"Langit tak seharusnya biru..."</div>
          
          <div className="page-grid">
            <div>
              <div className="sticker-badge anim-fade delay-1">SELERA MUSIK // RECORD CLUB</div>
              <span className="meta-tag anim-fade delay-1" style={{ marginTop: '5px' }}>Infrastruktur Jaringan & Audio</span>
              <h1 className="glow-title anim-fade delay-2">The Jansen, Dongker <span>& Romi Evil.</span></h1>
              <p className="desc-text anim-fade delay-3">
                Ruang eksperimen digital independen tempat kalkulasi routing data komputer berinteraksi langsung dengan dinamika energi musik alternatif berkecepatan tinggi.
              </p>
            </div>
            <div className="anim-fade delay-4">
              <div className="studio-frame">
                <img src="/Dongker.jpeg" />
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 02: THE JANSEN INFRA */}
        <section id="jansen" className="snap-section">
          <div className="page-number">02</div>
          <div className="punk-scribble" style={{ top: '15%', right: '8%' }}>"Banal semakin binal!"</div>
          
          <div className="page-grid">
            <div className="anim-fade delay-3">
              <div className="studio-frame">
                <img src="/the-jansen.webp" alt="The Jansen Skena" />
              </div>
            </div>
            <div>
              <span className="meta-tag anim-fade delay-1">Eksplorasi Kultur // Mid-Tempo Punk</span>
              <h2 className="glow-title anim-fade delay-2">The <span>Jansen</span></h2>
              <p className="desc-text anim-fade delay-3" style={{ marginBottom: '15px' }}>
                Unit punk rock asal Kota Bogor yang meramu progresi kord distorsi kilat ala gelombang analog 70-an dengan puitisasi lirik bahasa Indonesia yang rapat dan penuh narasi.
              </p>
              <p className="desc-text delay-4 anim-fade">
                Membuktikan secara nyata bahwa frekuensi audio bising tetap bisa disajikan dalam struktur arsitektur suara yang presisi, bersih, dan elegan.
              </p>
            </div>
          </div>
        </section>

        {/* SLIDE 03: PLAYLIST CONSOLE */}
        <section id="playlist" className="snap-section">
          <div className="page-number">03</div>
          <div className="page-grid" style={{ gridTemplateColumns: '0.9fr 1.1fr' }}>
            <div>
              <span className="meta-tag anim-fade delay-1">Audio Deck // Stream</span>
              <h2 className="glow-title anim-fade delay-2">Katalog <span>Putar</span></h2>
              <p className="desc-text anim-fade delay-3" style={{ marginBottom: '25px' }}>
                Jalankan tracklist punk pilihan di samping untuk memicu sistem pemutar gelombang suara latar belakang secara real-time.
              </p>
              {currentTrack.id !== 0 && (
                <button className="anim-fade delay-4" onClick={() => setIsPlaying(!isPlaying)} style={{ background: '#ec4899', color: '#fff', border: 'none', padding: '14px 30px', borderRadius: '30px', fontWeight: '800', cursor: 'pointer', fontSize: '0.85rem', boxShadow: '0 0 20px rgba(236,72,153,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {isPlaying ? 'Jeda Audio' : 'Putar Kembali'}
                </button>
              )}
            </div>
            <div className="track-list-container anim-fade delay-3">
              {tracks.map((track) => (
                <div 
                  key={track.id} 
                  className={`track-strip ${currentTrack.id === track.id ? 'active' : ''}`}
                  onClick={() => handlePlay(track)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <i className={`fa-solid ${currentTrack.id === track.id && isPlaying ? 'fa-waveform' : 'fa-play'}`} style={{ fontSize: '0.8rem', opacity: 0.8, color: currentTrack.id === track.id && isPlaying ? '#ec4899' : '#fff' }}></i>
                    <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{track.title}</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-soft)', fontFamily: 'monospace' }}>{track.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SLIDE 04: CORE NETWORK LAB */}
        <section id="lab" className="snap-section">
          <div className="page-number">04</div>
          <div className="page-grid">
            <div>
              <div className="sticker-badge anim-fade delay-1" style={{ background: '#06b6d4' }}>PUNK ENGINE CORE</div>
              <span className="meta-tag anim-fade delay-1" style={{ marginTop: '5px' }}>Sistem Jaringan // Routing</span>
              <h2 className="glow-title anim-fade delay-2">Routing Node <span>& Debian.</span></h2>
              <p className="desc-text anim-fade delay-3">
                Implementasi pemetaan gerbang paket data digital menggunakan protokol routing dinamis OSPF skala wilayah backbone, dikelola penuh lewat operating system Linux Debian.
              </p>
            </div>
            <div className="anim-fade delay-4">
              <div className="console-box">
                <p><span>rangga@core-node:~$</span> show ip ospf route</p>
                <p style={{ opacity: 0.4, margin: '8px 0 4px 0' }}>Routing Table via OSPF Area 0</p>
                <p style={{ color: '#ec4899', textShadow: '0 0 8px rgba(236,72,153,0.3)' }}>O&nbsp;&nbsp;192.168.10.0/24 [110/2] via 10.10.10.1</p>
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 05: THE CREATOR */}
        <section id="profile" className="snap-section">
          <div className="page-number">05</div>
          <div className="page-grid" style={{ gridTemplateColumns: '0.8fr 1.2fr' }}>
            <div className="anim-fade delay-3">
              <div className="studio-frame" style={{ height: '380px' }}>
                <img src="/Rangga.jpg" />
              </div>
            </div>
            <div>
              <span className="meta-tag anim-fade delay-1">Kreator Sistem</span>
              <h2 className="glow-title anim-fade delay-2">Rangga <span>Sugianto</span></h2>
              <p className="desc-text anim-fade delay-3">
                Spesialis rekayasa infrastruktur jaringan lokal dan administrasi server. Antusias mengonversikan kesederhanaan struktur UI modern serta menyuntikkan energi kultur alternatif ke dalam baris kode aplikasi web.
              </p>
              <div className="badge-cloud anim-fade delay-4">
                <span className="badge-node">Core Routing Engine</span>
                <span className="badge-node">Linux System Admin</span>
                <span className="badge-node punk-accent">Pop-Punk Enthusiast</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}