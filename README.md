# NORMA S.A. - Landing Page
 
A modern, animated landing page built for **NORMA S.A.** - deep navy-charcoal palette with a confident blue accent, geometric display type, and clean sans-serif body text.
 
 **Live site:** [normasa.gr](https://normasa.gr)
 
> This repository showcases the project's design and structure. 
---
 
##  Overview
 
A single-page marketing site focused on clarity, trust, and brand consistency - designed around real product photography and a calm, professional tone suited to an industrial/manufacturing client.
 
##  Tech Stack
 
- **React** - component architecture
- **Vite** - build tooling & dev server
- **Tailwind CSS** - utility-first styling
- **Typography** - [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (display, headings) + [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) (body) + [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) (mono accents)
##  Design Language
 
| Element | Choice |
|---|---|
| Primary palette | Deep navy-charcoal (`ink`) + blue accent (`accent`) |
| Secondary tones | Blue-gray (`steel`) for muted text/lines, cool off-white (`paper`) for backgrounds |
| Headings / display | Space Grotesk |
| Body text | IBM Plex Sans |
| Mono accents | IBM Plex Mono |
| Tone | Clean, minimal, industrial-professional |
 
##  Sections
 
- **Header** - sticky navbar with an "N" logo badge and a mobile-responsive menu
- **Hero** - full-height, centered layout with an accent-colored eyebrow label and a display heading
- **Company** - "Three generations, one factory": brand story since 1976, with 4 animated stat cards (Founded, Years of experience, Nationwide distribution, International exports) that count up from 0 when scrolled into view
- **Products** - dark navy section with a responsive product card grid
- **Contact** - contact details, social icons, and an embedded Google Map
- **Footer** - minimal, dark navy


##  Code Sample
 
A small reusable hook used throughout the site to trigger scroll-based "fade-up" animations and the animated stat counters:
 
```jsx
import { useEffect, useRef, useState } from "react";
 
/**
 * useInView
 * Returns a ref (attach it to a DOM element) and a boolean that
 * becomes true the moment the element scrolls into view.
 * Used across the site for "fade-up on scroll" effects.
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
        // Once triggered, no need to keep observing
        observer.disconnect();
      }
    }, options);
 
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  return [ref, isInView];
}
```
 
Design tokens (colors & fonts) defined centrally in the Tailwind config:
 
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#06152D", light: "#0B2F66" },
        steel: { DEFAULT: "#5C7290", light: "#8FA3BE" },
        accent: { DEFAULT: "#1F5FA8", dark: "#003F5C", light: "#5B8FCC" },
        paper: "#F0F3F7",
        tag: "#F8FAFC",
        signal: "#D9A404",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
```
 
##  Nice Touches
 
- **Respects motion preferences** - all animations are disabled automatically for users with `prefers-reduced-motion` enabled
- **Ken Burns effect** on the hero background - a slow, continuous zoom + pan that subtly reveals the building photo over time
- **Accessible focus states** - visible focus outlines on all interactive elements for keyboard navigation
- **Custom scrollbar handling** for the horizontal product carousel

##  Screenshots
 <img width="1896" height="1077" alt="image" src="https://github.com/user-attachments/assets/80c9924a-8534-42eb-8bc6-7022e46b7e04" />

*Picture 1: Hero section*
 
 <img width="1897" height="1078" alt="image" src="https://github.com/user-attachments/assets/92496a7d-762b-4f5b-844f-9a0813894e17" />

*Picture 2: Products section*

##  License
 
Design and content © NORMA S.A. This showcase repository is for portfolio purposes only.
 
