import { ReactNode } from 'react';

interface MusiciansLayoutProps {
  children: ReactNode;
}

const MusiciansLayout = async ({ children }: MusiciansLayoutProps) => {
  return (
    <main className="flex flex-col items-center justify-between h-full">
      {children}
    </main>
  );
};

export default MusiciansLayout;
