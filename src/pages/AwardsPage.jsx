import React, { useEffect } from 'react';
import a1 from './uploads/2024/08/Certificate-of-recognition-award-receiving.jpg';
import a2 from './uploads/2024/08/Chef-Aditya-Jaiminis-certificate-of-recognition-scaled.jpg';
import a3 from './uploads/2023/02/Best-International-Chef-in-USA-certificate-1-768x1021.jpeg';
import a4 from './uploads/2023/03/Best-International-Chef-Award-in-The-USA-768x744.jpeg';
import a5 from './uploads/2022/09/CHEF-OF-THE-YEAR-2014-745x1024.jpg';
import a6 from './uploads/2022/09/Chef-of-the-Year-award-receiving-768x510.jpg';
import aa1 from './uploads/2024/08/Image from Achintya Gmail.jpg';
import aa2 from './uploads/2024/08/IMG 1708.jpg';
import t1 from './uploads/2022/09/times-food-award-2012.jpeg';
import t2 from './uploads/2022/09/times-food-award-2016-150x150.jpeg';
import t3 from './uploads/2022/09/times-food-award-2017-150x150.jpeg';
import t4 from './uploads/2022/09/times-food-award-2018-150x150.jpeg';
import t5 from './uploads/2022/09/TIMES-FOOD-GUIDE-2018-spice-art-150x150.jpeg';
import useTitle from '../components/useTitle';

export default function AwardsPage() {
  useTitle('Awards');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const awards = [
    {
      id: 1,
      title: 'Leader of the Year - 2024',
      description: 'Certificate of recognition receiving',
      images: [
        aa1,  
        aa2
      ],
      imageLabels: ['Certificate of recognition receiving', 'Certificate of recognition']
    },
    {
      id: 2,
      title: 'Leader of the Quarter - Q2 - 2024',
      description: 'Quarterly leadership recognition award',
      images: [
        a1,
        a2
      ],
      imageLabels: ['Award receiving', 'Certificate']
    },
    {
      id: 3,
      title: 'Best International Chef in USA - 2022',
      description: 'Recognition for outstanding culinary excellence',
      images: [
        a3,
        a4
      ],
      imageLabels: ['Certificate', 'Award Ceremony']
    },
    {
      id: 4,
      title: 'Chef Of the Year Award - 2014',
      description: 'Association of Hospitality Professionals',
      images: [
        a5,
        a6
      ],
      imageLabels: ['Certificate', 'Award Receiving']
    },
    {
      id: 5,
      title: 'Times Food Award',
      description: 'Winning years: 2012, 2015, 2016, 2017, 2018',
      images: [
        t1,
        t2,
        t3,
        t4,
        t5
      ],
      imageLabels: ['2012', '2015', '2016', '2017', '2018', 'Times Food Guide 2018 - Spice Art']
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F3F5] py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2B161B] mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Awards & Recognition
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating culinary excellence and professional achievements
          </p>
        </div>

        {/* Awards Grid */}
        <div className="space-y-16">
          {awards.map((award, idx) => (
            <div key={award.id} className="bg-white rounded-2xl shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
                {/* Images Gallery */}
                <div>
                  {award.images.length === 2 ? (
                    <div className="grid grid-cols-2 gap-4">
                      {award.images.map((img, imgIdx) => (
                        <div key={imgIdx} className="group">
                          <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[3/4]">
                            <img 
                              src={img} 
                              alt={award.imageLabels[imgIdx]} 
                              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <p className="text-center text-sm text-gray-500 mt-2">{award.imageLabels[imgIdx]}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {award.images.slice(0, 6).map((img, imgIdx) => (
                        <div key={imgIdx} className="group">
                          <div className="bg-gray-200 rounded-lg overflow-hidden aspect-square">
                            <img 
                              src={img} 
                              alt={award.imageLabels[imgIdx]} 
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <p className="text-center text-xs text-gray-500 mt-1">{award.imageLabels[imgIdx]}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Award Info */}
                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2B161B] mb-3" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    {award.title}
                  </h2>
                  <p className="text-gray-600 text-lg">{award.description}</p>
                  {award.title === 'Times Food Award' && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#EF4D48] bg-opacity-10 text-[#EF4D48] rounded-full text-sm font-semibold">2012</span>
                      <span className="px-3 py-1 bg-[#EF4D48] bg-opacity-10 text-[#EF4D48] rounded-full text-sm font-semibold">2015</span>
                      <span className="px-3 py-1 bg-[#EF4D48] bg-opacity-10 text-[#EF4D48] rounded-full text-sm font-semibold">2016</span>
                      <span className="px-3 py-1 bg-[#EF4D48] bg-opacity-10 text-[#EF4D48] rounded-full text-sm font-semibold">2017</span>
                      <span className="px-3 py-1 bg-[#EF4D48] bg-opacity-10 text-[#EF4D48] rounded-full text-sm font-semibold">2018</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Recognition Section */}
        <div className="mt-16 bg-gradient-to-r from-[#2B161B] to-[#453E3E] rounded-2xl p-8 text-white text-center" data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            A Legacy of Excellence
          </h3>
          <p className="text-lg max-w-2xl mx-auto">
            Chef Aditya Jaimini's commitment to culinary innovation and leadership has been recognized 
            through numerous national and international awards throughout his distinguished career.
          </p>
        </div>
      </div>
    </div>
  );
}