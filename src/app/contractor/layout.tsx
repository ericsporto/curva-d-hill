import { ReactNode } from 'react';
interface ContractorLayoutProps {
  children: ReactNode;
}

const ContractorLayout = async ({ children }: ContractorLayoutProps) => {
  return (
    <main className="flex flex-col items-center justify-between h-full">
      {children}
    </main>
  );
};

export default ContractorLayout;
