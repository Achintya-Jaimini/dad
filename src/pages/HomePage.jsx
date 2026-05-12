import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bgImage from './images/Gilawat-in-Parantha-Tacos-1.jpg';
import taj from './images/Taj_Hotels_logo.svg.png';
import thePark from './images/the-park.png';
import ihg from './uploads/2022/09/IHG_logo_InterContinental_Hotels_Group-1.png';
import radisson from './uploads/2022/09/Radisson-Hotel-Group-logo.png';
import gmr from './uploads/2022/09/GMR-Group-logo.png';
import mariott from './uploads/2023/04/Mariott-Logo.jpg';
import indianHotspot from './uploads/2022/09/INDIAN-HOTSPOT_COLOUR-LOGO_TRIMMED-768x668.png';
import indianCulinaryForum from './uploads/2022/09/Indian-culinary-forum.jpeg';
import worldChefsAssociation from './uploads/2022/09/WORLDCHEFS_Logo.png';
import galleryImage1 from './uploads/2023/03/Screenshot-2022-09-05-100443-1.jpeg';
import galleryImage2 from './uploads/2023/02/adityapic.jpeg';
import galleryImage3 from './uploads/2022/09/With-Hillary-Clinton.jpeg';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const associations = [
    { name: 'Taj Hotels', img: `${taj}` },
    { name: 'The Park', img: `${thePark}` },
    { name: 'Intercontinental Hotels Group', img: `${ihg}` },
    { name: 'Radisson Hotel Group', img: `${radisson}` },
    { name: 'GMR', img: `${gmr}` },
    { name: 'The Mariott', img: `${mariott}` },
    { name: 'INDIAN HOTSPOT', img: `${indianHotspot}` },
    { name: 'Indian Culinary Forum', img: `${indianCulinaryForum}` },
    { name: 'WORLD CHEFS ASSOCIATION', img: `${worldChefsAssociation}` },
  ];

  const galleryImages = [
    { img: `${galleryImage1}`, title: 'Chef Aditya at The Park' },
    { img: `${galleryImage2}`, title: 'Chef Aditya decorating Phyllo Pouches' },
    { img: `${galleryImage3}`, title: 'Chef Aditya With Hillary Clinton' },
  ];

  return (
    <>
      {/* Hero Section - matching original hero style */}
      <div 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url(${bgImage})`,
        }}
      >
        
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Chef Aditya Jaimini
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto italic mb-10 leading-relaxed">
            "It is a journey where I am choosing the options to learn and grow professionally and personally, 
            faith keeps me going. After years of learning, I would like to Showcase my culinary expertise 
            by leveraging my knowledge and experience."
          </p>
          <Link 
            to="/about" 
            className="inline-flex items-center gap-3 border-b-2 border-[#EF4D48] text-white hover:text-[#EF4D48] transition-all duration-300 text-lg font-semibold py-3 px-6"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            About Chef Aditya Jaimini
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      {/* Associations Section */}
      <section className="py-20 px-6 md:px-12" style={{ backgroundColor: '#F7F3F5' }}>
        <div className="container mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16" 
            style={{ color: '#2B161B', fontFamily: "'Open Sans', sans-serif" }}
            data-aos="fade-up"
          >
            Associations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
            {associations.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-[200px] text-center"
                data-aos="fade-up" 
                data-aos-delay={idx * 50}
              >
                <div className="h-24 flex items-center justify-center mb-3">
                  <img src={item.img} alt={item.name} className="max-h-20 max-w-full object-contain" />
                </div>
                <p className="text-xs text-gray-600 font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                data-aos="fade-up" 
                data-aos-delay={idx * 100}
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={img.img} 
                    alt={img.title} 
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                      idx === 2 ? 'object-cover object-top' : 'object-cover'
                    }`}
                  />
                </div>
                <div className="p-4" style={{ backgroundColor: '#F7F3F5' }}>
                  <p className="text-center font-medium" style={{ color: '#2B161B' }}>{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

                  {/* Book Section */}
      <section className="py-12 px-6 md:px-12" style={{ background: 'linear-gradient(135deg, #2B161B 0%, #453E3E 100%)' }}>
        <div className="container mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center text-white mb-8" 
            style={{ fontFamily: "'Open Sans', sans-serif" }}
            data-aos="fade-up"
          >
            My Book
          </h2>
          <div className="flex justify-center">
            <div className="max-w-sm w-full text-center" data-aos="fade-up">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm hover:bg-opacity-20 transition-all">
                <h3 className="text-xl font-bold text-white mb-2">Life is to enjoy...Eat Dessert First</h3>
                <p className="text-white/70 text-xs mb-4">Collection of unique and simple dessert recipes</p>
                <p className="text-white/50 text-xs mb-5">CHEF ADITYA JAIMINI</p>
                <a 
                  href="https://www.amazon.com/Life-enjoy-Eat-dessert-first-ebook/dp/B0B6RB82F2?sr=8-1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#EF4D48] hover:bg-[#D90700] transition-colors px-5 py-2 rounded-md font-semibold text-white text-sm"
                >
                  Order Your Copy <i className="fas fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
    </>
  );
}