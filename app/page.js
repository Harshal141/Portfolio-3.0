"use client"; // Add this directive at the top

import React, { useState } from 'react';
import styles from '@/app/ui/home.module.css';
import clsx from 'clsx';

export default function Home() {
  const [mode, setMode] = useState('light'); // default mode is 'light'

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <main>
        <div className={clsx('flex',
          {
            'bg-gray-100 text-gray-500': mode === 'dark',
            'bg-green-500 text-white': mode === 'light',
          }
        )}>tip</div>
      <button onClick={toggleMode}>
        Toggle Mode
      </button>
    </main>
  );
}
