import React from 'react';
import ContactForm from '../components/ContactForm';
import InfoCard from '../components/InfoCard'; // Import the InfoCard component
import Image1 from '../assets/images/icon10.png';
import Image2 from '../assets/images/icon4.jpg';
import Image3 from '../assets/images/icon8.png';
import Card from '../components/Card';

function Contact() {
  const handleSubmit = () => {
    // Handle form submission logic here if needed
    console.log('Form submitted');
  };

  const cards = [
    { title: "Experienced Crew", description: "Our crew members have a high experience working in filming sector of Nepal." },
    { title: "Complete Filming Solution", description: "From planning to delivery, we provide you with a high quality and a complete solution to your needs." },
    { title: "High Quality Equipment", description: "We provide all the latest technologies and equipment as per requirements." },
    { title: "Filming in Nepal", description: "We have been producing high-quality films and documentaries in Nepal." },
  ];

  // InfoCard data
  const infoCards = [
    { imageSrc: Image1, title: "Call US", description: "01-528029" },
    { imageSrc: Image2, title: "Email US", description: "middlewayfilms@gmail.com" },
    { imageSrc: Image3, title: "Main Office", description: "Kupondole, Lalitpur" },
  ];

  return (
    <div className="mt-20 flex flex-col items-center bg-white-300 min-h-screen">
      <div className='mt-12 mb-8 text-left'>
        <h1 className='font-serif text-3xl underline underline-offset-8 decoration-blue-500 font-bold'>
          Quick Fact About Us
        </h1>
      </div>

      <div className="p-2 ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {cards.slice(0, 3).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <div className="flex justify-center mt-1">
          {cards.slice(3).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>

      {/* Heading for Contact Form */}
      <div className=" text-center">
        <h2 className='text-3xl font-bold underline underline-offset-8 decoration-blue-500 font-serif'>Contact Us</h2>
      </div>

      {/* Flex container for form and info cards */}
      <div className="flex flex-col lg:flex-row lg:justify-between w-full max-w-4xl px-6 py-4  gap-8">
        {/* Contact Form Container */}
        <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg">
          <ContactForm onSubmit={handleSubmit} />
        </div>

        {/* InfoCards Container */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg">
          {/* InfoCards Grid Container */}
          <div className="flex flex-col gap-6">
            {infoCards.map((infoCard, index) => (
              <InfoCard key={index} {...infoCard} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
