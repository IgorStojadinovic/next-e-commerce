import React from 'react'
import { secondayNavLinks } from '@/lib/data'
import { SecondaryNavLinks } from '@/lib/types'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link'
import Image from 'next/image'
import { useMainContextProvider } from '@/context/main-context'

const SecondaryNavigation = () => {
  const { toggleMenu } = useMainContextProvider()
  return (
    <nav className='-z-10 pt-10 pb-[7.5rem] md:pt-0 md:pb-0'>
      <ul className='flex flex-col gap-4 md:flex-row'>
        {secondayNavLinks.map((link) => (
          <SecondaryNavLinkComponent
            name={link.name}
            url={link.url}
            imgpath={link.imgpath}
            key={link.name}
            height={150}
            width={150}
            toggleMenu={toggleMenu}
          />
        ))}
      </ul>
    </nav>
  )
}

const MobileNavigation = () => {
  const { toggleMenu } = useMainContextProvider()
  return (
    <nav className='px-6 py-12  bg-white lg:hidden 2xl:hidden '>
      <ul className='flex flex-col gap-8 items-center justify-center h-full  md:flex-row'>
        {secondayNavLinks.map((link) => (
          <MobileNavLinkComponent
            name={link.name}
            url={link.url}
            imgpath={link.imgpath}
            key={link.name}
            height={150}
            width={150}
            toggleMenu={toggleMenu}
          />
        ))}
      </ul>
    </nav>
  )
}

const MobileNavLinkComponent = ({
  name,
  url,
  imgpath,
  height,
  width,
  toggleMenu,
}: SecondaryNavLinks) => {
  return (
    <li className='flex flex-col justify-center items-center relative w-full  hover:cursor-pointer'>
      <Image
        src={imgpath}
        alt={name}
        width={height}
        height={width}
        className='z-20'
        loading='lazy'
      />
      <p className='mb-2 uppercase font-bold'>{name}</p>
      <Link
        href={url}
        className='flex items-center mb-6 uppercase font-semibold text-gray-500 z-20'
        onClick={() => {
          toggleMenu()
        }}
      >
        shop
        <IoIosArrowForward color={'#D87D4A'} />
      </Link>
      <div className='rounded-lg bg-light-gray/20 h-[85%] w-full absolute bottom-0 z-10 '>
        {' '}
      </div>
    </li>
  )
}

const SecondaryNavLinkComponent = ({
  name,
  url,
  imgpath,
  height,
  width,
}: SecondaryNavLinks) => {
  return (
    <li className='flex flex-col justify-center items-center relative w-full  '>
      <Image
        src={imgpath}
        alt={name}
        width={height}
        height={width}
        className='z-20'
        loading='lazy'
      />
      <p className='mb-2 uppercase font-bold'>{name}</p>
      <Link
        href={url}
        className='flex items-center mb-6 uppercase font-semibold text-gray-500 z-20 hover:text-orange'
      >
        shop
        <IoIosArrowForward />
      </Link>
      <div className='rounded-lg bg-light-gray/20 h-[75%] w-full absolute bottom-0 z-10 '>
        {' '}
      </div>
    </li>
  )
}

export { SecondaryNavigation, MobileNavigation }
