import React from 'react';

export default function Icon({ negative }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
      <path
        d="M485.4 81.2L6 278.7l499.3 139.8-.8-13.8L46.3 276.3l179-73.7c3.3 42.6 40.2 75 83.1 72.4 43.4-2.6 76.5-39.8 73.9-83.2-1-17.7-7.9-33.7-18.5-46.3L486.3 95l-.9-13.8zM361.3 193c1.9 31.9-22.4 59.2-54.3 61-31.9 1.9-59.2-22.4-61-54.3-.1-2-.1-3.9-.1-5.8l97-39.9c10.6 9.9 17.5 23.5 18.4 39z"
        fill={negative ? '#ffffff' : '#231f20'}
      />
      <path d="M6.8 291L506 430.8l-.4-6.2L15.5 287.4 6.8 291z" fill={negative ? '#ffffff' : '#1e1e2d'} />
    </svg>
  );
}
