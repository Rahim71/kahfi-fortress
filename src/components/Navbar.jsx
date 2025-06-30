import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Kahfi Fortress Venture</h1>
      <ul className="flex space-x-4 text-sm text-gray-300">
        <li><a href="#about" className="hover:text-white">About</a></li>
        <li><a href="#services" className="hover:text-white">Services</a></li>
        <li><a href="#training" className="hover:text-white">Training</a></li>
        <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
        <li><a href="#contact" className="hover:text-white">Contact</a></li>
      </ul>
    </nav>
  );
}
