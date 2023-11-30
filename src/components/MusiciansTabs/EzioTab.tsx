import React from 'react';

function EzioTab() {
  return (
    <div className="p-1 xl:p-4 w-full h-full flex flex-col xl:flex-row items-center justify-center gap-2 xl:gap-8">
      <div className='w-[216px] h-96 xl:-mt-20'
        style={{
          backgroundImage: `url(/assets/ezio-1.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
      />
      <div className='w-64 h-96 xl:mt-20'
        style={{
          backgroundImage: `url(/assets/ezio-2.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
      />
      <div className='w-64 h-96 xl:-mt-20'
        style={{
          backgroundImage: `url(/assets/ezio-4.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
      />
      <div className='w-64 h-96 xl:mt-20'
        style={{
          backgroundImage: `url(/assets/ezio-3.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
      />
    </div>
  );
}

export default EzioTab;
