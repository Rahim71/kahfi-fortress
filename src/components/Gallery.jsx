import React from 'react';

export default function Gallery() {
  const images = [
    "https://source.unsplash.com/400x300/?engineering",
    "https://source.unsplash.com/400x300/?ict",
    "https://source.unsplash.com/400x300/?marine",
    "https://source.unsplash.com/400x300/?security"
  ];

  return (
    <section id="gallery" className="p-8 bg-gray-800">
      <h3 className="text-2xl font-bold mb-4">Gallery</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((url, idx) => (
          <img key={idx} src={url} alt={`Gallery ${idx}`} className="rounded shadow" />
        ))}
      </div>
    </section>
  );
}
