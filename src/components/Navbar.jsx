import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo1 from '../assets/images/hi-removebg-preview.png';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile screen
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false); // For media dropdown
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (path) => {
    navigate(path);
    if (isSidebarOpen) {
      setIsSidebarOpen(false); // Close sidebar on navigation
    }
    if (isMediaDropdownOpen) {
      setIsMediaDropdownOpen(false); // Close media dropdown on navigation
    }
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const handleMediaToggle = () => {
    setIsMediaDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Reset the sidebar state on navigation
    setIsSidebarOpen(false);
    setIsMediaDropdownOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';
  const isServicesPage = location.pathname === '/services';

  let navbarBackground;
  if (isHomePage || isServicesPage) {
    navbarBackground = scrolled ? 'bg-gray-100' : 'bg-transparent';
  } else {
    navbarBackground = 'bg-slate-100';
  }

  const textColor = (isHomePage || isServicesPage) && !scrolled ? 'text-white' : 'text-black';
  const iconColor = (isHomePage || isServicesPage) && !scrolled ? 'text-white' : 'text-black';
  const joinUsButtonTextColor = (isHomePage || isServicesPage) && !scrolled ? 'text-white' : 'text-black';

  const activePageStyle = 'underline';
  const transitionStyle = 'transition-transform duration-300 ease-in-out';
  const linkHoverStyle = 'hover:bg-blue-300 px-4 py-2 rounded';

  // Extract the name of the active page
  const getPageName = () => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/about-us':
        return 'About Us';
      case '/services':
        return 'Services';
      case '/media':
        return 'Media';
      case '/contact':
        return 'Contact';
      default:
        return '';
    }
  };

  const pageName = getPageName();

  return (
    <>
      <nav className={`fixed w-full h-24 top-0 left-0 z-50 transition duration-300 ${navbarBackground}`}>
        <div className="relative flex max-w-screen-xl mx-auto px-4 h-full items-center">
          {/* Centered Logo */}
          <div className={`flex-1 flex justify-center items-center ${textColor}`}>
            <img src={Logo1} className="h-20 w-36 mt-2 hidden lg:block" alt="Middle Ways Logo" />
            <div>
              <h1 className='text-4xl font-mono font-semibold'> MIDDLEWAYS</h1>
              <h1 className='text-2xl font-mono font-medium'> FILMS</h1>
            </div>
          </div>

          {/* Sidebar Toggle Button */}
          <button 
            className={`absolute mr-16 ${iconColor} text-4xl z-10`}
            onClick={handleSidebarToggle}
          >
            <span>
              {isSidebarOpen ? '✕' : '☰'} {/* Toggle between close and menu icon */}
            </span>
          </button>
          {/* Page Name Display */}
          <div className="absolute ml-16 top-1/2 transform -translate-y-1/2 flex items-center space-x-4">
            <span className={`text-xl font-mono ${textColor}`}>{pageName}</span>
          </div>

          {/* Container for Right-aligned Elements */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-4">
            {/* "JOIN US" Button Positioned in the Right Corner */}
            <button
              type="button"
              className={`font-mono mr-10 bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:ring-blue-300 text-xl rounded-full border-teal-200 px-4 py-2 text-center transition duration-300 ${joinUsButtonTextColor}`}
              onClick={() => handleClick('/form')}
            >
              JOIN US
            </button>
          </div>

          {/* Sidebar for All Screens */}
          <div className={`fixed top-0 left-0 w-96 h-full bg-blue-200 z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <div className="p-4 flex justify-between items-center">
              {/* Close Icon in Sidebar */}
              <button className="text-black text-3xl" onClick={handleSidebarToggle}>&times;</button>
            </div>
            <div className="flex flex-col space-y-4 px-4 py-4">
              <div className="text-center">
                <h1 className="font-mono text-lg">VIDEOGRAPHY</h1>
                <h2 className="mt-2 leading-tight tracking-wide font-mono text-lg">
                  Engrossing Tales Through The Lens of <br />
                  <h1 className='font-mono text-2xl font-semibold'> MiddleWays Films</h1> 
                </h2>
                <img src={Logo1} className="h-20 w-36 mt-2 hidden lg:block mx-auto" alt="Middle Way Films Logo" />
              </div>
              <Link
                to="/"
                className={`text-black text-3xl font-mono ${location.pathname === '/' ? activePageStyle : ''} ${transitionStyle} ${linkHoverStyle}`}
                onClick={() => handleClick('/')}
              >
                HOME
              </Link>
              <Link
                to="/about-us"
                className={`text-black text-3xl font-mono ${location.pathname === '/about-us' ? activePageStyle : ''} ${transitionStyle} ${linkHoverStyle}`}
                onClick={() => handleClick('/about-us')}
              >
                ABOUT US
              </Link>
              <Link
                to="/services"
                className={`text-black text-3xl font-mono ${location.pathname === '/services' ? activePageStyle : ''} ${transitionStyle} ${linkHoverStyle}`}
                onClick={() => handleClick('/services')}
              >
                SERVICES
              </Link>
              <div className="relative">
                <div className="flex items-center">
                  <Link
                    to="/media"
                    className={`text-black text-3xl font-mono ${location.pathname === '/media' ? activePageStyle : ''} ${transitionStyle} ${linkHoverStyle}`}
                    onClick={() => handleClick('/media')}
                  >
                    MEDIA
                  </Link>
                  <button
                    onClick={handleMediaToggle}
                    className="ml-2 text-black text-3xl"
                  >
                    ▼
                  </button>
                </div>
                {isMediaDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-lg border border-gray-200">
                    <Link
                      to="/media/photos"
                      className="block px-4 py-2 text-black hover:bg-yellow-300 transition-colors"
                      onClick={() => handleClick('/media/photos')}
                    >
                      Photos
                    </Link>
                    <Link
                      to="/media/videos"
                      className="block px-4 py-2 text-black hover:bg-yellow-300 transition-colors"
                      onClick={() => handleClick('/media/videos')}
                    >
                      Videos
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/contact"
                className={`text-black text-3xl font-mono ${location.pathname === '/contact' ? activePageStyle : ''} ${transitionStyle} ${linkHoverStyle}`}
                onClick={() => handleClick('/contact')}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
