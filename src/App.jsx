import { useEffect, useRef } from 'react';
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import GalleryPage from './pages/GalleryPage';
import AwardsPage from './pages/AwardsPage';
import ContactPage from './pages/ContactPage';
import Media from './pages/Media';  
import './App.css';
import logo from './pages/images/cropped-cropped-heooo-1-175x82.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Chatbot from './components/Chatbot.jsx';

function useBackgroundMusic() {
  const audioRef = useRef({
    context: null,
    gain: null,
    timer: null,
    isPlaying: false,
  });

  const playMusic = async () => {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) {
      return false;
    }

    const audio = audioRef.current;

    if (!audio.context) {
      audio.context = new AudioContextClass();
      audio.gain = audio.context.createGain();
      audio.gain.gain.value = 0;
      audio.gain.connect(audio.context.destination);
    }

    await audio.context.resume();

    if (audio.context.state !== 'running') {
      return false;
    }

    if (audio.isPlaying) {
      return true;
    }

    audio.gain.gain.setTargetAtTime(0.12, audio.context.currentTime, 0.1);

    const melody = [261.63, 293.66, 329.63, 392, 329.63, 293.66, 261.63, 246.94];
    const drone = [130.81, 196];

    const playTone = (frequency, startAt, duration, volume, type = 'triangle') => {
      const oscillator = audio.context.createOscillator();
      const envelope = audio.context.createGain();

      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, startAt);
      envelope.gain.setValueAtTime(0.001, startAt);
      envelope.gain.exponentialRampToValueAtTime(volume, startAt + 0.08);
      envelope.gain.exponentialRampToValueAtTime(0.001, startAt + duration);

      oscillator.connect(envelope);
      envelope.connect(audio.gain);
      oscillator.start(startAt);
      oscillator.stop(startAt + duration + 0.05);
    };

    const scheduleMusic = () => {
      const startAt = audio.context.currentTime + 0.08;
      const beat = 0.5;

      drone.forEach((frequency) => {
        playTone(frequency, startAt, beat * melody.length, 0.055, 'sine');
      });

      melody.forEach((frequency, index) => {
        playTone(frequency, startAt + index * beat, beat * 1.6, index % 4 === 0 ? 0.18 : 0.13);
      });
    };

    scheduleMusic();

    if (audio.timer) {
      window.clearInterval(audio.timer);
    }

    audio.timer = window.setInterval(scheduleMusic, 4000);
    audio.isPlaying = true;
    return true;
  };

  useEffect(() => {
    const audio = audioRef.current;
    const startMusic = () => {
      playMusic().catch(() => {});
    };
    const startMusicFromControl = (event) => {
      if (!event.target.closest('button, a, input[type="button"], input[type="submit"], [role="button"]')) {
        return;
      }

      startMusic();
    };

    startMusic();

    window.addEventListener('load', startMusic, { once: true });
    document.addEventListener('visibilitychange', startMusic, { once: true });
    document.addEventListener('click', startMusicFromControl, true);
    window.addEventListener('keydown', startMusic, { once: true });

    return () => {
      window.removeEventListener('load', startMusic);
      document.removeEventListener('visibilitychange', startMusic);
      document.removeEventListener('click', startMusicFromControl, true);
      window.removeEventListener('keydown', startMusic);

      if (audio.timer) {
        window.clearInterval(audio.timer);
        audio.timer = null;
      }

      audio.isPlaying = false;

      if (audio.context) {
        audio.context.close();
        audio.context = null;
        audio.gain = null;
      }
    };
  }, []);

  return null;
}

