import React, { useEffect, useState } from 'react';
import bgImage from './images/Gilawat-in-Parantha-Tacos-1.jpg';

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('innews');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');

  // In News Gallery Images (from dad index.html (1).html)
  const inNewsImages = [
    //{ src: 'https://via.placeholder.com/218x300?text=THE+HINDU+JAN+2010', title: 'THE HINDU JAN 2010', description: 'Newspaper feature in The Hindu' },
    { src: '../wp-content/uploads/2022/09/HT-CITY-JUNE-2010-745x1024.jpg', title: 'Hindustan Times CITY JUNE 2010', description: 'Hindustan Times city edition feature' },
    { src: '../wp-content/uploads/2022/09/THE-PIONEER-DEC-2009-745x1024.jpg', title: 'THE PIONEER DEC 2009', description: 'The Pioneer newspaper feature' },
    { src: '../wp-content/uploads/2022/09/THE-PIONEER-APR-2010-745x1024.jpg', title: 'THE PIONEER APR 2010', description: 'The Pioneer newspaper article' },
    { src: '../wp-content/uploads/2022/09/HT-FEB-2010-768x558.jpg', title: 'Hindustan Times FEB 2010', description: 'Hindustan Times feature' },
    { src: '../wp-content/uploads/2022/09/TOI-FEB-2010-745x1024.jpg', title: 'Times Of India FEB 2010', description: 'Times of India article' },
    { src: '../wp-content/uploads/2022/09/DAV-UNITED-MAGAZINE-768x970.jpeg', title: 'DAV UNITED MAGAZINE', description: 'Magazine feature article' },
    { src: '../wp-content/uploads/2022/09/TOI-NEWS-ARTICLE-768x1024.jpeg', title: 'Times Of India NEWS ARTICLE', description: 'Times of India news coverage' },
    { src: '../wp-content/uploads/2022/09/DELHI-TIMES-NEWS-ARTICLE-755x1024.jpeg', title: 'DELHI TIMES NEWS ARTICLE', description: 'Delhi Times feature' },
  ];

  // Delicacies Gallery Images (from dad index.html 1602.html)
  const delicaciesImages = [
    { src: '../wp-content/uploads/2022/09/Makhmali-chenna-768x502.jpg', title: 'Makhmali Chenna', description: 'Silky smooth cottage cheese delicacy' },
    { src: '../wp-content/uploads/2022/09/Paan-ki-Rasmalai-768x492.jpg', title: 'Paan ki Rasmalai', description: 'Betel leaf flavored Rasmalai' },
    { src: '../wp-content/uploads/2022/09/Papad-ki-subzi-768x500.jpg', title: 'Papad ki Subzi', description: 'Unique papad based vegetable curry' },
    { src: '../wp-content/uploads/2022/09/Roomali-Paneer-768x501.jpg', title: 'Roomali Paneer', description: 'Handkerchief thin cottage cheese' },
    { src: '../wp-content/uploads/2022/09/Surkh-malai-khumb-768x596.jpg', title: 'Surkh Malai Khumb', description: 'Red cream mushrooms' },
    { src: '../wp-content/uploads/2022/09/tawa-til-asparagus-768x522.jpg', title: 'Tawa Til Asparagus', description: 'Griddle roasted sesame asparagus' },
    { src: '../wp-content/uploads/2022/09/amritsari-chole-768x504.jpg', title: 'Amritsari Chole', description: 'Authentic Amritsari chickpea curry' },
    { src: '../wp-content/uploads/2022/09/Chapli-kebab-768x553.jpg', title: 'Chapli Kebab', description: 'Spiced minced meat patties' },
    //{ src: 'https://via.placeholder.com/1322x862?title=Gilawat+in+Parantha+Tacos', title: 'Gilawat in Parantha Tacos', description: 'Fusion taco with gilawat kebab' },
    { src: '../wp-content/uploads/2022/09/Gulabi-salmon-tikka-768x496.jpg', title: 'Gulabi Salmon Tikka', description: 'Pink salmon tikka' },
    { src: '../wp-content/uploads/2022/09/Makhmali-Chenna-2-768x551.jpg', title: 'Makhmali Chenna 2', description: 'Another variation of silky cottage cheese' },
    { src: '../wp-content/uploads/2022/09/Rum-Ball-768x441.jpg', title: 'Rum Ball', description: 'Rich rum-infused dessert balls' },
    { src: '../wp-content/uploads/2022/09/Tandoori-Lehsuni-JheengaGarlic-Prawns-768x736.jpg', title: 'Tandoori Lehsuni Jheenga', description: 'Garlic prawns tandoori style' },
    { src: '../wp-content/uploads/2022/09/Aqua-Tandoori-potato-768x512.jpg', title: 'Aqua Tandoori Potato', description: 'Tandoori style potatoes' },
    { src: '../wp-content/uploads/2022/09/Chenne-aur-Gulkand-ki-Jugalbandi-Rose-petal-jam-stuffed-indian-dessert-768x535.jpg', title: 'Chenne aur Gulkand ki Jugalbandi', description: 'Rose petal jam stuffed Indian dessert' },
    { src: '../wp-content/uploads/2022/09/chocolate-filled-gulab-jamun-768x532.jpg', title: 'Chocolate Filled Gulab Jamun', description: 'Gulab jamun with chocolate filling' },
    //{ src: 'https://via.placeholder.com/2048x1365?text=kulfi', title: 'Kulfi', description: 'Traditional Indian ice cream' },
    { src: '../wp-content/uploads/2022/09/Lahsun-Ki-Kheer-768x523.jpg', title: 'Lahsun Ki Kheer', description: 'Unique garlic rice pudding' },
  ];

  const openLightbox = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedTitle('');
  };

  const currentImages = activeTab === 'innews' ? inNewsImages : delicaciesImages;

  return (
    <div className="min-h-screen bg-[#F7F3F5]">
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url(${bgImage})`,
        }}
      >
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Gallery
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore Chef Aditya's media features and culinary creations
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-6 mt-8">
        <div className="flex justify-center border-b border-gray-200">
          <button
            onClick={() => setActiveTab('innews')}
            className={`px-8 py-4 text-lg font-semibold transition-all duration-300 ${
              activeTab === 'innews'
                ? 'text-[#EF4D48] border-b-2 border-[#EF4D48]'
                : 'text-gray-500 hover:text-[#2B161B]'
            }`}
          >
            In News
          </button>
          <button
            onClick={() => setActiveTab('delicacies')}
            className={`px-8 py-4 text-lg font-semibold transition-all duration-300 ${
              activeTab === 'delicacies'
                ? 'text-[#EF4D48] border-b-2 border-[#EF4D48]'
                : 'text-gray-500 hover:text-[#2B161B]'
            }`}
          >
            Delicacies
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentImages.map((image, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={(index % 12) * 50}
              onClick={() => openLightbox(image.src, image.title)}
            >
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#2B161B] text-sm md:text-base mb-1 line-clamp-2">
                  {image.title}
                </h3>
                {image.description && (
                  <p className="text-gray-500 text-xs line-clamp-2">{image.description}</p>
                )}
              </div>
            </div>
          ))}
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
  );
}