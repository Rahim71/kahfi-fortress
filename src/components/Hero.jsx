import React from 'react';

export default function Hero() {
  return (
    <section
      className="p-8 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/logobg.png')" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded">
        <h2 className="text-3xl font-bold mb-2">
          Your Trusted Partner in Engineering, ICT & Security
        </h2>
        <p className="text-gray-300">
          Certified by Kementerian Kewangan Malaysia | MOF Registered
        </p>
      </div>
    </section>
  );
}
