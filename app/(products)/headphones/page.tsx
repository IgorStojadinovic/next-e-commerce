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
        <p className='bg-black text-white p-6 text-center uppercase font-bold tracking-widest 2xl:pb-9 border-none  '>
          Headphones
        </p>
        <button
          className='py-4 px-6 md:px-8 text-black/50 font-bold lg:hidden'
          onClick={() => router.push('/')}
        >
          Go Back
        </button>
        {HeadphonesPage.map((product) => (
          <div
          /**flex flex-col text-center justify-between even:my-24 px-6 lg:px-32 xl:my-40 2xl:flex 2xl:even:text-right 2xl:px-80 xl:flex-row-reverse xl:odd:flex-row lg:odd:flex-row  gap-20 md:px-8 md:items-center */
            key={product.name}
            className={clsx('', {
              'flex flex-wrap even:my-32 px-6 xl:flex-row lg:flex-nowrap xl:even:flex-row-reverse xl:px-32 2xl:px-80 lg:mt-16 xl:h-[560px] xl:gap-32 2xl:gap-16 ':
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
        className='px-6 2xl:px-80 2xl:mb-40 xl:px-32'
      >
        <SecondaryNavigation />
      </div>
    </>
  );
};

export default Headphones;
