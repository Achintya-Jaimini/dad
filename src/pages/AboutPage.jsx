import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const celebratedChefsImages = [
    { src: '../wp-content/uploads/2022/09/CBOI-3-rotated.jpeg', title: 'Celebrated Chefs Of India' },
    { src: 'https://adityajaimini.com/wp-content/uploads/2022/09/CBOI-1.jpeg', title: 'Celebrated Chefs Of India (book cover)' },
    { src: 'https://adityajaimini.com/wp-content/uploads/2022/09/with-Chef-Vikas-Khanna-IHG-1.jpg', title: 'with Chef Vikas Khanna, IHG' },
  ];

  const certificateImages = [
    { src: 'https://adityajaimini.com/wp-content/uploads/2022/09/CERTIFICATE-LEAD-AUDITOE-ISO22000-745x1024.jpg', title: 'CERTIFICATE LEAD AUDITOR ISO22000' },
    { src: 'https://adityajaimini.com/wp-content/uploads/2022/09/HACCP-INTERPRETATION-TRAINING-COURSE-737x1024.jpeg', title: 'HACCP INTERPRETATION TRAINING COURSE Certificate' },
  ];

  const bookImages = [
    { src: 'https://adityajaimini.com/wp-content/uploads/2022/09/book-synopsis-150x150.jpeg', title: 'book synopsis' },
    { src: 'https://adityajaimini.com/wp-content/uploads/2022/09/recipe-by-adityabook-150x150.jpeg', title: 'recipes by Aditya featured in a book' },
    { src: 'https://adityajaimini.com/wp-content/uploads/2022/09/acknowledgement-book-aditya-150x150.jpeg', title: 'acknowledgement book aditya' },
    { src: 'https://adityajaimini.com/wp-content/uploads/2022/09/book-cover-page-150x150.jpeg', title: 'book cover page' },
  ];

  const mentorImages = [
    { src: 'https://adityajaimini.com/wp-content/uploads/2022/09/NHMCT-panel-discussion-633x1024.jpg', title: 'Panelist at NHMCT' },
    { src: 'https://adityajaimini.com/wp-content/uploads/2022/09/Culinary-Mentor-Jagran-Lake-University-Bhopal-2-768x932.jpg', title: 'Culinary Mentor, Jagran Lake University, Bhopal' },
    { src: 'https://adityajaimini.com/wp-content/uploads/2022/09/certificate-of-Appreciation-IHM-Bhopal-768x546.jpg', title: 'certificate of Appreciation IHM Bhopal' },
    { src: 'https://adityajaimini.com/wp-content/uploads/2022/09/Resource-person-for-webinar-IHM-Bhopal-768x546.jpg', title: 'Resource person for webinar IHM Bhopal' },
  ];

  const judgeImages = [
    { src: 'https://adityajaimini.com/wp-content/uploads/2022/09/US-CRANBERRY-768x929.jpeg', title: 'US CRANBERRY' },
    { src: 'https://adityajaimini.com/wp-content/uploads/2022/09/US-Cranberry-1-768x768.jpeg', title: 'US Cranberry' },
    { src: 'https://adityajaimini.com/wp-content/uploads/2022/09/Culinary-masterclass-for-IHE-1-768x756.jpg', title: 'Culinary Masterclass for IHE' },
    { src: 'https://adityajaimini.com/wp-content/uploads/2022/09/Judge-Food-Competitions-2.jpg', title: 'Judging Food Competitions' },
  ];

  const speakerImages = [
    { src: 'https://adityajaimini.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-08-28-at-11.51.40-AM-768x576.jpeg', title: 'Indian Culinary Forum Panelist' },
    { src: 'https://adityajaimini.com/wp-content/uploads/2022/09/SIAL-2018-eminent-speaker-768x384.jpg', title: 'SIAL 2018, eminent speaker' },
  ];

  return (
    <div className="min-h-screen bg-[#F7F3F5]">
      {/* Page Header */}
      <section className="relative py-20 bg-cover bg-center" style={{ 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url("https://adityajaimini.com/wp-content/uploads/2022/09/Gilawat-in-Parantha-Tacos-1.jpg")',
      }}>
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            About Chef Aditya Jaimini
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Award-winning celebrity chef, Indian culinary expert, hotelier, TV show host, and author
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-gray-700 leading-relaxed" data-aos="fade-right">
              <p>
                Chef Aditya Jaimini has worked in various leadership roles with leading hotel Chains like Taj Group of Hotels, 
                International Hotels Group(IHG), Radisson, and before moving to the United States, he was Head of Hospitality, 
                Delhi International Airport Limited in India.
              </p>
              <p>
                He has embarked on a journey overseas to showcase his culinary skills internationally as a Culinary expert in the USA. 
                Currently, he is the <strong className="text-[#EF4D48]">Executive Chef at Marriott, Pleasanton, California.</strong> 
                Within a few months upon arrival in the United States, he was awarded the Best International Chef in the USA for the year 2022.
              </p>
              <p>
                He is a versatile Chef and well-rounded hospitality professional. An IHM Bhopal alumni, he started his career with 
                Taj Group of Hotels as a Management Trainee and has been consistently passionate about Indian, Mediterranean, 
                and Italian cuisine.
              </p>
            </div>
            <div data-aos="fade-left">
              <img 
                src="https://adityajaimini.com/wp-content/uploads/2024/01/Screenshot-2024-01-07-084932.jpg" 
                alt="Chef at Marriott, Pleasanton" 
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* State Banquet Section */}
      <section className="py-16 px-6 bg-[#F7F3F5]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img 
                src="https://adityajaimini.com/wp-content/uploads/2022/09/photo-with-President-Bush-and-PM-Manmohan-Singh.jpeg" 
                alt="With President Bush and PM Manmohan Singh" 
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed" data-aos="fade-left">
              <p>
                He managed state banquets for dignitaries and world leaders including President George Bush hosted by 
                Prime Minister of India. After a decade, he moved to The Park Hotel, Parliament Street, Delhi, and soon 
                joined Crowne Plaza, New Delhi, an upscale hotel brand of the InterContinental Hotel Group (IHG) as 
                Pre-opening Executive Chef and progressed to Director Food & Beverage operation.
              </p>
              <p>
                One of his significant accomplishments has been developing the concept of Spice Art, an Indian specialty 
                restaurant, which bagged the Times Food Award in the 'Noteworthy Newcomer' category within a few months of opening.
              </p>
              <p>
                The restaurant won the 'Best North Indian' restaurant in Delhi for 4 years in a row at the Times Food Award. 
                With over 25 years of experience, he has been instrumental in establishing big F&B operations and culinary innovations. 
                He has innovated award-winning recipes and mentored young Chefs to achieve recognition in the culinary field.
              </p>
            </div>
          </div>
        </div>
      </section>

                  {/* Awards Gallery Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg" data-aos="fade-right">
              <div className="bg-gray-200 aspect-[4/3] overflow-hidden">
                <img 
                  src="https://adityajaimini.com/wp-content/uploads/2022/09/Times-Food-award.jpg" 
                  alt="Times Food Award Receiving" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 bg-[#F7F3F5]">
                <p className="text-center text-gray-700 font-medium">Times Food Award Receiving</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg" data-aos="fade-left">
              <div className="bg-gray-200 aspect-[4/3] overflow-hidden">
                <img 
                  src="https://adityajaimini.com/wp-content/uploads/2022/09/WhatsApp-Image-2021-02-01-at-8.32.36-PM.jpeg" 
                  alt="Times Food Award Receiving" 
                  className="w-full h-full object-contain object-center bg-gray-100"
                />
              </div>
              <div className="p-4 bg-[#F7F3F5]">
                <p className="text-center text-gray-700 font-medium">Times Food Award Receiving</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Celebrated Chefs Section */}
      <section className="py-16 px-6 bg-[#F7F3F5]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-700 leading-relaxed" data-aos="fade-right">
              <p>
                He has associated with renowned Chefs of International fame for events organized by IHG in India - 
                Hotel Investment Conference South Asia (HICSA dinner at New Delhi). Chef Aditya was asked to support 
                Celebrity Chef Vikas Khanna's book launch with Chef Aditya's celebrity appearance.
              </p>
              <p>
                The HICSA is India's largest hospitality investment conference. Chef Aditya has been conferred with 
                'Chef of the Year', 2014 by the Association of Hospitality Professionals and got featured by Ms. Maryam Reshii, 
                in her book - 'Celebrated Chefs of India'.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              {celebratedChefsImages.map((img, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden shadow-md">
                  <img src={img.src} alt={img.title} className="w-full h-48 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Food Safety Expert Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-700 leading-relaxed" data-aos="fade-right">
              <p>
                Food Safety Expert – He is a certified lead auditor for Food Safety Management System. He has been a team leader 
                for implementation of Food Safety standards at big F&B operations at hotels like Taj Palace New Delhi, India, 
                Crowne Plaza New Delhi Rohini, India.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              {certificateImages.map((img, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden shadow-md">
                  <img src={img.src} alt={img.title} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Book Contributions Section */}
      <section className="py-16 px-6 bg-[#F7F3F5]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4" data-aos="fade-right">
              {bookImages.map((img, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden shadow-md">
                  <img src={img.src} alt={img.title} className="w-full h-48 object-cover" />
                </div>
              ))}
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed" data-aos="fade-left">
              <p>
                He has contributed to the society by developing special recipes for children surviving from Cancer in association 
                with Rajiv Gandhi Cancer Institute (RGCI) a premium medical institution of India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-700 leading-relaxed" data-aos="fade-right">
              <p>
                Chef Aditya enjoys a stellar reputation in the industry and is one of the most sought-after mentors amongst 
                universities. He has conducted workshops and knowledge enrichment sessions for various Nationally acclaimed 
                Institutes of Hotel management run by National Council for Hotel Management and catering Technology - NCHMCT 
                an apex body for coordinated growth and development of hospitality education in India.
              </p>
              <p>
                He has nurtured chefs to achieve excellence in various culinary competitions and forums. His mentees have 
                created a unique space in the hospitality sector.
              </p>
              <p>
                Chef Aditya has served as Mentor for culinary professionals JAGRAN LAKE UNIVERSITY.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              {mentorImages.map((img, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden shadow-md">
                  <img src={img.src} alt={img.title} className="w-full h-40 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jury Member Section
      <section className="py-16 px-6 bg-[#F7F3F5]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4" data-aos="fade-right">
              {judgeImages.map((img, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden shadow-md">
                  <img src={img.src} alt={img.title} className="w-full h-40 object-cover" />
                </div>
              ))}
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed" data-aos="fade-left">
              <p>
                Chef Aditya has served as a jury member for various culinary competitions, reviewing and appraising the cuisine 
                of young chefs 2019 Culinary Arts India, and Jury Member in "Food Service India: East Meets West – Modern Indian 
                Fusion Culinary Challenge 2018, and 2021 Chef Culinary Challenge Awards organized by Indian Culinary Forum, a 
                premiere association of chefs in India.
              </p>
              <p>
                He has been judge for recipe and cooking contests like Chef de Jalandhar, US cranberry taste rally etc.
              </p>
              <p>
                Chef Aditya has been appointed as the Culinary Connoisseur of Bakri Chhap a brand working for empowering rural 
                community with a vision "To revive and recreate every Indian village into a sustainable ecosystem by bringing 
                about integrated rural development."
              </p>
            </div>
          </div>
        </div>
      </section> */}

            {/* Jury Member Section */}
      <section className="py-16 px-6 bg-[#F7F3F5]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4" data-aos="fade-right">
              {judgeImages.map((img, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden shadow-md bg-gray-200">
                  <div className="aspect-square">
                    <img 
                      src={img.src} 
                      alt={img.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed" data-aos="fade-left">
              <p>
                Chef Aditya has served as a jury member for various culinary competitions, reviewing and appraising the cuisine 
                of young chefs 2019 Culinary Arts India, and Jury Member in "Food Service India: East Meets West – Modern Indian 
                Fusion Culinary Challenge 2018, and 2021 Chef Culinary Challenge Awards organized by Indian Culinary Forum, a 
                premiere association of chefs in India.
              </p>
              <p>
                He has been judge for recipe and cooking contests like Chef de Jalandhar, US cranberry taste rally etc.
              </p>
              <p>
                Chef Aditya has been appointed as the Culinary Connoisseur of Bakri Chhap a brand working for empowering rural 
                community with a vision "To revive and recreate every Indian village into a sustainable ecosystem by bringing 
                about integrated rural development."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-700 leading-relaxed" data-aos="fade-right">
              <p>
                Chef Aditya's national and international recognitions have resulted in many invitations to speak before national 
                culinary organizations on Indian culinary arts and judge the cuisine of chefs in recognized culinary competitions. 
                He was an Eminent Speaker in various Academic institutions and Forums like SIAL 2018.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              {speakerImages.map((img, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden shadow-md">
                  <img src={img.src} alt={img.title} className="w-full h-48 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Indian Culinary Forum Section */}
      <section className="py-16 px-6 bg-[#F7F3F5]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img 
                src="https://adityajaimini.com/wp-content/uploads/2022/09/Executive-Commitee-ICF-2-724x1024.jpg" 
                alt="Executive Committee, Indian Culinary Forum" 
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed" data-aos="fade-left">
              <p>
                Chef Aditya is an Executive member of the Indian Culinary Forum. As an Executive Committee Member Master Chef 
                Aditya plays a critical role in the organization with active involvement in various Culinary initiatives. 
                He has been part of the jury for the Annual Chef Awards for the past many years and a member of the panel 
                discussion for the knowledge summit at 18th Annual Chef Awards to honor the best culinary artists of India 
                for the year 2021.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Paper Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-700 leading-relaxed" data-aos="fade-right">
              <p>
                He has published a paper on "Need for Revamping Culinary Training Practices in Hotel Management Institutes: 
                A perspective of Professional Chefs of Delhi NCR" in International e conference organized by Institute of 
                Hotel Management Bhopal.
              </p>
            </div>
            <div data-aos="fade-left">
              <img 
                src="https://adityajaimini.com/wp-content/uploads/2022/09/Certificate-for-paper-published-in-international-conference-768x485.jpg" 
                alt="Certificate for paper published in international conference" 
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}