'use client'
import Image from 'next/image'
import clsx from 'clsx'
import {Product} from '@/lib/types'
import {usePathname} from 'next/navigation'
import Button from "@/components/button";

const ProductContainer = ({
                              name,
                              type,
                              desc,
                              mobile,
                              link,
                              tablet,
                              desktop,
                              className,
                          }: Product) => {
    const pathname = usePathname()
    return (
        <>
            <Image
                src={mobile}
                alt={name}
                className='rounded-lg  md:hidden mb-8 md:mb-0 lg:hidden xl:hidden 2xl:hidden w-full'
                quality={100}
                loading='lazy'
            />
            <Image
                src={tablet}
                alt={name}
                className='rounded-lg  hidden lg:hidden mb-8  xl:hidden  md:flex '
                quality={100}
                height={560}
                loading='lazy'
            />
            <Image
                src={desktop}
                alt={name}
                className='rounded-lg  md:hidden hidden mb-8 lg:flex xl:flex xl:w-1/2'
                quality={100}
                height={560}
                loading='lazy'
            />
            <div className={`${className}  `}>
        <span className='text-orange  uppercase tracking-[0.5rem] 2xl:pb-4'>
          {type}
        </span>
                {/**'uppercase font-bold text-2xl tracking-wide px-12 2xl:px-0 2xl:text-5xl 2xl:w-1/4 2xl:mb-8' */}
                <h1
                    className={clsx('uppercase text-4xl font-bold', {
                        'uppercase font-bold text-2xl tracking-wide  2xl:px-0 2xl:text-5xl  2xl:mb-8 xl:w-2/3':
                            pathname === '/headphones' ||
                            pathname === '/speakers' ||
                            pathname === '/earphones',
                    })}
                >
                    {name}
                </h1>
                <p className='text-black/60 font-medium md:px-20 xl:px-0 2xl:px-8 '>
                    {desc}
                </p>
                <Button path={link} color={'orange-border'}/>

            </div>
        </>
    )
}

export default ProductContainer
