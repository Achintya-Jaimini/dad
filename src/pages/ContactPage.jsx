import React, { useState, useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F7F3F5] py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2B161B] mb-8" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Contact me
            </h1>
            
            {/* Phone 1 */}
            <div className="flex items-start gap-4 mb-6 group">
              <div className="w-12 h-12 bg-[#EF4D48] rounded-full flex items-center justify-center text-white shrink-0 group-hover:bg-[#D90700] transition">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#2B161B]">Phone</h3>
                <a href="tel:9257917043" className="text-[#453E3E] hover:text-[#EF4D48] transition">
                  (925) 791 7043
                </a>
              </div>
            </div>
            
            {/* Phone 2 */}
            <div className="flex items-start gap-4 mb-6 group">
              <div className="w-12 h-12 bg-[#EF4D48] rounded-full flex items-center justify-center text-white shrink-0 group-hover:bg-[#D90700] transition">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#2B161B]">Phone</h3>
                <a href="tel:9257918512" className="text-[#453E3E] hover:text-[#EF4D48] transition">
                  (925) 791 8512
                </a>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-start gap-4 mb-8 group">
              <div className="w-12 h-12 bg-[#EF4D48] rounded-full flex items-center justify-center text-white shrink-0 group-hover:bg-[#D90700] transition">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#2B161B]">Email</h3>
                <a href="mailto:aditya@adityajaimini.com" className="text-[#453E3E] hover:text-[#EF4D48] transition break-all">
                  aditya@adityajaimini.com
                </a>
              </div>
            </div>
            
            {/* Follow Me Section */}
            <h6 className="text-xl font-semibold text-[#2B161B] mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Follow me
            </h6>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com/aditya_jaimini" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2B161B] rounded-full flex items-center justify-center text-white hover:bg-[#1DA1F2] transition"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a 
                href="https://www.youtube.com/c/ChefAdityaJaiminiSPICE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2B161B] rounded-full flex items-center justify-center text-white hover:bg-[#FF0000] transition"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a 
                href="https://www.facebook.com/aditya.jaimini" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2B161B] rounded-full flex items-center justify-center text-white hover:bg-[#1877F2] transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="https://www.instagram.com/chefadityajaimini/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2B161B] rounded-full flex items-center justify-center text-white hover:bg-[#E4405F] transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div 
            className="bg-white rounded-xl shadow-lg p-8"
            style={{ backgroundImage: 'linear-gradient(145deg, #FFFFFF 0%, #F7F3F5 100%)' }}
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold text-[#2B161B] mb-6" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Send a message
            </h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              {/* Name Fields - First and Last */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[#2B161B] font-medium mb-2">
                    First Name <span className="text-[#EF4D48]">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EF4D48] transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-[#2B161B] font-medium mb-2">
                    Last Name <span className="text-[#EF4D48]">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EF4D48] transition"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              {/* Email */}
              <div className="mb-4">
                <label className="block text-[#2B161B] font-medium mb-2">
                  Email <span className="text-[#EF4D48]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EF4D48] transition"
                  placeholder="john@example.com"
                />
              </div>
              
              {/* Subject */}
              <div className="mb-4">
                <label className="block text-[#2B161B] font-medium mb-2">
                  Subject <span className="text-[#EF4D48]">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EF4D48] transition"
                  placeholder="How can I help you?"
                />
              </div>
              
              {/* Message */}
              <div className="mb-6">
                <label className="block text-[#2B161B] font-medium mb-2">
                  Comment or Message <span className="text-[#EF4D48]">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EF4D48] transition resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold text-white transition ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-[#EF4D48] hover:bg-[#D90700]'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}