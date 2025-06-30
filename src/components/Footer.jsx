import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 p-4 text-center text-gray-400">
      &copy; {new Date().getFullYear()} Kahfi Fortress Venture Sdn Bhd. All rights reserved.
    </footer>
  );
}
