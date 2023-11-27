import { ReactNode } from 'react';
interface PhotosLayoutProps {
  children: ReactNode;
}

const PhotosLayout = async ({ children }: PhotosLayoutProps) => {
  return (
    <main className="flex flex-col items-center justify-between h-full">
      {children}
    </main>
  );
};

export default PhotosLayout;
