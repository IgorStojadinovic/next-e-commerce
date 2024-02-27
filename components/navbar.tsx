'use client'
import React from 'react'
import { IoMenuSharp, IoCartOutline } from 'react-icons/io5'
import { links } from '@/lib/data'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MobileNavigation } from './secondary-navigation'
import { useMainContextProvider } from '@/context/main-context'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'
import type { RootState } from '../app/store/store'
import Cart from './cart'
import clsx from 'clsx'

const Navbar = (): React.JSX.Element => {
  const { toggleMenu, toggleCart, isOpen, cartIsOpen } =
    useMainContextProvider()
  const cart = useSelector((state: RootState) => state.cart.cart)

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
          <div className='relative'>
            {cart.length > 0 && (
              <span className='absolute right-0 flex h-3 w-3'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75'></span>
                <span className='relative inline-flex rounded-full h-3 w-3 bg-orange '></span>
              </span>
            )}

            <IoCartOutline
              className='h-[2rem] w-[2rem] z-40 text-white hover:text-orange hover:cursor-pointer'
              onClick={() => {
                toggleCart()
              }}
            />
          </div>
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
        <div className='border-b-[0.5px] w-full flex justify-between py-9  z-[999] abolsute'>
          <a
            className='text-2xl font-extrabold text-white z-40 hover:text-orange'
            href='/'
          >
            audiophile
          </a>
          <ul className='text-white uppercase flex justify-between 2xl:gap-10 xl:gap-7 lg:gap-4 tracking-widest font-bold'>
            <li
              className={clsx('hover:text-orange', {
                'text-orange': pathname === '/',
              })}
            >
              <Link href={'/'}>Home</Link>
            </li>
            <li
              className={clsx(
                'hover:text-orange',
                {
                  'text-orange': pathname === '/headphones',
                },
                {
                  'text-orange': pathname === '/products/xx99-2',
                },
                {
                  'text-orange': pathname === '/products/xx99-1',
                },
                {
                  'text-orange': pathname === '/products/xx59',
                }
              )}
            >
              <Link href={'/headphones'}>Headphones</Link>
            </li>
            <li
              className={clsx(
                'hover:text-orange',
                {
                  'text-orange': pathname === '/speakers',
                },
                {
                  'text-orange': pathname === '/products/zx9',
                },
                {
                  'text-orange': pathname === '/products/zx7',
                }
              )}
            >
              <Link href={'/speakers'}>Speakers</Link>
            </li>
            <li
              className={clsx(
                'hover:text-orange',
                {
                  'text-orange': pathname === '/earphones',
                },
                {
                  'text-orange': pathname === '/products/yx1',
                }
              )}
            >
              <Link href={'/earphones'}>Earphones</Link>
            </li>
          </ul>
          <div className='relative'>
            {cart.length > 0 && (
              <span className='absolute right-0 flex h-3 w-3'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75'></span>
                <span className='relative inline-flex rounded-full h-3 w-3 bg-orange '></span>
              </span>
            )}
            <IoCartOutline
              className='h-[2rem] w-[2rem] z-40 text-white hover:text-orange hover:cursor-pointer'
              onClick={() => {
                toggleCart()
              }}
            />
          </div>
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

      {cartIsOpen && <Cart />}
    </div>
  )
}

export default Navbar
