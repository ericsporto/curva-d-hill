import Link from 'next/link';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="h-40 w-full flex justify-center items-center text-white border-t mt-6 lg:mt-0 z-10">
      <div className="flex flex-col justify-between items-center w-full h-full">
        <div className='flex flex-col justify-center items-center h-full'>
          <h1 className="text-lg font-bold">Acesse nossas mídias sociais:</h1>
          <div className="flex gap-4 mt-1">
            <Link
              href="https://www.youtube.com/@bandacurvadhill"
              className="hover:text-[#C00ACA] transform transition duration-300"
              target="blank"
            >
              <FiYoutube className="w-8 h-8" />
            </Link>
            <Link
              href="https://www.instagram.com/curvadhill/"
              className="hover:text-[#C00ACA] transform transition duration-300"
              target="blank"
            >
              <FaInstagram className="w-8 h-8" />
            </Link>
          </div>
        </div>
        <p className="text-gray-400 text-xs px-6 lg:px-0 text-center pb-4">
          Desenvolvido por Porto Desenvolvimento de Softwares LTDA.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
