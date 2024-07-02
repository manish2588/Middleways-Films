import React, { useState } from 'react';
import Button from './Button'; // Adjust the path if necessary

const ServiceCard = ({ image, title, description, moreDescription, alignLeft }) => {
  const [showMore, setShowMore] = useState(false);

  // Button properties stored in an object
  const buttonProps = {
    onClick: () => setShowMore(!showMore),
    className: "bg-transparent text-black font-serif border border-blue-500 hover:bg-blue-500 hover:text-black hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg w-full sm:w-auto px-2 dark:bg-transparent dark:hover:bg-blue-600 dark:focus:ring-blue-800",
    label: showMore ? 'Read less' : 'Read more',
  };

  return (
    <div className="mt-20 flex justify-center">
      {alignLeft ? (
        // Render card with image on the left. Boolean to determine if the image should be on the left (true) or right (false)
        <div className="flex items-start text-justify">
          <img src={image} style={{ width: '300px', height: '240px' }} alt={title} />
          <div
            className="mx-8 flex flex-col justify-between flex-grow transition-all duration-300 ease-in-out"
            style={{ width: '600px', maxHeight: showMore ? '500px' : '300px', overflow: 'hidden' }}
          >
            <div>
              <h5 className="mb-2 text-2xl font-medium font-serif">{title}</h5>
              <p className="mb-3 font-light text-black dark:text-gray-400 tracking-wide font-serif">
                {description}
              </p>
              {showMore && (
                <p className="mb-3 font-light text-black dark:text-gray-400 tracking-wide font-serif">
                  {moreDescription}
                </p>
              )}
            </div>
            {/* Read more button */}
            <div className="flex justify-start">
              <Button
                onClick={buttonProps.onClick}
                className={buttonProps.className}
                label={buttonProps.label}
              />
            </div>
          </div>
        </div>
      ) : (
        // Render card with image on the right
        <div className="flex items-start text-justify">
          <div
            className="mx-8 flex flex-col justify-between flex-grow transition-all duration-300 ease-in-out"
            style={{ width: '600px', maxHeight: showMore ? '500px' : '300px', overflow: 'hidden' }}
          >
            <div>
              <h5 className="mb-2 text-2xl font-medium font-serif">{title}</h5>
              <p className="mb-3 font-light text-black dark:text-gray-400 tracking-wide font-serif">
                {description}
              </p>
              {showMore && (
                <p className="mb-3 font-light text-black dark:text-gray-400 tracking-wide font-serif">
                  {moreDescription}
                </p>
              )}
            </div>
            {/* Read more button */}
            <div className="flex justify-start">
              <Button
                onClick={buttonProps.onClick}
                className={buttonProps.className}
                label={buttonProps.label}
              />
            </div>
          </div>
          <img src={image} style={{ width: '300px', height: '240px' }} alt={title} />
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
