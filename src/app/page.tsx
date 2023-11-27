'use client';
import SwiperSlideField from '@/components/Home/SwiperSlide';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between h-full relative">
      <div
        className="flex flex-col flex-1 lg:flex-row justify-between w-full gap-4 px-8 items-start mt-4 lg:mt-0 lg:items-center"
        style={{
          backgroundImage: `url(/assets/fundo-curva.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left',
          backgroundSize: 'contain',
        }}
      >
        <div className="w-full text-gray-200 lg:pr-24 z-10">
          <h1 className="text-xl lg:text-5xl font-bold">Nossa História:</h1>
          <h3 className="text-sm lg:text-lg font-normal lg:font-semibold mt-2">
            A pressão aqui vem do som e não da panela, com um repertório muito
            animado, você vai tremer os músculos dançando e vai exercitar o
            cérebro lembrando das letras de cada música. Com um nome bem
            peculiar, a Curva d’Hill é uma banda mineira de Três Corações,
            criada em setembro de 2022 e hoje formada pelos músicos Eric Porto,
            Rafael ( vulgo ‘Pão Batera’) e os irmãos Ezinho e Bruno Xavier.
            Nesse pouco tempo de existência a banda ganhou respeito e se
            apresentou em casas renomadas da região como Help Pub e Jardim
            Elétrico em Varginha, e Queen’s Pub em Três Corações. Atualmente, a
            banda está em processo de composição e gravação para lançar em 2024,
            seu primeiro álbum que contará com 5 músicas.
          </h3>
        </div>
        <SwiperSlideField />
      <div
        className="absolute top-0 left-0 w-full h-full bg-black lg:opacity-90"
        style={{ zIndex: 1 }}
      />
      </div>
    </main>
  );
}
