import LogoIcon from '@/icons/logo';
import React from 'react';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  return (
    <div className="text-black dark:text-white flex items-center space-x-4 justify-center">
      <LogoIcon className="text-emerald-500 hover:text-emerald-400" size={50} />
    </div>
  );
};

export { Logo };
