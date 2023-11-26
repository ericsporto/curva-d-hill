import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SideBarMobile from '@/components/MobileSideBar';
import { ReactNode } from 'react';

interface ContractorLayoutProps {
  children: ReactNode;
}

const ContractorLayout = async ({ children }: ContractorLayoutProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between h-full">
      <Header />
      <SideBarMobile />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default ContractorLayout;
