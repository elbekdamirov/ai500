import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="/" className="block hover:opacity-80 transition-opacity flex items-center gap-2">
              <img src="/logo.png" alt="AgroXizmat" className="h-12 w-auto" />
              <span className="text-2xl font-heading font-bold text-primary-600 hover:text-primary-500 transition-colors">AgroXizmat</span>
            </a>

          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#demo" className="text-gray-300 hover:text-primary-500 font-medium transition-colors">Demo</a>
            <a href="#solution" className="text-gray-300 hover:text-primary-500 font-medium transition-colors">Yechim</a>
            <a href="#features" className="text-gray-300 hover:text-primary-500 font-medium transition-colors">Imkoniyatlar</a>
            <a href="#team" className="text-gray-300 hover:text-primary-500 font-medium transition-colors">Jamoa</a>
            <a href="#roadmap" className="text-gray-300 hover:text-primary-500 font-medium transition-colors">Reja</a>
          </nav>

          {/* CTA Button Removed */}
          <div className="hidden md:flex items-center">
            {/* Button removed as per request */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-black/98 backdrop-blur-lg z-40 border-t border-gray-800">
          <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            <a href="#demo" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-primary-500 font-medium text-lg transition-colors">Demo</a>
            <a href="#solution" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-primary-500 font-medium text-lg transition-colors">Yechim</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-primary-500 font-medium text-lg transition-colors">Imkoniyatlar</a>
            <a href="#team" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-primary-500 font-medium text-lg transition-colors">Jamoa</a>
            <a href="#roadmap" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-primary-500 font-medium text-lg transition-colors">Reja</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
