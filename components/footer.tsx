import FooterImg from '../public/assets/shared/mobile/image-best-gear.jpg'
import FooterImgTablet from '../public/assets/shared/tablet/image-best-gear.jpg'
import FooterImgDesktop from '../public/assets/shared/desktop/image-best-gear.jpg'
import Image from 'next/image'
import Link from 'next/link'
import {ImFacebook2} from 'react-icons/im'
import {FaTwitter} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='mt-[7.5rem] md:mt-[6rem]'>
            <section
                className='px-6 text-center md:px-10 md:flex  lg:px-40 xl:px-32  2xl:px-80 flex flex-col lg:flex-row-reverse lg:mb-52 lg:flex lg:justify-between'>
                <div className='w-full lg:w-1/2 md:w-full flex lg:justify-end'>
                    <Image
                        src={FooterImg}
                        style={{objectFit: 'contain'}}
                        className='rounded-lg md:hidden h-full w-full'
                        alt='best-gear'
                    />
                    <Image
                        src={FooterImgTablet}
                        style={{objectFit: 'contain'}}
                        className='rounded-lg hidden md:flex lg:hidden h-full w-full'
                        alt='best-gear'
                    />
                    <Image
                        src={FooterImgDesktop}
                        style={{objectFit: 'contain'}}
                        className='rounded-lg hidden md:hidden lg:flex'
                        alt='best-gear'
                    />
                </div>
                <article className='w-full   lg:py-36 md:w-full lg:w-1/2 '>
                    <h2 className='uppercase text-2xl font-bold px-4 mt-10 mb-8 md:text-4xl md:px-20 lg:px-0 lg:text-left'>
                        Bringing you the{' '}
                        <span className='text-orange tracking-wide'>best</span> audio gear
                    </h2>
                    <p className='text-black/60 font-medium lg:text-left'>
                        Located at the heart of New York City, Audiophile is the premier
                        store for high end headphones, earphones, speakers, and audio
                        accessories. We have a large showroom and luxury demonstration rooms
                        available for you to browse and experience a wide range of our
                        products. Stop by our store to meet some of the fantastic people who
                        make Audiophile the best place to buy your portable audio equipment.
                    </p>
                </article>
                <div/>
            </section>

            <div
                className='mt-[7.5rem] md:mt-[6rem] px-6 bg-black text-white flex flex-col justify-center gap-12 items-center md:justify-start md:items-start md:px-10 lg:px-40  xl:px-32 2xl:px-80 lg:flex-row lg:flex-wrap'>
                <div className='w-[100px] h-[5px] bg-orange'></div>
                <div className='lg:flex lg:justify-between w-full 2xl:flex-col 2xl:gap-5 '>
                    <h2 className='text-white font-bold text-2xl text-center md:text-left '>
                        audiophile
                    </h2>
                    <ul className='uppercase text-center flex flex-col gap-4 tracking-widest font-semibold mt-7 md:flex-row md:pt-8 lg:pt-0'>
                        <li>
                            <Link href={'/'} className='hover:text-orange transition-all duration-300'>
                                home
                            </Link>
                        </li>
                        <li>
                            <Link href={'/headphones'} className='hover:text-orange transition-all duration-300'>
                                headphones
                            </Link>
                        </li>
                        <li>
                            <Link href={'/speakers'} className='hover:text-orange transition-all duration-300'>
                                speakers
                            </Link>
                        </li>
                        <li>
                            <Link href={'/earphones'} className='hover:text-orange transition-all duration-300'>
                                earphones
                            </Link>
                        </li>
                    </ul>
                </div>

                <section
                    className='flex flex-col items-center md:flex-wrap 2xl:flex-row 2xl:justify-between md:items-start  2xl:items-end '>
                    <div className='w-[80%] md:w-full 2xl:w-[80%]'>
                        <p className='text-white/40 text-center text-sm font-medium leading-7 tracking-wide md:text-left md:pb-8 lg:w-1/2'>
                            Audiophile is an all in one stop to fulfill your audio needs.
                            {"We're"} a small team of music lovers and sound specialists who
                            are devoted to helping you get the most out of personal audio.
                            Come and visit our demo facility -{"we're"} open 7 days a week.
                        </p>
                        <p className='text-white/40 text-sm md:hidden  lg:hidden text-center '>
                            {' '}
                            Copyright 2021. All Rights Reserved
                        </p>
                    </div>

                    <div className='flex gap-4 mt-7 text-2xl pb-9 lg:items-center lg:pb-0 2xl:mt-0 2xl:mb-8 '>
                        <ImFacebook2 className='hover:text-orange cursor-pointer transition-all duration-300'/>
                        <FaTwitter className='hover:text-orange cursor-pointer transition-all duration-300'/>
                        <FaInstagram className='hover:text-orange cursor-pointer transition-all duration-300'/>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer
