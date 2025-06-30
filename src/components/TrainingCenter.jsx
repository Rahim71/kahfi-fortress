import React from 'react';

export default function TrainingCenter() {
  return (
    <section id="training" className="p-8">
      <h3 className="text-2xl font-bold mb-4">Kahfi Training Center</h3>
      <p className="text-gray-400 mb-4">
        Our center offers corporate and technical training in ICT, engineering, and security. Facilities
        include modern classrooms, computer labs, and hands-on workshops.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img
          src={`${import.meta.env.BASE_URL}images/1.png`}
          alt="Training Image 1"
          className="rounded shadow"
        />
        <img
          src={`${import.meta.env.BASE_URL}images/2.png`}
          alt="Training Image 2"
          className="rounded shadow"
        />
        <img
          src={`${import.meta.env.BASE_URL}images/3.png`}
          alt="Training Image 3"
          className="rounded shadow"
        />
      </div>
    </section>
  );
}
