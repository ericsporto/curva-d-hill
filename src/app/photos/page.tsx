'use client';

import PhotoCard from '@/components/Home/PhotoCard';

export default function Photos() {
  const images = [
    {
      img: '/assets/photo-section-1.jpg',
    },
    {
      img: '/assets/photo-section-2.jpg',
    },
    {
      img: '/assets/photo-section-3.jpg',
    },
    {
      img: '/assets/photo-section-4.jpg',
    },
    {
      img: '/assets/photo-section-5.jpg',
    },
    {
      img: '/assets/photo-section-6.jpg',
    },
  ];
  return (
    <main
      className="flex flex-col lg:flex-row justify-between h-full w-full gap-4 px-8 items-start lg:items-center relative"
      style={{
        backgroundImage: `url(/assets/fundo-curva-contractor.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      }}
    >
      <div className="w-full text-gray-200 z-10 py-4">
        <h1 className="text-xl lg:text-5xl font-bold">Algumas Fotos:</h1>
        <p className="text-xs lg:text-md font-semibold my-2 text-gray-400">
          Clique nelas para ver maior!
        </p>
        <div className="flex flex-wrap justify-center gap-4 lg:px-60">
          {images.map((item, index) => (
            <PhotoCard key={index} img={item.img}/>
          ))}
        </div>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-black lg:opacity-90"
        style={{ zIndex: 1 }}
      />
    </main>
  );
}
