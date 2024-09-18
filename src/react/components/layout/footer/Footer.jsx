import React from 'react';
import { Link } from 'react-router-dom'; // Use react-router-dom for navigation
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdLocationCity } from "react-icons/md";
import { MdMail } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import SocialButton from '../../SocialButton';
import Logo from '../../../public/assets/logo_10.png'; // Make sure to update the path if needed
import { footerMenuItems } from '../../layout/footer/footerMenuItems';

const Footer = () => {
  // Social media links
  const socialLinks = [
    {
      href: '',
      name: 'linkedin',
    },
    {
      href: '',
      name: 'instagram',  
      classNames: 'text-[#E4405F] hover:bg-[#E4405F]',
    },
    {
      href: '',
      name: 'facebook',
    },
  ];

  // Address details
  const addressDetails = [
    {
      branchName: 'Mogappair Branch',
      text: 'No.81/81, 1st Floor, Vellalar St, Mohanram Nagar, Mogappair West, Mogappair, Chennai, Tamil Nadu 600037, India',
      icon: FaMapMarkerAlt,
    },
    {
      branchName: 'Ashok Nagar Branch',
      text: '97, 98, 1st floor, Jawaharlal Nehru Rd Ashok Nagar, Kasi Estate, West Jafferkhanpet, Chennai, Tamil Nadu, 600083',
      icon: MdLocationCity,
    },
    {
      icon: MdMail,
      text: 'info@alpineprohealth.com',
      href: '/',
    },
    { 
      icon: IoCall, 
      text: 'IND : +91 8519899754',
      href: '/' 
    },
    { 
      icon: BsFillPhoneVibrateFill, 
      text: 'US : +1(914)-292-9596',
      href: '/' 
    },
  ];

  return (
    <>
      <footer className={`text-white font-extralight footer`}>
        <div className="container py-14">
          <div className="flex flex-col sm:flex-row justify-between flex-wrap gap-12 w-full">
            {/* About Us */}
            <div className="max-w-[420px]">
              <img
                src={Logo}
                alt="Logo"
                className="w-48 mb-3"
                width={200}
                height={100}
              />
              <p className="sm:text-lg">
                Alpine Pro Health is a highly experienced provider of Revenue Cycle Management processes and analytics solutions in the healthcare industry.
              </p>

              {/* Social Media Icons */}
              <ul className="flex items-center gap-5 mt-6">
                {socialLinks.map((link, i) => (
                  <SocialButton
                    key={i}
                    icon={link?.icon}
                    href={link?.href}
                    name={link?.name}
                    classNames={link?.classNames}
                    i={i}
                  />
                ))}
              </ul>
              {/* Social Media Icons */}
            </div>
            {/* About Us */}

            {/* Company */}
            <div className="">
              <h5 className="text-2xl mb-[22px] bottom-0 border-b-2 border-solid pb-1 w-fit font-light">
                Useful Links
              </h5>
              <ul className="list-disc list-inside sm:text-lg footer-nav-list">
                {footerMenuItems.companyLinks?.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company */}

            {/* Address */}
            <div className="max-w-[350px]">
              <h5 className="text-2xl mb-[22px] bottom-0 border-b-2 border-solid pb-1 w-fit font-light">
                Get In Touch
              </h5>
              <div className="sm:text-lg space-y-3">
  {addressDetails.map((line, index) => (
    <div key={index} className="flex flex-col gap-2">
      {/* Display the branch name */}
      <h3 className="font-semibold">{line.branchName}</h3>
      
      <div className="flex gap-2 ">
        {/* Display the icon if available */}
        {line?.icon && (
          <span>
            <line.icon className="text-3xl" />
          </span>
        )}
        {/* Render the address text with or without href */}
        {line?.href ? (
          <a href={line.href} className="text-blue-500 hover:underline">
            <p>{line.text}</p>
          </a>
        ) : (
          <p>{line.text}</p>
        )}
      </div>
    </div>
  ))}
</div>
            </div>
            {/* Address */}
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`py-3 px-5 flex justify-center items-center container text-white 
          text-center sm:text-lg border-t border-gray-500 border-solid`}
        >
          <p>
            <span className="font-serif">&copy;</span> {new Date(Date.now()).getFullYear()} by
            Alpine. All Rights Reserved.
          </p>
        </div>
        {/* Copyright */}
      </footer>
    </>
  );
};

export default Footer;