function App() {
  const location = useLocation();
  useBackgroundMusic();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <link rel="icon" href={logo} />
      <div className="min-h-screen" style={{ backgroundColor: '#F7F3F5' }}>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SQXR1K6PSG"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-SQXR1K6PSG');
      </script>
      {/* Header */}
      <header className="site-header" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <Link to="/" className="site-logo">
              <img 
                src={logo} 
                alt="Chef Aditya Jaimini" 
                className="h-16 w-auto"
              />
            </Link>
            
            {/* Main Navigation */}
            <nav className="main-navigation">
              <ul className="flex flex-wrap justify-center gap-1 md:gap-2">
                <li><Link to="/" className={`menu-link ${location.pathname === '/' ? 'current-menu-item' : ''}`}>Home</Link></li>
                <li className="menu-item-has-children">
                  <Link to="/about" className={`menu-link ${location.pathname === '/about' ? 'current-menu-item' : ''}`}>About</Link>
                </li>
                <li><Link to="/projects" className={`menu-link ${location.pathname === '/projects' ? 'current-menu-item' : ''}`}>Projects</Link></li>
                <li><Link to="/gallery" className={`menu-link ${location.pathname === '/gallery' ? 'current-menu-item' : ''}`}>Gallery</Link></li>
                <li><Link to="/awards" className={`menu-link ${location.pathname === '/awards' ? 'current-menu-item' : ''}`}>Awards</Link></li>
                <li><Link to="/media" className={`menu-link ${location.pathname === '/media' ? 'current-menu-item' : ''}`}>Media</Link></li>
                <li><Link to="/contact" className={`menu-link ${location.pathname === '/contact' ? 'current-menu-item' : ''}`}>Contact</Link></li>
              </ul>
            </nav>
            
            {/* Social Icons */}
            <div className="social-icons flex items-center gap-4 ml-auto">
            <a
              href="https://twitter.com/aditya_jaimini"
              aria-label="X"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2B161B] hover:text-white text-2xl transition duration-300"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            

              <a
                href="https://www.youtube.com/c/ChefAdityaJaiminiSPICE"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2B161B] hover:text-[#FF0000] text-2xl transition duration-300"
              >
                <i className="fab fa-youtube"></i>
              </a>

              <a
                href="https://www.facebook.com/aditya.jaimini"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2B161B] hover:text-[#1877F2] text-2xl transition duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="https://www.instagram.com/chefadityajaimini/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2B161B] hover:text-[#E4405F] text-2xl transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Chatbot />

      {/* Footer */}
      <footer className="site-footer" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <nav className="footer-nav">
              <ul className="flex flex-wrap justify-center gap-6">
                <li><Link to="/" className="text-[#2B161B] hover:text-[#EF4D48] transition">Home</Link></li>
                <li><Link to="/about" className="text-[#2B161B] hover:text-[#EF4D48] transition">About</Link></li>
                <li><Link to="/projects" className="text-[#2B161B] hover:text-[#EF4D48] transition">Projects</Link></li>
                <li><Link to="/gallery" className="text-[#2B161B] hover:text-[#EF4D48] transition">Gallery</Link></li>
                <li><Link to="/awards" className="text-[#2B161B] hover:text-[#EF4D48] transition">Awards</Link></li>
                <li><Link to="/media" className="text-[#2B161B] hover:text-[#EF4D48] transition">Media</Link></li>
                <li><Link to="/contact" className="text-[#2B161B] hover:text-[#EF4D48] transition">Contact</Link></li>
              </ul>
            </nav>
            <div className="footer-social flex gap-5">
              <a href="https://twitter.com/aditya_jaimini" target="_blank" rel="noopener noreferrer" className="text-[#2B161B] hover:text-[#1DA1F2] text-xl transition">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.youtube.com/c/ChefAdityaJaiminiSPICE" target="_blank" rel="noopener noreferrer" className="text-[#2B161B] hover:text-[#FF0000] text-xl transition">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.facebook.com/aditya.jaimini" target="_blank" rel="noopener noreferrer" className="text-[#2B161B] hover:text-[#1877F2] text-xl transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/chefadityajaimini/" target="_blank" rel="noopener noreferrer" className="text-[#2B161B] hover:text-[#E4405F] text-xl transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="text-center text-sm mt-8 pt-6 border-t border-gray-200" style={{ color: '#000000' }}>
            <p>Copyright © 2025 Chef Aditya Jaimini | Official Website</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

export default App;
