import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface PhotoModalProps {
  img: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const PhotoModal: React.FC<PhotoModalProps> = ({
  img,
  open,
  setOpen,
}) => {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-1 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="relative transform overflow-hidden rounded-lg bg-gray-600 shadow-xl transition-all w-[320px] sm:w-[435px] lg:w-[680px] xl:w-[895px]"
              >
                <div className='h-[240px] sm:h-[325px] lg:h-[510px] xl:h-[670px]'  style={{
                  backgroundImage: `url(${img})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'contain'
                }}>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PhotoModal;
