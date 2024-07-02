import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Adjust the path if necessary
import Image1 from '../assets/images/Film2.png';
import Image from '../assets/images/A.png';
import Image2 from '../assets/images/B.png';
import Image3 from '../assets/images/C.png';
import Image4 from '../assets/images/D.png';
import ServiceCard from '../components/ServiceCard';

function Services() {
  
  

  // Define your service objects with descriptions
  const services = [
    {
      image: Image,
      title: "Expert Cinematography",
      description: "Our visual experts in cinematography can help your brand gain vision and spread your message through captivating videos. With professional cinematographers on our team, we make sure to portray your message beautifully through the art of cinematography. Being one of our core strengths, we have made films of varied genre and length, including feature films, shorts, videos, and documentary films for a number of social and development organizations and agencies working in Nepal.",
      moreDescription: " We are a one-stop solution for all kinds of filmmaking services from pre to post, including writing and researching, scriptwriting, filming, and total post production work, including editing, titling, subtitling, sound design and mixing, color grading, VFX and animation, and DCP preparation. We also provide production services like line productions, crew, equipment rentals, as well as location scouting for your shooting requirements in Nepal.",
    },
    {
      image: Image3,
      title: "Production Management",
      description: "Our team is responsible for overseeing the entire production process, including budgeting, scheduling, hiring crew members, coordinating with directors and other creative personnel, and ensuring that the film is completed on time.During production, we supervise all on-set activities, ensuring smooth operations and maintaining clear communication between departments. ",
      moreDescription:" In post-production, we oversee editing, sound design, visual effects, and other processes to ensure the final product meets the highest standards of quality"
    },
    {
      image: Image4,
      title: "Content Development for Social Media",
      description: "We develop a range of content for social media platforms including for Facebook,Instagram. We also provide our expertise services for managing the social media platforms, both day-to-day as well as strategic services to boost their effectiveness and impact by enhancing audience reach and engagement.",
      moreDescription: "Additional details about the technology acquisitions, including the companies involved and the impact on the industry.",
    },
    {
      image: Image2,
      title: "Advanced Updated Equipment Available",
      description: " We pride ourselves on providing the latest and most advanced equipment to ensure the highest quality production for your film projects. Our inventory includes state-of-the-art cameras that capture stunning, high-resolution footage, offering a range of options to suit different production needs. We also supply advanced lighting equipment.",
      moreDescription: " We have been providing photography services to some of the major social and development organizations and agencies working in Nepal.",
    },
   
   
    {
      image: Image,
      title: "Photography",
      description: "We provide professional photography and photo documentation services. We specialize in documenting change process at the community level as well as impact of development interventions and initiatives at the grassroots.We also photograph diverse types of events and actions of social and development organizations.",
      moreDescription: " We have been providing photography services to some of the major social and development organizations and agencies working in Nepal.",
    },
   
  ];

  return (
    <div>
      <Navbar/>
      <div className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${Image1})`, height: '70vh', width: '100%', }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for better text readability */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl font-bold text-white"></h1>
        </div>
      </div>

      {/* Main content section */}
      <div className="main-content p-4 ">
        <div className="w-full md:w-3/4 lg:w-2/3 mx-auto bg-slate-100 p-4 rounded-lg mt-6">
          <div className="w-full flex justify-center">
            <h1 className="mb-4 text-3xl font-large text-center font-serif">What We Do</h1>
          </div>
          <p className="mb-3 font-serif text-gray-500 dark:text-gray-400 text-gray-950 tracking-wide" style={{ textAlign: 'justify' }}>
            Middleway films has continually pushed the envelope in all areas, producing entertaining content
            and capturing audiences of Nepal on a wide range of platforms. Our goal has been and always will be
            to reach a global audience with top-notch, ground-breaking tales that combine quality, innovation, and attention to detail.
          </p>
        </div>

        {/* Render ServiceCards */}
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            alignLeft={index % 2 === 0} // Alternates the alignment based on index
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
