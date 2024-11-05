import React, { useState } from 'react';
import './App.css';
import FaqSection from './components/FAQ/FAQSection';
import BottomNavbar from './components/BNB/bottomNavBar';
import LoginModal from './components/Login/LoginModal'; 

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="brand-prime">Prime</span> 
          <span className="brand-testing"> Testing</span>
        </div>
        <div className="navbar-buttons">
          <button 
            className="btn-login" 
            onClick={() => setIsLoginModalOpen(true)}
          >
            Iniciar Sesion
          </button>
          <button className="btn-join">Unirse</button>
        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
      />
      
      {/* Main content of the page */}
      <main className="main-content">
        <div className="premium-services">
          <div className="text-content">
            <h1>
              PRUEBA LOS <span className="premium">SERVICIOS PREMIUM</span> DE TUS APLICACIONES FAVORITAS
            </h1>
            <p className="descripcion-home">
              ESCOGE LA APLICACION QUE DESEES, PRUEBA Y DECIDE SI SUSCRIBIRTE
            </p>
            <button className="btn-join-2">UNIRSE</button>
          </div>
          <div className="image-content">
            <img src="/assets/images/GalleryViewWebPages.svg" alt="App Screenshots" className="app-image" />
          </div>
        </div>

        <div className="opciones-logos">
          <h2>Servicios de aplicaciones como...</h2>
          <div className="logos-container">
            <img src="/assets/images/Spotify.svg" alt="Spotify" />
            <img src="/assets/images/Patreon.svg" alt="Patreon" />
            <img src="/assets/images/AppleMusic.svg" alt="AppleMusic" />
            <img src="/assets/images/Discord.svg" alt="Discord" />
            <img src="/assets/images/Youtube.svg" alt="Youtube" />
          </div>
          <p className="descripcion-opciones-home">Entre otras...</p>
        </div>

        <FaqSection />
      </main>

      {/* Bottom Navigation Bar */}
      <BottomNavbar />
    </div>
  );
}

export default App;