import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SideBarMobile from '@/components/MobileSideBar';
import { ReactNode } from 'react';

interface ScheduleLayoutProps {
  children: ReactNode;
}

const ScheduleLayout = async ({ children }: ScheduleLayoutProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between h-full">
      <Header />
      <SideBarMobile />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default ScheduleLayout;
