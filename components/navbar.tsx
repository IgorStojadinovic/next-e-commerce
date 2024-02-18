'use client'
import React from 'react'
import { IoMenuSharp, IoCartOutline } from 'react-icons/io5'
import { IoIosClose } from 'react-icons/io'
import { links } from '@/lib/data'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MobileNavigation } from './secondary-navigation'
import { useMainContextProvider } from '@/context/main-context'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
const Navbar = (): React.JSX.Element => {
  const { toggleMenu, toggleCart, isOpen, cartIsOpen } =
    useMainContextProvider()
  const pathname = usePathname()

  return (
    <div className=' overflow-x-hidden'>
      <nav className='bg-black text-gray-300 flex flex-col p-6 z-40 border border-black md:px-8 lg:px-44  2xl:px-64 lg:hidden'>
        <div className='flex justify-between mb-4 h-full w-full border border-black'>
          <IoMenuSharp
            className='h-[2rem] w-[2rem] z-40 text-white'
            onClick={() => {
              toggleMenu()
            }}
          />
          <Link className='text-2xl font-extrabold text-white z-40' href={'/'}>
            audiophile
          </Link>
          <ul className='hidden'>
            {links.map((link) => (
              <li key={link.hash}>
                <Link href={link.path}> {link.name}</Link>
              </li>
            ))}
          </ul>
          <IoCartOutline
            className='h-[2rem] w-[2rem] z-40 text-white'
            onClick={() => {
              toggleCart()
            }}
          />
        </div>
        <div className='h-[1px] w-full bg-white/50'></div>
      </nav>
      <nav
        className={clsx(
          ' ',
          {
            '  bg-black p-9 z-50  lg:px-32 2xl:px-80   w-full hidden justify-between 2xl:flex xl:flex lg:flex':
              pathname !== '/',
          },
          {
            'lg:flex absolute justify-between bg-transparent p-9 z-50   2xl:px-80   w-full hidden border-b-1 border-white':
              pathname === '/',
          }
        )}
      >
        <div className='border-b-[0.5px] w-full flex justify-between py-9  z-50 abolsute'>
          <a
            className='text-2xl font-extrabold text-white z-40 hover:text-orange'
            href='/'
          >
            audiophile
          </a>
          <ul className='text-white uppercase flex justify-between 2xl:gap-10 xl:gap-7 lg:gap-4 tracking-widest font-bold'>
            <li className='hover:text-orange'>
              <Link href={'/'}>Home</Link>
            </li>
            <li className='hover:text-orange'>
              <Link href={'/headphones'}>Headphones</Link>
            </li>
            <li className='hover:text-orange'>
              <Link href={'/speakers'}>Speakers</Link>
            </li>
            <li className='hover:text-orange'>
              <Link href={'/earphones'}>Earphones</Link>
            </li>
          </ul>
          <IoCartOutline
            className='h-[2rem] w-[2rem] z-40 text-white hover:text-orange hover:cursor-pointer'
            onClick={() => {
              toggleCart()
            }}
          />
        </div>
      </nav>

      {isOpen ? (
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'keyframes',
            duration: '0.2',
          }}
          className='absolute w-screen h-dvh open z-50'
        >
          <MobileNavigation />
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 0 }}
          transition={{
            type: 'keyframes',
            duration: '0.2',
          }}
          className=' absolute w-screen h-dvh open -z-50'
        >
          <MobileNavigation />
        </motion.div>
      )}

      {cartIsOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'keyframes',
            duration: '0.2',
          }}
          className='absolute z-40 m-6 rounded-lg left-0 right-0 px-7 py-9 bg-white shadow-lg flex flex-col justify-center md:w-[500px] md:left-[30%] 2xl:w-[500px] 2xl:left-[57%] 2xl:top-40'
        >
          {' '}
          <IoIosClose
            className='text-2xl self-end mb-4 cursor-pointer'
            onClick={() => {
              toggleCart()
            }}
          />
          <div className='flex justify-between '>
            <h2 className='uppercase font-bold'>Cart</h2>
            <button
              className='underline'
              onClick={() => {
                toggleCart()
              }}
            >
              Remove all
            </button>
          </div>
          <div className='h-[200px]'></div>
          <div className='flex justify-between'>
            <p className='uppercase font-bold'>Total</p>
            <p className='uppercase font-bold'>220</p>
          </div>
          <Link
            href={'/checkout'}
            onClick={() => {
              toggleCart()
            }}
            className='bg-btn-orange p-4 text-center mt-6 text-white uppercase text-sm font-semibold tracking-widest z-40'
          >
            Checkout
          </Link>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          transition={{
            type: 'keyframes',
            duration: '0.2',
          }}
          className='absolute  -z-50 m-6 rounded-lg left-0 right-0 px-7 py-9 bg-white shadow-lg flex flex-col justify-center md:w-[500px] md:left-[30%] 2xl:w-[500px] 2xl:left-[57%] 2xl:top-40'
        >
          <IoIosClose
            className='text-2xl self-end mb-4 cursor-pointer'
            onClick={() => {
              toggleCart()
            }}
          />

          <div className='flex justify-between '>
            <h2 className='uppercase font-bold'>Cart</h2>
            <button className='underline'>Remove all</button>
          </div>
          <div className='h-[200px]'></div>
          <div className='flex justify-between'>
            <p className='uppercase font-bold'>Total</p>
            <p className='uppercase font-bold'>220</p>
          </div>
          <Link
            href={'/checkout'}
            className='bg-btn-orange p-4 text-center mt-6 text-white uppercase text-sm font-semibold tracking-widest'
          >
            Checkout
          </Link>
        </motion.div>
      )}
    </div>
  )
}

export default Navbar
