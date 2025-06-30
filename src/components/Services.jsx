import React from 'react';

export default function Services() {
  return (
    <section id="services" className="p-8 bg-gray-800">
      <h3 className="text-2xl font-bold mb-4">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
        <div className="bg-gray-700 p-4 rounded">
          <h4 className="font-bold">ICT Solutions</h4>
          <p>Hardware, software, network infrastructure, and security systems.</p>
        </div>

        <div className="bg-gray-700 p-4 rounded">
          <h4 className="font-bold">Engineering Equipment</h4>
          <p>Supply and maintenance of machinery, electrical systems, and heavy equipment.</p>
        </div>

        <div className="bg-gray-700 p-4 rounded">
          <h4 className="font-bold">Marine & Aviation</h4>
          <p>Specialized equipment and parts for marine and aviation industries.</p>

          <div className="mt-2">
            <img src="/images/lowfreq.png" alt="Low Frequency Analyzer" className="rounded mb-2" />
            <p className="text-sm">Low Frequency Analyzer — Custom DSP software for analyzing low-frequency signals in engineering diagnostics and system monitoring.</p>
          </div>

          <div className="mt-4">
            <img src="/images/opendrift.png" alt="Object Drift Simulation" className="rounded mb-2" />
            <p className="text-sm">Object Drift Simulation — Opendrift-based tool for ocean drift prediction, supporting Search and Rescue (SAR) operations and marine safety planning.</p>
          </div>
        </div>

        <div className="bg-gray-700 p-4 rounded">
          <h4 className="font-bold">Security Solutions</h4>
          <p>Fire protection, surveillance, and monitoring systems for safety and compliance.</p>
        </div>
      </div>
    </section>
  );
}
