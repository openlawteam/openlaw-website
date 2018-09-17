import React from 'react';

const privacySVG = (props) => (
  <svg {...props} height="150" width="150" viewBox="0 0 150 150" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <linearGradient id="privacy-a" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0" stopColor="#8cc7e3" />
        <stop offset="1" stopColor="#066bd1" />
    </linearGradient>
    <linearGradient id="privacy-b" x1="4.1%" x2="97.3%" y1="44.2%" y2="102.3%">
        <stop offset="0" stopColor="#2f87d6" />
        <stop offset="1" stopColor="#8ac6e2" />
    </linearGradient>
    <g fill="none">
        <path d="M34 62.5a7.5 7.5 0 0 0-7.5 7.5v72c0 4.1 3.4 7.5 7.5 7.5h83c4.1 0 7.5-3.4 7.5-7.5V70c0-4.1-3.4-7.5-7.5-7.5z"
        stroke="url(#privacy-a)" />
        <path d="M42 69h67a8 8 0 0 1 8 8v57.8a8 8 0 0 1-8 8H42a8 8 0 0 1-8-8V77a8 8 0 0 1 8-8z"
        fill="#dee9ff" />
        <path d="M47.5 141v-19M64 141v-7.4l-5-1.6M72.5 133.3v7.7M82 141v-2.5l4-1.5v-4M93 141v-8.5l4-3.4V124M104 141v-13M55 71v15.8l-8 5.6V97M69 71l-5 5.3V80M76 71v11M84 71l6 6.6V85M100 78v-3.5l4-3.5"
        stroke="#d3deff" strokeLinecap="round" strokeWidth="2" />
        <circle cx="78" cy="106" fill="#d3d8ff" opacity="0.7" r="17" />
        <g fill="#fff" stroke="#2283dd" transform="translate(69 94)">
            <circle cx="9" cy="4.7" r="4.2" />
            <path d="M4 11.6c-2 0-3.5 1.6-3.5 3.5v5.2c0 .8.7 1.5 1.5 1.5h14c.8 0 1.5-.7 1.5-1.5V15c0-1.9-1.6-3.5-3.5-3.5z"
            />
        </g>
        <circle cx="100" cy="80" r="4" stroke="#9eb4f5" strokeWidth="0.5" />
        <circle cx="100" cy="80" fill="#c5a8ff" opacity="0.5" r="2" />
        <circle cx="64" cy="82" r="4" stroke="#9eb4f5" strokeWidth="0.5" />
        <circle cx="64" cy="82" fill="#c5a8ff" opacity="0.5" r="2" />
        <circle cx="47" cy="99" r="4" stroke="#9eb4f5" strokeWidth="0.5" />
        <circle cx="47" cy="99" fill="#c5a8ff" opacity="0.5" r="2" />
        <circle cx="57" cy="131" r="4" stroke="#9eb4f5" strokeWidth="0.5" />
        <circle cx="57" cy="131" fill="#c5a8ff" opacity="0.5" r="2" />
        <circle cx="86" cy="128" r="4" stroke="#9eb4f5" strokeWidth="0.5" />
        <circle cx="86" cy="128" fill="#c5a8ff" opacity="0.5" r="2" />
        <circle cx="109.5" cy="106.5" fill="#86ebf5" r="2.5" />
        <path d="M99.4 63V38c0-8.3-2.9-23-23.9-23s-24 14-24 23v15.6c0 1.4-1.5 4.2-1.5 4.2l-1.8 1-3.2-.3V41.3C45 25.8 52 11 75.5 11c9.6 0 30.5 3.6 30.5 30.3V63z"
        fill="#eef4ff" />
        <path d="M39.5 57.7c3.7 1.8 7 1.7 10.1-.3a20.7 20.7 0 0 0 1-2.2 5 5 0 0 0 .5-1.6V38c0-5.8 1.2-11 4.1-15 4-5.4 10.5-8.4 20.3-8.4 9.7 0 16.3 3 20.3 8.6 2.9 4.1 4.1 9.3 4.1 14.8v24.6h11.6V37.9c0-13.7-5-23-13.7-28.6-6.5-4-14.4-5.8-22.3-5.8-24.7 0-36 13.2-36 34.4v19.8z"
        stroke="url(#privacy-b)" />
    </g>
</svg>
);

export default privacySVG;
