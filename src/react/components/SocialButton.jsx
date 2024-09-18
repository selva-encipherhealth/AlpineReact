import React from 'react';
import { FaFacebook, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

const SocialButton = ({ href, name, classNames }) => {
  return (
    <li>
      <a
        href={href === '' ? '#' : href}
        target="_blank"
        rel="noopener noreferrer"
        className={twMerge(
          `w-[52px] h-[52px] grid place-items-center rounded-full text-3xl transition-all duration-500 hover:text-white hover:fill-white hover:scale-110 hover:-translate-y-2 relative`,
          name === 'linkedin' && 'text-[#0a66c2] hover:bg-[#0a66c2]',
          name === 'facebook' && 'text-[#2374E1] hover:bg-[#2374E1]',
          name === 'instagram' && 'text-[#E4405F] hover:bg-[#E4405F]',
        )}
      >
        {name === 'linkedin' && <FaLinkedinIn />}
        {name === 'facebook' && <FaFacebook />}
        {name === 'instagram' && <FaInstagram />}
        {/* Add more icons here if needed */}
      </a>
    </li>
  );
};

export default SocialButton;
