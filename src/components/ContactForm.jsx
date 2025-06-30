import React from 'react';

export default function ContactForm() {
  return (
    <section id="contact" className="p-8">
      <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
      <form className="flex flex-col space-y-2 max-w-md">
        <input className="p-2 bg-gray-800 rounded" type="text" placeholder="Your Name" />
        <input className="p-2 bg-gray-800 rounded" type="email" placeholder="Your Email" />
        <textarea className="p-2 bg-gray-800 rounded" placeholder="Your Message" rows="4"></textarea>
        <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded">Send Message</button>
      </form>
    </section>
  );
}
