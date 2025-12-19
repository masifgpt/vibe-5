import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 bg-white">
        <div className="text-2xl font-bold text-blue-600">PAIB BHAWANA</div>
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-blue-600">Services</a>
          <a href="#" className="hover:text-blue-600">AI Automation</a>
          <a href="#" className="hover:text-blue-600">Chatbots</a>
          <a href="#" className="hover:text-blue-600">About Us</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 font-medium">Login</button>
          <button className="bg-sky-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-sky-600 transition">
            Free Consultation
          </button>
        </div>
      </nav>

      {/* Main Hero Body */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-sky-400 h-[600px] flex items-center">
        {/* Background Decorative Circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-10 flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Content */}
          <div className="md:w-1/2 text-white space-y-6 z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Innovate with AI. <br />
              <span className="text-sky-100">Lead the Future.</span>
            </h1>
            <p className="text-xl opacity-90 max-w-lg">
              PAIB BHAWANA Software House delivers cutting-edge AI Automation, smart Chatbots, and custom AI software 24/7 to scale your business.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold shadow-xl hover:bg-gray-100 transition">
              Start Your AI Journey
            </button>
          </div>

          {/* Right Content (Image & Floating Cards) */}
          <div className="md:w-1/2 relative flex justify-center mt-10 md:mt-0">
            {/* Main Person Image Placeholder */}
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
                <img 
                    src="/pic1.jpg" 
                    alt="M Asif" 
                    className="rounded-full border-8 border-white/20 object-cover w-full h-full shadow-2xl"
                />
                
                {/* Floating Card 1: Supervisor */}
                <div className="absolute -top-4 -left-10 bg-white p-4 rounded-xl shadow-2xl animate-bounce-slow">
                    <p className="text-xs text-gray-500 font-bold uppercase">Supervisor</p>
                    <p className="text-blue-600 font-bold">Asif Langrah</p>
                </div>

                {/* Floating Card 2: Services */}
                <div className="absolute top-1/2 -right-12 bg-white p-4 rounded-xl shadow-2xl">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <p className="text-sm font-semibold text-gray-800">24/7 Support Active</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">AI Chatbots & Automation</p>
                </div>

                {/* Floating Card 3: Profile */}
                <div className="absolute -bottom-8 left-10 bg-white p-4 rounded-xl shadow-2xl flex items-center space-x-3">
                    <div className="bg-sky-100 p-2 rounded-lg">🚀</div>
                    <div>
                        <p className="font-bold text-gray-900">M Asif</p>
                        <p className="text-xs text-gray-500">Lead AI Student @ PAIB</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;