'use client';
import { useState } from 'react';
import PhotoModal from '../PhotoModal';

interface PhotoCardProps {
  img: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ img }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <PhotoModal open={openModal} setOpen={setOpenModal} img={img} />
      <div
        onClick={() => setOpenModal(true)}
        className="w-full max-w-[200px] h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-80"
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
      />
    </>
  );
};

export default PhotoCard;
