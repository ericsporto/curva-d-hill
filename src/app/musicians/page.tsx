'use client';
import React, { useEffect, useRef } from 'react';
import BrunoTab from '@/components/MusiciansTabs/BrunoTab';
import EricTab from '@/components/MusiciansTabs/EricTab';
import EzioTab from '@/components/MusiciansTabs/EzioTab';
import PaoTab from '@/components/MusiciansTabs/PaoTab';
import { tabs } from '@/utils/musiciansDataTabs';
import { Tab } from '@headlessui/react';

export default function Musicians() {
  const firstTabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (firstTabRef.current) {
      firstTabRef.current.focus();
    }
  }, []);

  return (
    <main className="flex flex-col lg:flex-row justify-between h-full w-full gap-4 items-start lg:items-center relative" style={{ backgroundImage: `url(/assets/fundo-curva-contractor.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain' }}>
      <div className="w-full h-full text-gray-200 z-10 ">
        <Tab.Group defaultIndex={0}>
          <div className="w-full h-full flex flex-col xl:flex-row mt-4 xl:mt-0">
            <Tab.List className="flex xl:h-full justify-around items-center xl:flex-col p-2 xl:w-[30%]">
              {tabs.map((item, index) => (
                <Tab
                  key={item.id}
                  ref={index === 0 ? firstTabRef : null}
                  className="tab xl:w-[90%] flex-col text-gray-100 items-center xl:items-start  xl:p-4 hover:text-[#ef38f893] transform transition duration-300 flex gap-2 focus:text-[#C00ACA] xl:focus:scale-110 outline-none"
                >
                  <div className='flex items-center xl:gap-2'>
                    <item.icon className='w-[25px] xl:w-[35px] xl:h-[35px]' /> {''} <span className='text-[9px] xl:text-3xl'>{item.name}</span>
                  </div>
                  <p className='text-gray-400 text-[9px] xl:text-base -mt-2 xl:-mt-0'>{item.description}</p>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="w-full mx-0 overflow-auto xl:border-l">
              <Tab.Panel className="w-full h-full"><EzioTab /></Tab.Panel>
              <Tab.Panel className="w-full h-full"><PaoTab /></Tab.Panel>
              <Tab.Panel className="w-full h-full"><BrunoTab /></Tab.Panel>
              <Tab.Panel className="w-full h-full"><EricTab /></Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black lg:opacity-90" style={{ zIndex: 1 }} />
    </main>
  );
}
