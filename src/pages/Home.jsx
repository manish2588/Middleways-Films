import React from 'react';
import backgroundImage from '../assets/images/Film8.png'; 

const Home = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text readability */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        {/* Main Heading */}
        <div className="text-center mt-44">
  <h1 className="text-4xl font-semibold font-mono">LIGHTS! CAMERA! ACTION!</h1>
  <h2 className="mt-6 text-2xl leading-tight w-full mx-auto tracking-wide font-bold font-mono">
    We are storyteller  <br/>at  <br /> Our Essence
  </h2>
</div>
        {/* Call to Action */}
        <div className='flex justify-center mt-10'> 
          <a href="#" className="block max-w-sm p-6  text-center shadow-lg rounded-lg">
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-white"></h2>
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-white"></h4>
          </a>
        </div>
      </div>

    </div>
  );
}

export default Home;
