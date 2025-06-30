import React, { useState } from 'react';

export default function JobsGallery() {
  // Array of image filenames — add as many as you want!
  const imageList = [
    '11.png',
    '12.png',
    '13.png',
    '14.png',
    '15.png',
    '16.png',
    '17.png',
    '18.png'// ,
    // '19.png',
    // '21.png',
    // '22.png'
    // Add more filenames as you add to public/images/
  ];

  const [visibleCount, setVisibleCount] = useState(8);

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 8, imageList.length));
  };

  return (
    <section id="jobs" className="p-8">
      <h3 className="text-2xl font-bold mb-4">Our Job Gallery</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {imageList.slice(0, visibleCount).map((fileName, index) => (
          <img
            key={index}
            src={`${import.meta.env.BASE_URL}images/${fileName}`}
            alt={`Job ${index + 1}`}
            className="rounded shadow"
          />
        ))}
      </div>
      {visibleCount < imageList.length && (
        <div className="mt-4 text-center">
          <button
            onClick={handleShowMore}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
}
