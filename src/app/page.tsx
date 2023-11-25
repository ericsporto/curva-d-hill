'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SwiperSlideField from '@/components/Home/SwiperSlide';
import SideBarMobile from '@/components/MobileSideBar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <SideBarMobile/>
      <div className="flex flex-col lg:flex-row justify-between w-full gap-4 px-8 items-start mt-4 lg:mt-0 lg:items-center">
        <div className='w-full text-gray-200 lg:pr-24'>
          <h1 className='text-xl lg:text-5xl font-bold'>Nossa História:</h1>
          <h3 className='text-sm lg:text-lg font-normal lg:font-semibold'>
            A pressão aqui vem do som e não da panela, com um repertório muito
            animado, você vai tremer os músculos dançando e vai exercitar o
            cérebro lembrando das letras de cada música.Com um nome bem
            peculiar, a Curva d’Hill é uma banda mineira de Três Corações,
            criada em setembro de 2022 e hoje formada pelos músicos Eric Porto,
            Rafael ( vulgo ‘Pão Batera’) e os irmãos Ezinho e Bruno Xavier.Nesse
            pouco tempo de existência a banda ganhou respeito e se apresentou em
            casas renomadas da região como Help Pub e Jardim Elétrico em
            Varginha, e Queen’s Pub em Três Corações.Atualmente, a banda está em
            processo de composição e gravação para lançar em 2024, seu primeiro
            álbum que contrará com 5 músicas.
          </h3>
        </div>
        <SwiperSlideField />
      </div>
      <Footer />
    </main>
  );
}
