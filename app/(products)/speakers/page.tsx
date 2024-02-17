'use client';
import React from 'react';
import { SpeakersPage } from '@/lib/data';
import { SecondaryNavigation } from '@/components/secondary-navigation';
import ProductContainer from '@/components/product-container';
import { usePathname, useRouter } from 'next/navigation';
import { useMainContextProvider } from '@/context/main-context';
import clsx from 'clsx';
import { FaGithub } from 'react-icons/fa6';

const Speakers = () => {
  const router = useRouter();
  const { isOpen, cartIsOpen } = useMainContextProvider();

  return (
    <>
     <a className=' text-orange fixed z-[9999] bottom-0 text-4xl  right-0 m-5 cursor-pointer transition-all hover:text-6xl text-center' target='_blank' href='https://github.com/IgorStojadinovic/next-e-commerce'>
      <FaGithub/>
    </a>
      <div className='mb-[7.5rem] '>
        <div
          className={clsx('', {
            'bg-black/30 absolute top-0 left-0 right-0 bottom-0 z-30 ':
              cartIsOpen,
          })}
        ></div>
        <p className='bg-black text-white p-6 text-center uppercase font-bold tracking-widest 2xl:pb-9 border-none 2xl:text-3xl'>
          Speakers
        </p>
        <button
          className='py-4 px-6 md:px-8 text-black/50 font-bold lg:hidden'
          onClick={() => router.push('/')}
        >
          Go Back
        </button>
        {SpeakersPage.map((product) => (
          <div
            key={product.name}
            className='flex flex-wrap odd:my-32 px-6 xl:flex-row lg:flex-nowrap xl:even:flex-row-reverse xl:px-32 2xl:px-80 lg:mt-16 xl:h-[560px] xl:gap-32 2xl:gap-16 '
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
        className={clsx('px-6 2xl:px-64 2xl:mb-40', {
          hidden: isOpen,
        })}
      >
        <SecondaryNavigation />
      </div>
    </>
  );
};

export default Speakers;
