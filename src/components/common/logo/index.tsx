import LogoIcon from '@/icons/logo';
import React from 'react';

const Logo = () => {
  return (
    <div className="text-black dark:text-white flex items-center space-x-4 justify-center">
      <LogoIcon className="text-emerald-600 hover:text-emerald-400" size={40} />
    </div>
  );
};

export { Logo };
