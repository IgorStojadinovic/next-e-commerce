'use client';
import React from 'react';
import { HeadphonesPage } from '@/lib/data';
import { FaGithub } from 'react-icons/fa6';
import ProductContainer from '@/components/product-container';
import { SecondaryNavigation } from '@/components/secondary-navigation';
import { useMainContextProvider } from '@/context/main-context';
import { useRouter, usePathname } from 'next/navigation';

import clsx from 'clsx';

const Headphones = () => {
  const { isOpen, cartIsOpen } = useMainContextProvider();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
     <a className='text-orange fixed z-[9999] bottom-0 text-4xl  2xl:top-0 right-0 m-5 cursor-pointer transition-all hover:text-6xl text-center' target='_blank'>
      <FaGithub/>
    </a>
      <div
        className={clsx(
          '',
          {
            'bg-black/30 absolute top-0 left-0 right-0 bottom-0 z-30':
              cartIsOpen,
          },
          {
            'bg-black/30 absolute top-0 left-0 right-0 bottom-0 z-30': isOpen,
          }
        )}
      ></div>
      <div className='mb-[7.5rem]  relative '>
        <p className='bg-black text-white p-6 text-center uppercase font-bold tracking-widest 2xl:pt-5 2xl:pb-[56px] border-none 2xl:text-3xl '>
          Headphones
        </p>
        <button
          className='py-4 px-6 md:px-8 text-black/50 font-bold 2xl:hidden'
          onClick={() => router.push('/')}
        >
          Go Back
        </button>
        {HeadphonesPage.map((product) => (
          <div
            key={product.name}
            className={clsx('', {
              '  flex flex-col  text-center px-6 2xl:flex 2xl:px-80 2xl:flex-row-reverse 2xl:odd:flex-row 2xl:even:text-right 2xl:my-40 lg:gap-32 2xl:gap-52 md:px-8 md:items-center':
                pathname === '/headphones',
            })}
          >
            <ProductContainer
              name={product.name}
              type={product.type}
              desc={product.desc}
              mobile={product.mobile}
              tablet={product.tablet}
              desktop={product.desktop}
              link={product.link}
              className={product.className}
            />
          </div>
        ))}
      </div>

      <div
        className='px-6 2xl:px-80 2xl:mb-40'
      >
        <SecondaryNavigation />
      </div>
    </>
  );
};

export default Headphones;
