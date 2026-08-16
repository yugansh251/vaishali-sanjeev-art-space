import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex full-height flex-col bg-white w-full max-w-full overflow-x-clip">
      <Navbar />
      <main className="flex-grow pt-20 md:pt-24 w-full max-w-full min-w-0">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
