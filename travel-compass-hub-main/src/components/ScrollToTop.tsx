import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If a hash is present (e.g. /#contact), scroll to the anchor instead of forcing top.
    // This keeps Navbar + Footer hash links functional across routes.
    if (hash) {
      const id = hash.replace('#', '');
      // Wait a tick so the home sections mount before we scroll.
      window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
      return;
    }

    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
