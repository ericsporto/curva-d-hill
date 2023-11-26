'use client';
import Link from 'next/link';
import Image from 'next/image';
import { TbPhotoDown } from 'react-icons/tb';
import { FaRegMap, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { CgMail } from 'react-icons/cg';

export default function Contractor() {
  return (
    <main className="flex items-center justify-between h-full">
      <div
        className="flex flex-col flex-1 lg:flex-row justify-between w-full gap-4 px-8 items-start lg:items-center"
        style={{
          backgroundImage: `url(/assets/fundo-curva-contractor.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left',
          backgroundSize: 'contain',
          backgroundColor: 'rgba(0, 0, 0, 0)',
        }}
      >
        <div className="w-full text-gray-200 lg:pr-24 z-10 border-b lg:border-none py-4">
          <h1 className="text-xl lg:text-5xl font-bold">Nossa História:</h1>
          <h3 className="text-sm lg:text-lg font-normal lg:font-semibold mt-2">
            No show da banda você vai encontrar hits nostálgicos e atuais do Pop
            Rock Nacional/Internacional, Pop e Reggae. Com influências que vão
            desde Legião Urbana a Charlie Brown Jr, passando por Capital
            Inicial, Coldplay, Maroon5, Natiruts, etc.
          </h3>
        </div>
        <div className="w-full flex flex-col text-gray-200 z-10">
          <h1 className="text-xl font-bold mb-4">Links:</h1>
          <Link
            href="https://drive.google.com/drive/folders/1EWC-GdeiPDLHGlYhkZLA7uBpvh2n3lkt"
            target="blank"
          >
            <div className="flex items-center hover:text-[#C00ACA] gap-4 pb-4">
              <TbPhotoDown className="w-10 h-10" />
              <p className="font-bold text-lg">Fotos da banda</p>
            </div>
          </Link>
          <Link
            href="https://drive.google.com/drive/folders/1Rfs_giUW4vPx0_rwGNyh4lXUMn-4IRDa"
            target="blank"
          >
            <div className="flex items-center hover:text-[#C00ACA] gap-4 pb-4">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/logo.png"
                alt="Curva DHill Logo"
                width={32}
                height={32}
                priority
                style={{ width: 'auto' }}
              />
              <p className="font-bold text-lg pl-1.5">Logo da banda</p>
            </div>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1RDB5TMpXrg80MAjuY5hyIbjs3IfrUowC/view"
            target="blank"
          >
            <div className="flex items-center hover:text-[#C00ACA] gap-4 pb-4 border-b">
              <FaRegMap className="w-9 h-9" />
              <p className="font-bold text-lg">Mapa de palco</p>
            </div>
          </Link>
          <div className="w-full flex flex-col z-10 mt-4">
            <h1 className="text-xl font-bold mb-4">Contatos:</h1>
            <div className="flex items-center gap-4 pb-4 text-green-600">
              <FaWhatsapp className="w-10 h-10" />
              <p className="font-bold text-lg">(35) 9.9769-0720</p>
            </div>
            <div className="flex items-center gap-4 pb-4 text-[#C00ACA]">
              <FaInstagram className="w-10 h-10" />
              <p className="font-bold text-lg">@curvadhill</p>
            </div>
            <div className="flex items-center gap-4 pb-4 text-white">
              <CgMail className="w-10 h-10" />
              <p className="font-bold text-lg">curvadhill@gmail.com</p>
            </div>
            <div className="flex items-center gap-4 text-red-600">
              <FiYoutube className="w-10 h-10" />
              <p className="font-bold text-lg">Banda Curva D`Hill</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-black lg:opacity-90"
        style={{ zIndex: 1 }}
      />
    </main>
  );
}
