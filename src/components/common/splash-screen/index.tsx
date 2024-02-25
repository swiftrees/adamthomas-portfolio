'use client';

import React, { useEffect, useState } from 'react';

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
      finishLoading();
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flex h-screen items-center justify-center z-50 absolute top-0 left-0 right-0 bottom-0 bg-gray-100">
      <div className="animate-pulse">
        <svg
          width={100}
          height={100}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke={'black'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
          <path d="M10 16v-6a2 2 0 1 1 4 0v6" />
          <path d="M10 13h4" />
        </svg>
      </div>
    </div>
  );
};

export default SplashScreen;
