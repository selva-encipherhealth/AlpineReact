import React from 'react';
import { clientsData } from '../../data/clientsData'; // Adjust the import path as necessary

const ClientsHomeTwo = () => {
  return (
    <section id="our-clients" className="our-clients py-10 -mt-5 bg-gray-50">
      <div className="container overflow-x-hidden">
        {/* CLIENTS */}
        <ul className="flex items-center gap-16 brands-list">
          {clientsData?.map((client, i) => (
            <li key={i}>
              {/* CLIENT BRAND IMAGE */}
              <img
                src={client?.clientImage}
                alt="Brand Image"
                className="object-cover max-h-20 min-w-[150px] opacity-80 contrast-0 hover:contrast-100 whitespace-nowrap transition-all duration-500"
                width={200}
                height={60}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ClientsHomeTwo;
