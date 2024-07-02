import React from 'react';

function InfoCard({ imageSrc, title, description }) {
  return (
    <div className="flex-1 mx-1">
      <div className="w-full rounded-lg overflow-hidden">
        <div className="flex justify-center items-center py-2">
          <img
            src={imageSrc}
            alt="Logo"
            className="h-10 object-contain rounded-full"
          />
        </div>
        <div className="py-1 text-center">
          <h2 className="text-xl font-semibold text-gray-800 font-serif">{title}</h2>
        </div>
        <div className="py-1 text-center">
          <h2 className="text-md font-medium text-gray-800 font-serif">{description}</h2>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
