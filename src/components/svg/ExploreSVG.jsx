import React from 'react';

const ExploreSVG = () => (
  <svg height='150' width='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'>
    <linearGradient id='a' x1='50%' x2='50%' y1='85.2%' y2='-.6%'>
      <stop offset='0' stopColor='#bfd8ff' />
      <stop offset='1' stopColor='#6393ff' />
    </linearGradient>
    <linearGradient id='b' x1='66.5%' x2='66.5%' y1='142.4%' y2='-5.7%'>
      <stop offset='0' stopColor='#3ac6ff' stopOpacity='0.3' />
      <stop offset='1' stopColor='#686fd1' />
    </linearGradient>
    <g fill='none'>
      <path d='M20.7 7h77.1v103.5H20.7z' fill='#ebf4ff' />
      <path d='M13.9.3h87.5v115H13.9z' stroke='url(#a)' />
      <path d='M38.6 23.5h77V127h-77z' fill='#00cde6' fillOpacity='0.2' />
      <path d='M31.1 16.4h87.5v114.9H31.1z' stroke='url(#b)' />
      <path d='M48.4 33.6h87.5v115H48.4z' fill='#fff' stroke='#3f5fa7' />
      <path d='M65 61.1h50M65 67h50M65 72.8h50M65 106.4h26.5M65 112.4h26.5M65 118.4h13.5M65 84.1h50M65 90h40M65 95.8h50'
      stroke='#b3acff' strokeWidth='3' />
    </g>
  </svg>
);

export default ExploreSVG;
