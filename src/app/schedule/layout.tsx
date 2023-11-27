import { ReactNode } from 'react';

interface ScheduleLayoutProps {
  children: ReactNode;
}

const ScheduleLayout = async ({ children }: ScheduleLayoutProps) => {
  return (
    <main className="flex flex-col items-center justify-between h-full">
      {children}
    </main>
  );
};

export default ScheduleLayout;
