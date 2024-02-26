'use client';

import MoonFilled from '@/icons/moon-filled';
import SunHigh from '@/icons/sun-high';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button aria-label={'Light mode'} onClick={() => setTheme('light')}>
        <SunHigh className="opacity-0" size={24} />
      </button>
    );
  }

  if (theme === 'dark')
    return (
      <button
        aria-label={'Light mode'}
        className="animate-fade-in"
        onClick={() => setTheme('light')}
      >
        <SunHigh color="#FACC15" size={24} />
      </button>
    );

  return (
    <button
      aria-label={'Dark mode'}
      className="animate-fade-in"
      onClick={() => setTheme('dark')}
    >
      <MoonFilled size={24} />
    </button>
  );
};

export default DarkMode;
