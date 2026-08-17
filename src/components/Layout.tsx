
import { ReactNode, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

// TEMPORARY DEBUG HELPER — remove when overflow debugging is done.
const useOverflowDebugger = () => {
  useEffect(() => {
    const check = () => {
      const limit = document.documentElement.clientWidth;
      const offenders: { el: Element; right: number; left: number }[] = [];
      document.querySelectorAll('*').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) return;
        if (rect.right > limit + 1 || rect.left < -1) {
          offenders.push({ el, right: Math.round(rect.right), left: Math.round(rect.left) });
        }
      });
      if (offenders.length) {
        console.group(`[overflow-debug] ${offenders.length} element(s) exceed clientWidth ${limit}px`);
        offenders.forEach(({ el, right, left }) =>
          console.log(right > limit ? `right=${right}` : `left=${left}`, el)
        );
        console.groupEnd();
      } else {
        console.log(`[overflow-debug] no horizontal overflow (clientWidth ${limit}px)`);
      }
    };
    const timer = window.setTimeout(check, 800);
    window.addEventListener('resize', check);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('resize', check);
    };
  }, []);
};

const Layout = ({ children }: LayoutProps) => {
  useOverflowDebugger();

  return (
    <div className="flex full-height flex-col bg-white w-full max-w-full overflow-x-clip">
      <Navbar />
      <main className="flex-grow pt-20 md:pt-24 w-full max-w-full min-w-0">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
