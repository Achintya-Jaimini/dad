import React, { useEffect, useState } from 'react';
import p1 from './uploads/2023/08/Egremontz.jpg';
import p2 from './uploads/2023/08/The-Imperial-Spice.png';
import p3 from './uploads/2023/08/k-se-kulcha.png';
import p4 from './uploads/2023/08/Desi-Vibes.jpg';
import p5 from './uploads/2023/08/Spice-Art.png';
import indianHotspot from './uploads/2022/09/INDIAN-HOTSPOT_COLOUR-LOGO_TRIMMED-768x668.png';
import indianCulinaryForum from './uploads/2022/09/Indian-culinary-forum.jpeg';
import worldChefsAssociation from './uploads/2022/09/WORLDCHEFS_Logo.png';

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');

  
  // Projects data based on the HTML file
  const projects = [
    {
      id: 1,
      title: 'Egremontz',
      description: 'A premium cunsultancy service for the hospitality industry',
      images: [
        { src: p1, label: 'Egremontz' }
      ]
    },
    {
      id: 2,
      title: 'The Imperial Spice',
      description: 'Authentic Indian fine dining experience',
      images: [
        { src: p2, label: 'The Imperial Spice' }
      ]
    },
    {
      id: 3,
      title: 'Spice Art',
      description: 'Award-winning Indian specialty restaurant',
      images: [
        { src: p5, label: 'Spice Art' }
      ]
    },
    {
      id: 4,
      title: 'क Se Kulcha',
      description: 'Traditional kulcha specialty restaurant',
      images: [
        { src: p3, label: 'क Se Kulcha' }
      ]
    },
    {
      id: 5,
      title: 'Desi Vibes',
      description: 'Modern Indian street food concept',
      images: [
        { src: p4, label: 'Desi Vibes' }
      ]
    },
    {
      id: 6,
      title: 'Indian Hotspot',
      description: 'A vibrant Indian restaurant concept celebrating the diversity of Indian cuisine',
      images: [
        { src: indianHotspot, label: 'Indian Hotspot' }
      ]
    },
    {
      id: 7,
      title: 'Indian Culinary Forum',
      description: 'A platform for culinary professionals to share knowledge and promote Indian cuisine globally',
      images: [
        { src: indianCulinaryForum, label: 'Indian Culinary Forum' }
      ]
    },
    {
      id: 8,
      title: 'World Chefs Association',
      description: 'A global network of culinary professionals and chefs',
      images: [
        { src: worldChefsAssociation, label: 'World Chefs Association' }
      ]
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

  return (
    <div className="min-h-screen bg-[#F7F3F5] py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2B161B] mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore Chef Aditya's signature culinary ventures and restaurant concepts
          </p>
        </div>

        {/* First Row - 2 projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-8" data-aos="fade-up">
          {projects.slice(0, 2).map((project, idx) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(project.images[0].src, project.title)}
            >
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img 
                  src={project.images[0].src} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-[#2B161B] mb-2">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 4 projects */}
        <div className="grid md:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="200">
          {projects.slice(2, 6).map((project, idx) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(project.images[0].src, project.title)}
            >
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img 
                  src={project.images[0].src} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5 text-center">
                <h2 className="text-xl font-bold text-[#2B161B] mb-2">{project.title}</h2>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
          <br />
          <br />
          <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-5xl md:text-6xl font-bold text-[#2B161B] mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Memberships
          </h1>
          </div>
        {/* Second Row - 2 projects */}
        <div
  className="flex flex-wrap justify-center gap-10 mt-10"
  data-aos="fade-up"
  data-aos-delay="200"
>
          {projects.slice(6, 9).map((project, idx) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer w-[320px]"
              onClick={() => openLightbox(project.images[0].src, project.title)}
            >
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img 
                  src={project.images[0].src} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5 text-center">
                <h2 className="text-xl font-bold text-[#2B161B] mb-2">{project.title}</h2>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Section */}
        <div className="mt-20" data-aos="fade-up">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#2B161B] mb-6 text-center" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              About These Projects
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Chef Aditya Jaimini has conceptualized and launched several successful restaurant brands 
                that showcase his culinary expertise and passion for Indian cuisine.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="border-l-4 border-[#EF4D48] pl-4">
                  <h3 className="font-bold text-lg text-[#2B161B] mb-2">Spice Art</h3>
                  <p className="text-sm">An Indian specialty restaurant that won the 'Best North Indian' restaurant in Delhi for 4 consecutive years at the Times Food Award.</p>
                </div>
                <div className="border-l-4 border-[#EF4D48] pl-4">
                  <h3 className="font-bold text-lg text-[#2B161B] mb-2">The Imperial Spice</h3>
                  <p className="text-sm">A fine dining destination offering authentic Indian flavors with a modern twist.</p>
                </div>
                <div className="border-l-4 border-[#EF4D48] pl-4">
                  <h3 className="font-bold text-lg text-[#2B161B] mb-2">क Se Kulcha</h3>
                  <p className="text-sm">A unique concept celebrating the traditional Indian kulcha with innovative variations.</p>
                </div>
                <div className="border-l-4 border-[#EF4D48] pl-4">
                  <h3 className="font-bold text-lg text-[#2B161B] mb-2">Desi Vibes</h3>
                  <p className="text-sm">Modern Indian street food concept bringing authentic flavors to a contemporary audience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div 
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-75 transition z-10"
                onClick={closeLightbox}
              >
                <i className="fas fa-times text-xl"></i>
              </button>
              <div className="bg-gray-200">
                <img 
                  src={selectedImage} 
                  alt={selectedTitle}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-[#2B161B]">{selectedTitle}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}