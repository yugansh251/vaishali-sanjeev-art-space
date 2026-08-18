
import { ReactNode, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // ⚠️ TEMPORARY DEBUG — remove once horizontal overflow is fixed.
  // Logs any element extending past the document's client width.
  useEffect(() => {
    const scan = () => {
      const limit = document.documentElement.clientWidth;
      const offenders: { el: Element; right: number }[] = [];
      document.querySelectorAll('*').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && rect.right > limit + 1) offenders.push({ el, right: Math.round(rect.right) });
      });
      if (offenders.length) {
        // eslint-disable-next-line no-console
        console.warn(`[TEMPORARY OVERFLOW DEBUG] clientWidth=${limit}, ${offenders.length} overflowing element(s):`, offenders);
      } else {
        // eslint-disable-next-line no-console
        console.log(`[TEMPORARY OVERFLOW DEBUG] no horizontal overflow (clientWidth=${limit})`);
      }
    };
    const id = window.setTimeout(scan, 800);
    window.addEventListener('resize', scan);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener('resize', scan);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white w-full max-w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full min-w-0 max-w-full pt-20 md:pt-24">{children}</main>
      <Footer />
    </div>
  );
};


export default Layout;
