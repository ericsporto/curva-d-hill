import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import SideBarMobile from '@/components/MobileSideBar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Curva DHill',
  description: 'Banda Curva DHill',
  icons: {
    icon: '/favicon-16x16.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-screen flex flex-col">
      <body className={`${inter.className} flex-1 flex flex-col justify-between`}>
        <Header />
        <SideBarMobile />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
