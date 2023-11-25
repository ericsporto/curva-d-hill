import { Fragment, useEffect, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { FaClipboardList, FaBars } from 'react-icons/fa';
import { MdPhotoCamera, MdSimCardDownload } from 'react-icons/md';
import { IoMdMusicalNotes, IoMdCloseCircle } from 'react-icons/io';
import { GiSoundOff, GiSoundOn } from 'react-icons/gi';
import Link from 'next/link';

const navigation = [
  { name: 'Agenda', href: '#', icon: <FaClipboardList />, current: false },
  { name: 'Fotos', href: '#', icon: <MdPhotoCamera />, current: false },
  {
    name: 'Integrantes',
    href: '#',
    icon: <IoMdMusicalNotes />,
    current: false,
  },
  {
    name: 'Área do Contratante',
    href: '#',
    icon: <MdSimCardDownload />,
    current: false,
  },
];

export default function SideBarMobile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  useEffect(() => {
    setTimeout(() => {
      setIsMusicPlaying(true);
    }, 3000);
  }, []);

  const toggleMusic = () => {
    setIsMusicPlaying((prev) => !prev);
  };

  return (
    <>
      <div className="w-full lg:hidden">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-48 top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <IoMdCloseCircle
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6 pb-2">
                    <div className="flex h-16 shrink-0 items-center">
                      <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/logo.png"
                        alt="Curva DHill Logo"
                        width={40}
                        height={40}
                        priority
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name} className='text-white flex items-center border-b border-gray-800 pt-3 pb-3'>
                                {item.icon}
                                <Link
                                  href={item.href}
                                  className="text-gray-100 ml-2"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-transparent px-4 py-4 shadow-sm sm:px-6 border-b border-gray-400 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <FaBars className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
          <audio ref={audioRef} loop>
            <source src="/mp3/curva-audio.mp3" type="audio/mpeg" />
          </audio>
          <div className="ml-auto flex items-center gap-2">
            <button onClick={toggleMusic} className="flex items-center gap-4">
              <p className="text-md text-gray-100">On / Off:</p>
              {isMusicPlaying ? (
                <GiSoundOn className="w-10 h-10 text-[#C00ACA]" />
              ) : (
                <GiSoundOff className="w-10 h-10 text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
