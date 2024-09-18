import React from 'react';
import Logo from '../../public/assets/logo_9.png'; // Adjust the path if necessary

const Loader = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-50 fixed inset-0 z-[100]">
      <div role="status">
        <img
          src={Logo}
          alt="Logo"
          className="animate-pulse animate-infinite animate-duration-1500 max-w-[200px]"
        />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
