'use client';
import { SecondaryNavigation } from '@/components/secondary-navigation';
import { FaGithub } from 'react-icons/fa6';
import bgImg from '@/public/home/main.png';
import bgTablet from '@/public/assets/home/tablet/image-header.jpg';
import bgDesktop from '@/public/assets/home/desktop/image-hero.jpg';
import Image from 'next/image';
import Link from 'next/link';
import ZX9 from '../public/assets/home/mobile/image-speaker-zx9.png';
import YX from '../public/assets/home/mobile/image-earphones-yx1.jpg';
import ZX9Tablet from '@/public/assets/home/tablet/image-speaker-zx9.png';
import ZX9Desktop from '@/public/assets/home/mobile/image-speaker-zx9.png';

import { useMainContextProvider } from '@/context/main-context';
import clsx from 'clsx';

export default function Home() {
  const { isOpen, cartIsOpen } = useMainContextProvider();

  return (
    <> 
    <a className=' text-orange fixed z-[9999] bottom-0 text-4xl  right-0 m-5 cursor-pointer transition-all hover:text-6xl text-center' target='_blank' href='https://github.com/IgorStojadinovic/next-e-commerce'>
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
      <main className=' relative flex flex-col justify-center py-24  md:py-48  px-6  lg:px-40  xl:py-80  xl:px-80'>
        <div className='absolute top-0 left-0 bottom-0 right-0 -z-20  '>
          <Image
            src={bgTablet}
            alt='bg-mobile'
            className=' md:hidden h-full'
            style={{ objectFit: 'cover' }}
          />
          <Image
            src={bgTablet}
            alt='bg-mobile'
            style={{ objectFit: 'cover' }}
            className='hidden md:flex lg:hidden   '
          />
          <Image
            src={bgDesktop}
            alt='bg-mobile'
            className=' hidden lg:flex h-full w-full object-cover '
          />
        </div>
     
    
        <div className='text-white  text-center flex flex-col items-center justify-center h-full mb-[7rem] md:pt-0 md:px-24 lg:w-5/12 lg:items-start  2xl:px-0  '>
          <span className='text-zinc-400 uppercase tracking-[0.8rem] font-light md:pb-6'>
            {' '}
            New product
          </span>
          <h1 className='uppercase text-[2.25rem] font-bold mt-1 mb-[1.5rem] md:text-[3.5rem] md:tracking-wide md:mb-6 leading-[56px] lg:px-0  lg:text-left'>
            XX99 mark II headphones
          </h1>
          <p className='text-zinc-400 font-light mb-[1.75rem] md:mb-10 lg:text-left 2xl:w-[65%] '>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            href='products/xx99-2'
            className='bg-btn-orange flex justify-center items-center h-12 text-center w-[160px] uppercase text-sm font-semibold tracking-widest hover:bg-transparent border border-orange border-1 hover:text-orange'
          >
            See Product
          </Link>
        </div>
        
      </main>
      <div className='px-6  z-50 md:py-24 md:px-10 lg:px-40 2xl:px-80 '>
        <SecondaryNavigation />
      </div>
      <section className='px-6 text-center flex flex-col gap-6 md:px-10  lg:px-40 2xl:px-80 2xl:gap-12'>
        {/** Mobile z9 */}
        <div className='relative overflow-hidden bg-orange font-light rounded-lg flex flex-col justify-center items-center px-4 py-14 gap-6 leading-6 md:px-44 md:py-16 md:gap-3 2xl:hidden'>
          <Image
            src={ZX9}
            height={150}
            width={150}
            alt='zx9 speaker '
            className='pb-8 z-10 md:hidden'
          />
          <Image
            src={ZX9Tablet}
            height={200}
            width={235}
            alt='zx9 speaker'
            className='hidden pb-8 z-10 md:flex md:pb-0 2xl:hidden'
          />

          <div className='flex flex-col justify-between items-center'>
            <h2 className=' z-10 uppercase text-white font-bold text-4xl tracking-widest px-2 md:mt-16 md:text-[3.5rem] md:leading-snug '>
              zx9 speaker
            </h2>
            <p className='text-gray-100/80 z-10 my-4'>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link
              href='/products/zx9'
              className=' z-10 uppercase font-medium text-sm tracking-widest text-white bg-black px-8 py-4 md:mt-7 hover:bg-white hover:text-black w-2/3'
            >
              See product
            </Link>
          </div>

          <div className='ovals absolute z-0 top-[-165px] opacity-50 md:top-[-250px]'>
            <div className='w-[650px] h-[650px] md:w-[950px] md:h-[950px] border  border-white-[0.5px] rounded-full flex justify-center items-center'>
              <div className='w-1/2 h-1/2 md:w-[60%]  md:h-[60%] border  border-white-[0.5px] rounded-full flex justify-center items-center'>
                <div className='w-10/12 h-5/6 border  border-white-[0.5px] rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
        {/** Desktop z9 */}
        <div className=' relative bg-orange font-light py-32 px-24 lg:flex justify-end items-end overflow-hidden rounded-lg sm:hidden md:hidden 2xl:flex hidden'>
          <Image
            src={ZX9Desktop}
            height={350}
            width={350}
            quality={100}
            alt='zx9 speaker'
            className='hidden pb-8 z-10 md:flex md:pb-0 absolute bottom-[-3rem] left-[15%]'
          />
          <div className='flex flex-col w-[35%] justify-end text-start '>
            <h2 className=' z-10 uppercase text-white font-bold text-4xl tracking-widest px-2 md:mt-16 md:text-[3.5rem] md:leading-snug '>
              zx9 speaker
            </h2>
            <p className='text-gray-100/80 z-10'>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link
              href='/products/zx9'
              className=' z-10 uppercase font-medium text-sm tracking-widest text-center text-white bg-black px-8 py-4 md:mt-7 w-1/2 hover:bg-white hover:text-black hover:font-bold'
            >
              See product
            </Link>
          </div>
          <div className='ovals absolute z-0 top-[-165px] opacity-50 md:top-[-250px] 2xl:top-0 2xl:left-[-7rem]'>
            <div className='w-[650px] h-[650px] md:w-[950px] md:h-[950px] border  border-white-[0.5px] rounded-full flex justify-center items-center'>
              <div className='w-1/2 h-1/2 md:w-[60%]  md:h-[60%] border  border-white-[0.5px] rounded-full flex justify-center items-center'>
                <div className='w-10/12 h-5/6 border  border-white-[0.5px] rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
        <div className=' px-6 py-28 bg-[url("../public/assets/home/mobile/image-speaker-zx7.jpg")] md:bg-[url("../public/assets/home/tablet/image-speaker-zx7.jpg")] 2xl:bg-[url("../public/assets/home/desktop/image-speaker-zx7.jpg")] bg-cover bg-no-repeat bg-right font-light rounded-lg flex flex-col justify-start items-start  leading-6 2xl:py-28 2xl:bg-cover'>
          <h2 className=' z-20 pb-8 uppercase text-black font-semibold text-2xl tracking-widest px-2 text-left'>
            zx7 speaker
          </h2>
          <Link
            href='/products/zx7'
            className=' uppercase font-medium text-sm tracking-widest text-black border-[1.5px] border-black px-8 py-4 hover:bg-black hover:text-white hover:font-medium'
          >
            See product
          </Link>
        </div>

        <div className='flex flex-col gap-6 md:flex-row  2xl:gap-12'>
          <Image src={YX} alt='yx-headphones' className='rounded-lg md:w-1/2' />
          <div className='flex flex-col gap-6 px-6 py-10 bg-light-gray/20 rounded-lg md:w-1/2 2xl:justify-center 2xl:items-start'>
            <h2 className='uppercase font-semibold text-3xl'>yx1 earphones</h2>
            <Link
              href='products/yx1'
              className=' uppercase font-medium text-sm tracking-widest text-black border-[1.5px] border-black px-8 py-4  hover:bg-black hover:text-white hover:font-medium 2xl:py-4 '
            >
              See product
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
