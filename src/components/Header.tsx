'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaClipboardList } from 'react-icons/fa';
import { MdPhotoCamera, MdSimCardDownload } from 'react-icons/md';
import { IoMdMusicalNotes } from 'react-icons/io';
import { GiSoundOff, GiSoundOn } from 'react-icons/gi';

function Header() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying]);

  const toggleMusic = () => {
    setIsMusicPlaying((prev) => !prev);
  };

  return (
    <main className="h-20 w-full items-center justify-start px-8 shadow-sm shadow-white hidden lg:flex z-10">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/logo.png"
        alt="Curva DHill Logo"
        width={70}
        height={70}
        priority
      />
      <div className="flex text-white gap-x-8 ml-8">
        <button className="hover:text-[#C00ACA] h-12 flex items-center gap-2 transform transition duration-300 hover:scale-105">
          <FaClipboardList className="w-5 h-5" />
          Agenda
        </button>
        <button className="hover:text-[#C00ACA] h-12 flex items-center gap-2 transform transition duration-300 hover:scale-105">
          <MdPhotoCamera className="w-6 h-6" />
          Fotos
        </button>
        <button className="hover:text-[#C00ACA] flex items-center gap-2 transform transition duration-300 hover:scale-105">
          <IoMdMusicalNotes className="w-6 h-6" />
          Integrantes
        </button>
        <button className="hover:text-[#C00ACA] flex items-center gap-2 transform transition duration-300 hover:scale-105">
          <MdSimCardDownload className="w-6 h-6" />
          Área do Contratante
        </button>
      </div>
      <audio ref={audioRef} loop>
        <source src="/mp3/curva-audio.mp3" type="audio/mpeg" />
      </audio>
      <div className="ml-auto flex items-center gap-2">
        <button onClick={toggleMusic} className='flex items-center gap-4'>
          <p className='text-md text-gray-100'>On / Off:</p>
          {isMusicPlaying ? (
            <GiSoundOn className="w-10 h-10 text-[#C00ACA]" />
          ) : (
            <GiSoundOff className="w-10 h-10 text-gray-400" />
          )}
        </button>
      </div>
    </main>
  );
}

export default Header;
