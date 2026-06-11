import React, { useEffect, useState } from 'react';
import p1 from './uploads/2022/09/DATE-KNIGHT-PIC-2-768x535.jpg';
import p2 from './uploads/2022/09/image-7-768x392.png';
import p3 from './uploads/2022/09/Date-Knight-TV-Show-768x432.jpg';
import p4 from './uploads/2022/09/quest-on-travel-xp-with-Alex-768x768.jpg';
import p5 from './uploads/2022/09/AMUL-768x768.jpg';
import p6 from './uploads/2022/09/image-768x352.png';
import p7 from './uploads/2022/09/Olive-it-up-NDTV-1.jpg';
import p8 from './uploads/2022/09/image-2-768x546.png';
import p9 from './uploads/2022/09/image-6-768x509.png';
import useTitle from '../components/useTitle.jsx';

export default function Media() {
  useTitle('Media');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');

  const mediaShows = [
    {
      id: 1,
      title: 'Date Knight Show - NDTV GoodTimes',
      description: '13 episodes',
      image: p1,
      thumbnail: p1
    },
    {
      id: 2,
      title: 'Date Knight - Episode 1',
      description: 'NDTV GoodTimes',
      image: p2,
      thumbnail: p2
    },
    {
      id: 3,
      title: 'Date Knight - Episode 13',
      description: 'NDTV GoodTimes',
      image: p3,
      thumbnail: p3
    },
    {
      id: 4,
      title: 'Quest - travelxp',
      description: 'Travel and food exploration show',
      image: p4,
      thumbnail: p4
    },
    {
      id: 5,
      title: 'Simple Homemade Recipes',
      description: 'Hosted by Amul',
      image: p5,
      thumbnail: p5
    },
    {
      id: 6,
      title: 'The Great Chefs of India',
      description: 'Zee Business',
      image: p6,
      thumbnail: p6
    },
    {
      id: 8,
      title: 'Olive it up - NDTV GoodTimes',
      description: 'Culinary show featuring olive oil-based recipes',
      image: p7,
      thumbnail: p7
    },
    {
      id: 9,
      title: 'Zee TV Khanna Khazana',
      description: "Chef's Special",
      image: p8,
      thumbnail: p8
    },
    {
      id: 10,
      title: 'Feeding Frenzy - NDTV Metronation',
      description: 'Food and lifestyle show',
      image: p9,
      thumbnail: p9
    }
  ];

  const openLightbox = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedTitle('');
  };

  // Split into rows: first row 1 item, then pairs
  const firstShow = mediaShows[0];
  const remainingShows = mediaShows.slice(1);

  return (
    <div className="min-h-screen bg-[#F7F3F5] py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2B161B] mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Media Shows
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chef Aditya Jaimini has been featured on numerous television shows and media platforms
          </p>
        </div>

        {/* Date Knight Show - Main Feature */}
        <div className="mb-12" data-aos="fade-up">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
              <div 
                className="bg-gray-200 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(firstShow.image, firstShow.title)}
              >
                <img 
                  src={firstShow.thumbnail} 
                  alt={firstShow.title}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#2B161B] mb-3" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  {firstShow.title}
                </h2>
                <p className="text-gray-600 text-lg mb-2">{firstShow.description}</p>
                <span className="inline-block px-3 py-1 bg-[#EF4D48] bg-opacity-10 text-[#EF4D48] rounded-full text-sm w-fit">
                  NDTV GoodTimes
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Shows Grid - Pairs */}
        <div className="space-y-8">
          {/* Episode 1 & Episode 13 - Row 1 */}
          <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up">
            {remainingShows.slice(0, 2).map((show) => (
              <div key={show.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-2 gap-4 p-5">
                  <div 
                    className="bg-gray-200 rounded-lg overflow-hidden cursor-pointer group h-32"
                    onClick={() => openLightbox(show.image, show.title)}
                  >
                    <img 
                      src={show.thumbnail} 
                      alt={show.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-[#2B161B] text-lg mb-1">{show.title}</h3>
                    <p className="text-gray-500 text-sm">{show.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quest & Simple Homemade Recipes - Row 2 */}
          <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="100">
            {remainingShows.slice(2, 4).map((show) => (
              <div key={show.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-2 gap-4 p-5">
                  <div 
                    className="bg-gray-200 rounded-lg overflow-hidden cursor-pointer group h-32"
                    onClick={() => openLightbox(show.image, show.title)}
                  >
                    <img 
                      src={show.thumbnail} 
                      alt={show.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-[#2B161B] text-lg mb-1">{show.title}</h3>
                    <p className="text-gray-500 text-sm">{show.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Great Chefs of India & Spice - Row 3 */}
          <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="200">
            {remainingShows.slice(4, 6).map((show) => (
              <div key={show.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-2 gap-4 p-5">
                  <div 
                    className="bg-gray-200 rounded-lg overflow-hidden cursor-pointer group h-32"
                    onClick={() => openLightbox(show.image, show.title)}
                  >
                    <img 
                      src={show.thumbnail} 
                      alt={show.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-[#2B161B] text-lg mb-1">{show.title}</h3>
                    <p className="text-gray-500 text-sm">{show.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Olive it up & Khanna Khazana - Row 4 */}
          <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="300">
            {remainingShows.slice(6, 8).map((show) => (
              <div key={show.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-2 gap-4 p-5">
                  <div 
                    className="bg-gray-200 rounded-lg overflow-hidden cursor-pointer group h-32"
                    onClick={() => openLightbox(show.image, show.title)}
                  >
                    <img 
                      src={show.thumbnail} 
                      alt={show.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-[#2B161B] text-lg mb-1">{show.title}</h3>
                    <p className="text-gray-500 text-sm">{show.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feeding Frenzy - Row 5 (single or with another) */}
          <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="400">
            {remainingShows.slice(8, 9).map((show) => (
              <div key={show.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-2 gap-4 p-5">
                  <div 
                    className="bg-gray-200 rounded-lg overflow-hidden cursor-pointer group h-32"
                    onClick={() => openLightbox(show.image, show.title)}
                  >
                    <img 
                      src={show.thumbnail} 
                      alt={show.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-[#2B161B] text-lg mb-1">{show.title}</h3>
                    <p className="text-gray-500 text-sm">{show.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-[#2B161B] to-[#453E3E] rounded-2xl p-8 text-white" data-aos="fade-up">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">13+</div>
              <p className="text-white/80">TV Episodes</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <p className="text-white/80">TV Channels</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-white/80">Recipes Featured</p>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div 
              className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-60 rounded-full flex items-center justify-center text-white hover:bg-opacity-80 transition z-10"
                onClick={closeLightbox}
              >
                <i className="fas fa-times text-xl"></i>
              </button>
              <div className="bg-gray-100">
                <img 
                  src={selectedImage} 
                  alt={selectedTitle}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>
              <div className="p-5 text-center bg-white">
                <h3 className="text-xl font-bold text-[#2B161B]">{selectedTitle}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}