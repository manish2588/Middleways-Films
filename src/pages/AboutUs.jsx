import React from 'react';
import desertImage from '../assets/images/Desert.jpg';

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    image: desertImage
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    image: desertImage
  },
  {
    id: 3,
    name: "Sam Johnson",
    position: "UX Designer",
    image: desertImage
  },
  {
    id: 4,
    name: "Alice Brown",
    position: "Marketing Specialist",
    image: desertImage
  },
  {
    id: 5,
    name: "Michael Lee",
    position: "Data Scientist",
    image: desertImage
  },
  {
    id: 6,
    name: "Laura Wilson",
    position: "DevOps Engineer",
    image: desertImage
  }
];

function AboutUs() {
  return (
    <div>
      <div className="flex justify-center mt-24">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">Who We Are</h2>
      </div>
      <div className="w-full md:w-3/4 lg:w-2/3 mx-auto  p-4 rounded-lg mt-4">
        <p className="mb-3 text-gray-950 dark:text-gray-400" style={{ textAlign: 'justify' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatem nobis exercitationem
          blanditiis hic minima repellat obcaecati natus illum. Aut, inventore beatae molestias blanditiis
          commodi cumque obcaecati architecto dignissimos consectetur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit 
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem 
          ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit
          . Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit
          . Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Our Team</h2>
      </div>
      <div className="w-full md:w-3/4 lg:w-2/3 mx-auto  p-4 rounded-lg mt-4">
        <p className="mb-3 text-gray-950 dark:text-gray-400" style={{ textAlign: 'justify' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatem nobis exercitationem
          blanditiis hic minima repellat obcaecati natus illum. Aut, inventore beatae molestias blanditiis
          commodi cumque obcaecati architecto dignissimos consectetur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit 
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem 
          ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit
          . Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit
          . Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center min-h-screen bg-gray-100 p-6 gap-4">
        {teamMembers.map(member => (
          <div key={member.id} className=" p-6 w-full sm:w-1/2 lg:w-1/4 mx-auto text-center h-80">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src={member.image} alt="Profile Picture" />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-600">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
