import React from 'react';
import Image from 'next/image';
import logo from '../src/assets/Honey-Buns-logos.jpeg';

export default function Logo() {
  return (
    <>
      <Image src={logo} alt="Logo" />
    </>
  );
}
