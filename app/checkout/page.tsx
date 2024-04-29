'use client'
import React, {useState} from 'react'
import {useRouter} from 'next/navigation'
import {useDispatch, useSelector} from 'react-redux'
import {removeAll} from '@/app/store/slice'
import Image from 'next/image'
import {IoCheckmarkSharp} from 'react-icons/io5'
import {RootState} from '../store/store'
import XXII99 from '../../public/assets/cart/image-xx99-mark-two-headphones.jpg'
import XXI99 from '../../public/assets/cart/image-xx99-mark-one-headphones.jpg'
import XX59 from '../../public/assets/cart/image-xx59-headphones.jpg'
import YX1 from '../../public/assets/cart/image-yx1-earphones.jpg'
import ZX9 from '../../public/assets/cart/image-zx9-speaker.jpg'
import ZX7 from '../../public/assets/cart/image-zx7-speaker.jpg'
import clsx from 'clsx'

const Checkout = () => {
    const router = useRouter()
    const [orderCompleted, setOrderCompleted] = useState(false)
    const [expandCart, setExpandCart] = useState(false)
    const cart = useSelector((state: RootState) => state.cart.cart)
    const dispatch = useDispatch()
    const totalPrice = cart
        .map((item) => {
            return item.total
        })
        .reduce((acc, curr) => acc + curr, 0)
    const priceWithTaxes = totalPrice + 50 + 1079
    const handleSubmit = (e: React.SyntheticEvent) => {
        setOrderCompleted(true)
        e.preventDefault()
    }


    return (
        <div className='px-6 2xl:px-80 bg-black/10 '>
            <div
                className={clsx(
                    '',
                    {
                        'bg-black/30 absolute top-0 left-0 right-0 bottom-0 z-50':
                        orderCompleted,
                    },
                    {
                        'bg-black/30 absolute top-0 left-0 right-0 bottom-0 z-50':
                        orderCompleted,
                    }
                )}
            ></div>
            <button
                className='px-6 pt-4 pb-6 text-black/50 font-bold'
                onClick={() => router.back()}
            >
                Go Back
            </button>
            <div className='p-6 relative '>
                <h1 className='uppercase text-[1.75rem] font-bold mb-8'>checkout</h1>
                <p className='uppercase text-sm font-bold text-orange tracking-widest mb-4'>
                    billing detail
                </p>

                <form className=' w-full 2xl:flex  2xl:gap-8 relative'>
                    <div className='2xl:w-1/2 bg-white p-6 rounded-lg'>
                        <section className='flex flex-col gap-6'>
                            <div className='flex flex-col '>
                                <label
                                    htmlFor='name'
                                    className='calpitalize text-[0.75rem] font-bold mb-2'
                                >
                                    Name
                                </label>
                                <input
                                    id='name'
                                    type='text'
                                    name='name'
                                    className='border border-black/10 px-6 py-[1rem] rounded-lg'
                                    placeholder='Alexei Ward'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label
                                    htmlFor='email'
                                    className='calpitalize text-[0.75rem] font-bold mb-2'
                                >
                                    Email Address
                                </label>
                                <input
                                    id='email'
                                    type='email'
                                    name='email'
                                    className='border border-black/10 px-6 py-[1rem] rounded-lg'
                                    placeholder='alexi@gmail.com'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label
                                    htmlFor='phone'
                                    className='calpitalize text-[0.75rem] font-bold mb-2'
                                >
                                    Phone
                                </label>
                                <input
                                    id='phone'
                                    type='text'
                                    name='phone'
                                    className='border border-black/10 px-6 py-[1rem] rounded-lg'
                                    placeholder='+381 63 7476502'
                                />
                            </div>
                        </section>
                        <p className='uppercase text-sm font-bold text-orange tracking-widest mb-4 mt-8'>
                            shipping info
                        </p>
                        <section className='flex flex-col gap-6'>
                            <div className='flex flex-col'>
                                <label className='calpitalize text-[0.75rem] font-bold mb-2'>
                                    Your Address
                                </label>
                                <input
                                    id='addres'
                                    type='text'
                                    name='address'
                                    className='border border-black/10 px-6 py-[1rem] rounded-lg'
                                    placeholder='1137 Williams Avenu'
                                />
                            </div>
                            <section className='flex flex-col gap-6'>
                                <div className='flex flex-col'>
                                    <label
                                        htmlFor='zip'
                                        className='calpitalize text-[0.75rem] font-bold mb-2'
                                    >
                                        ZIP Code
                                    </label>
                                    <input
                                        id='zip'
                                        type='text'
                                        name='zip'
                                        className='border border-black/10 px-6 py-[1rem] rounded-lg'
                                        placeholder='21460'
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label
                                        htmlFor='city'
                                        className='calpitalize text-[0.75rem] font-bold mb-2'
                                    >
                                        City
                                    </label>
                                    <input
                                        id='city'
                                        type='text'
                                        name='city'
                                        className='border border-black/10 px-6 py-[1rem] rounded-lg'
                                        placeholder='New York'
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label
                                        htmlFor='country'
                                        className='calpitalize text-[0.75rem] font-bold mb-2'
                                    >
                                        Country
                                    </label>
                                    <input
                                        id='country'
                                        type='text'
                                        name='country'
                                        className='border border-black/10 px-6 py-[1rem] rounded-lg'
                                        placeholder='United States'
                                    />
                                </div>
                                <p className='uppercase text-sm font-bold text-orange tracking-widest mb-4 mt-8'>
                                    payment details
                                </p>
                                <div>
                                    <div className='flex flex-col'>
                                        <label
                                            htmlFor='country'
                                            className='calpitalize text-[0.75rem] font-bold mb-4'
                                        >
                                            Payment Method
                                        </label>
                                        <div className='flex flex-col gap-6'>
                                            <div
                                                className='flex items-center gap-6 p-5 rounded-lg border border-black/10'>
                                                <input
                                                    id='e-Money'
                                                    type='radio'
                                                    name='payment-method'
                                                    placeholder='e-Money'
                                                />
                                                <span>e-Money</span>
                                            </div>
                                            <div
                                                className='flex items-center gap-6 p-5 rounded-lg border border-black/10'>
                                                <input
                                                    id='cash-od'
                                                    type='radio'
                                                    name='payment-method'
                                                    placeholder='cash-od'
                                                    className=''
                                                />
                                                <span> Cash on Delivery</span>
                                            </div>
                                        </div>
                                    </div>
                                    <section className='flex flex-col gap-6 mt-8'>
                                        <div className='flex flex-col'>
                                            <label
                                                htmlFor='e-money-number'
                                                className='calpitalize text-[0.75rem] font-bold mb-2'
                                            >
                                                e-Money Number
                                            </label>
                                            <input
                                                id='e-money-number'
                                                type='text'
                                                name='e-money-number'
                                                className='border border-black/10 px-6 py-[1rem] rounded-lg'
                                                placeholder='238521993'
                                            />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label
                                                htmlFor='e-money-pin'
                                                className='calpitalize text-[0.75rem] font-bold mb-2'
                                            >
                                                e-Money PIN
                                            </label>
                                            <input
                                                id='country'
                                                type='text'
                                                name='e-money-pin'
                                                className='border border-black/10 px-6 py-[1rem] rounded-lg'
                                                placeholder='United States'
                                            />
                                        </div>
                                    </section>
                                </div>
                            </section>
                        </section>
                    </div>

                    <section className=' mt-8 2xl:w-1/2 2xl:h-1/2 p-6 rounded-lg bg-white 2xl:mt-0'>
                        <p className='uppercase text-[1.75rem] font-bold mb-8'>Summary</p>
                        <div className='flex flex-col gap-4   h-full overflow-hidden my-6'>
                            {cart.map((item) => {
                                return (
                                    <div
                                        key={item.name}
                                        className='flex justify-between items-center'
                                    >
                                        <div className='flex justify-between items-center h-full'>
                                            {item.name === 'xx99 mark II' && (
                                                <Image
                                                    src={XXII99}
                                                    alt='thumb'
                                                    className='rounded-lg'
                                                    height={70}
                                                />
                                            )}
                                            {item.name === 'xx99 mark I' && (
                                                <Image
                                                    src={XXI99}
                                                    alt='thumb'
                                                    className='rounded-lg'
                                                    height={70}
                                                />
                                            )}
                                            {item.name === 'xx59' && (
                                                <Image
                                                    src={XX59}
                                                    alt='thumb'
                                                    className='rounded-lg'
                                                    height={70}
                                                />
                                            )}
                                            {item.name === 'zx7' && (
                                                <Image
                                                    src={ZX7}
                                                    alt='thumb'
                                                    className='rounded-lg'
                                                    height={70}
                                                />
                                            )}
                                            {item.name === 'zx9' && (
                                                <Image
                                                    src={ZX9}
                                                    alt='thumb'
                                                    className='rounded-lg'
                                                    height={70}
                                                />
                                            )}
                                            {item.name === 'yx1' && (
                                                <Image
                                                    src={YX1}
                                                    alt='thumb'
                                                    className='rounded-lg'
                                                    height={70}
                                                />
                                            )}
                                            <div className='w-1/2 lg:w-1/4'>
                                                <p className='uppercase font-bold text-sm '>
                                                    {item.name}
                                                </p>
                                                <p className='uppercase font-bold text-black/50'>
                                                    ${item.defaultPrice}
                                                </p>
                                            </div>
                                        </div>
                                        <span>x{item.quantity}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='flex flex-col gap-2 mt-8'>
                            <div className='flex justify-between'>
                                <p className='uppercase font-extrabold text-lg text-black/40'>
                                    Total
                                </p>
                                <span className='uppercase font-extrabold text-lg text-black'>
                  $ {totalPrice}
                </span>
                            </div>
                            <div className='flex justify-between'>
                                <p className='uppercase font-extrabold text-lg text-black/40'>
                                    Shipping
                                </p>
                                <span className='uppercase font-extrabold text-lg text-black'>
                  $ 50
                </span>
                            </div>
                            <div className='flex justify-between'>
                                <p className='uppercase font-extrabold text-lg text-black/40'>
                                    Vat (included)
                                </p>
                                <span className='uppercase font-extrabold text-lg text-black'>
                  $ 1,079
                </span>
                            </div>
                            <div className='flex justify-between'>
                                <p className='uppercase font-extrabold text-lg text-black/40'>
                                    GRAND TOTAL
                                </p>
                                <span className='uppercase font-extrabold text-lg text-black'>
                  $ {priceWithTaxes}
                </span>
                            </div>
                            <button
                                className='bg-btn-orange p-4 mt-8 text-white uppercase text-sm font-semibold tracking-widest'
                                onClick={(e) => {
                                    handleSubmit(e)
                                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                                }}
                            >
                                Continue & Pay
                            </button>
                        </div>
                    </section>
                </form>
                {orderCompleted && (

                    <section
                        className='flex-col gap-6 p-8 absolute top-0  right-0  mx-6 shadow-xl z-[9999] bg-white h-auto rounded-lg'>

                        <div
                            className='bg-orange rounded-full h-16 w-16  flex justify-center items-center text-white text-3xl'>
                            <IoCheckmarkSharp/>
                        </div>
                        <h2 className='font-bold uppercase text-2xl pr-24 tracking-wide my-4'>
                            Thank you for your order
                        </h2>
                        <p className='text-black/60 font-medium mb-3'>
                            You will receive an email confirmation shortly.
                        </p>

                        <>
                            <div
                                className={clsx(
                                    '',
                                    {
                                        'flex flex-col gap-4   h-[250px]  overflow-hidden my-6':
                                        expandCart,
                                    },
                                    {
                                        'flex flex-col gap-4   h-full overflow-hidden my-6 ':
                                            !expandCart,
                                    }
                                )}
                            >
                                {cart.map((item) => {
                                    return (
                                        <div
                                            key={item.name}
                                            className='flex justify-between items-center'
                                        >
                                            <div className='flex justify-between items-center h-full'>
                                                {item.name === 'xx99 mark II' && (
                                                    <Image
                                                        src={XXII99}
                                                        alt='thumb'
                                                        className='rounded-lg'
                                                        height={70}
                                                    />
                                                )}
                                                {item.name === 'xx99 mark I' && (
                                                    <Image
                                                        src={XXI99}
                                                        alt='thumb'
                                                        className='rounded-lg'
                                                        height={70}
                                                    />
                                                )}
                                                {item.name === 'xx59' && (
                                                    <Image
                                                        src={XX59}
                                                        alt='thumb'
                                                        className='rounded-lg'
                                                        height={70}
                                                    />
                                                )}
                                                {item.name === 'zx7' && (
                                                    <Image
                                                        src={ZX7}
                                                        alt='thumb'
                                                        className='rounded-lg'
                                                        height={70}
                                                    />
                                                )}
                                                {item.name === 'zx9' && (
                                                    <Image
                                                        src={ZX9}
                                                        alt='thumb'
                                                        className='rounded-lg'
                                                        height={70}
                                                    />
                                                )}
                                                {item.name === 'yx1' && (
                                                    <Image
                                                        src={YX1}
                                                        alt='thumb'
                                                        className='rounded-lg'
                                                        height={70}
                                                    />
                                                )}
                                                <div className='w-1/2 lg:w-1/4'>
                                                    <p className='uppercase font-bold text-sm '>
                                                        {item.name}
                                                    </p>
                                                    <p className='uppercase font-bold text-black/50'>
                                                        ${item.defaultPrice}
                                                    </p>
                                                </div>
                                            </div>
                                            <span>x{item.quantity}</span>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className='h-[1px] w-full bg-black/10 mt-4'></div>
                            {expandCart && cart.length > 3 && (
                                <button
                                    onClick={() => {
                                        setExpandCart((prev) => !prev)
                                    }}
                                    className='flex w-full items-center justify-center  p-5 text-black/50 text-sm font-bold '
                                >
                                    and {cart.length > 3 && cart.length - 3} more{' '}
                                </button>
                            )}

                            {expandCart && cart.length > 3 && (
                                <button
                                    onClick={() => {
                                        setExpandCart((prev) => !prev)
                                    }}
                                    className='flex w-full items-center justify-center  p-5 text-black/50 text-sm font-bold '
                                >
                                    show less
                                </button>
                            )}
                            <div className='bg-black text-white/60 uppercase pt-4 px-6 pb-6 rounded-b-lg'>
                                <p className='mb-4 font-light'>Grand Total</p>
                                <span className='uppercase text-2xl text-white'>
                  ${totalPrice}
                </span>
                            </div>
                            <button
                                className='bg-btn-orange w-full p-4 mt-8 text-white uppercase text-sm font-semibold tracking-widest'
                                onClick={() => {
                                    dispatch(removeAll())
                                    router.push('/')
                                }}
                            >
                                Back to home
                            </button>
                        </>

                    </section>

                )}
            </div>
        </div>
    )
}

export default Checkout
