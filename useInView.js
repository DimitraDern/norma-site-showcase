import { useEffect, useRef, useState } from "react";

/**
 * useInView
 * Επιστρέφει ένα ref (βάλε το σε ένα DOM element) και ένα boolean
 * που γίνεται true τη στιγμή που το element μπαίνει στην οθόνη.
 * Χρησιμοποιείται για τα "fade-up on scroll" εφέ σε όλο το site.
 */
export default function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        // Μόλις εμφανιστεί μία φορά, δεν χρειάζεται να συνεχίσουμε να παρακολουθούμε
        observer.disconnect();
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isInView];
}
