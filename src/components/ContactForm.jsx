import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="p-8">
      <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
      <form action="https://formspree.io/f/xwpbylzz" method="POST" className="grid gap-4 max-w-md mx-auto">
        <input type="text" name="name" required placeholder="Your Name" className="p-2 rounded bg-gray-800 text-white" />
        <input type="email" name="email" required placeholder="Your Email" className="p-2 rounded bg-gray-800 text-white" />
        <textarea name="message" required placeholder="Your Message" className="p-2 rounded bg-gray-800 text-white"></textarea>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 rounded p-2">Send</button>
      </form>
    </section>
  );
}
