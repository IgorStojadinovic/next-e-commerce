'use client';
import React from 'react';
import { Product } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { useRouter, usePathname } from 'next/navigation';

const ProductContainer = ({ name, type, desc, mobile, link,tablet,desktop,className}: Product) => {
  const pathname = usePathname();
  return (
    <>
      <div className='mb-8 2xl:mb-0 rounded-lg h-full flex 2xl:hidden md:px8  md:mb-24'>
        <Image
          src={mobile}
          alt={name}
          height={560}
          className='hidden 2xl:block rounded-lg'
        />
      </div>
      <Image src={desktop} alt={name} className='rounded-lg mb-4 md:hidden lg:hidden xl:hidden 2xl:hidden'  height={560} width={540}/>
      <Image src={tablet} alt={name} className='rounded-lg mb-4 xl:hidden hidden md:flex'  />
      <Image src={desktop} alt={name} className='rounded-lg mb-4 md:hidden hidden lg:flex'  height={560} width={540}/>
      <div className={className} >
        <span className='text-orange  uppercase tracking-[0.5rem] 2xl:pb-4'>
          {type}
        </span>
        {/**'uppercase font-bold text-2xl tracking-wide px-12 2xl:px-0 2xl:text-5xl 2xl:w-1/4 2xl:mb-8' */}
        <h1
          className={clsx('uppercase text-4xl font-bold', {
            'uppercase font-bold text-2xl tracking-wide  2xl:px-0 2xl:text-5xl  2xl:mb-8 2xl:w-2/3':
              pathname === '/headphones' || pathname === '/speakers' || pathname === '/earphones',
          })}
        >
          {name}
        </h1>
        <p className='text-black/60 font-medium 2xl:pb-10 2xl:my-3 md:px-20 2xl:px-0 ' >
          {desc}
        </p>
        <Link
          href={link}
          className='bg-btn-orange p-4 w-1/2 md:w-2/6 uppercase text-sm font-semibold tracking-widest text-white text-center hover:bg-white border border-orange border-1 hover:text-orange '
        >
          see product
        </Link>
      </div>
    </>
  );
};

export default ProductContainer;
