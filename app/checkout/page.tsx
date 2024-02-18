'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import CartThumb from '@/public/assets/cart/image-xx99-mark-one-headphones.jpg'
import Image from 'next/image'
import { IoCheckmarkSharp } from 'react-icons/io5'

const Checkout = () => {
  const router = useRouter()

  return (
    <div className='px-6 2xl:px-80'>
      <button
        className='px-6 pt-4 pb-6 text-black/50 font-bold'
        onClick={() => router.back()}
      >
        Go Back
      </button>
      <div className='p-6'>
        <h1 className='uppercase text-[1.75rem] font-bold mb-8'>checkout</h1>
        <p className='uppercase text-sm font-bold text-orange tracking-widest mb-4'>
          billing detail
        </p>

        <form>
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
                    <div className='flex items-center gap-6 p-5 rounded-lg border border-black/10'>
                      <input
                        id='e-Money'
                        type='radio'
                        name='payment-method'
                        placeholder='e-Money'
                      />
                      <span>e-Money</span>
                    </div>
                    <div className='flex items-center gap-6 p-5 rounded-lg border border-black/10'>
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

          <section className=' mt-8'>
            <p className='uppercase text-[1.75rem] font-bold mb-8'>Summary</p>
            <div className='flex flex-col gap-6'>
              <div className='flex justify-between'>
                <div className='flex gap-4'>
                  <Image
                    src={CartThumb}
                    alt='cart-thumb'
                    height={64}
                    width={64}
                    className='rounded-lg'
                  />
                  <div>
                    <p className='font-extrabold uppercase text-sm'>
                      XX99 MK II
                    </p>
                    <p className='font-extrabold uppercase text-sm text-black/40'>
                      $ 2.999
                    </p>
                  </div>
                </div>

                <span className='uppercase font-extrabold text-sm text-black/40'>
                  x1
                </span>
              </div>
              <div className='flex justify-between'>
                <div className='flex gap-4'>
                  <Image
                    src={CartThumb}
                    alt='cart-thumb'
                    height={64}
                    width={64}
                    className='rounded-lg'
                  />
                  <div>
                    <p className='font-extrabold uppercase text-sm'>
                      XX99 MK II
                    </p>
                    <p className='font-extrabold uppercase text-sm text-black/40'>
                      $ 2.999
                    </p>
                  </div>
                </div>

                <span className='uppercase font-extrabold text-sm text-black/40'>
                  x1
                </span>
              </div>
            </div>
            <div className='flex flex-col gap-2 mt-8'>
              <div className='flex justify-between'>
                <p className='uppercase font-extrabold text-lg text-black/40'>
                  Total
                </p>
                <span className='uppercase font-extrabold text-lg text-black'>
                  $5,396
                </span>
              </div>
              <div className='flex justify-between'>
                <p className='uppercase font-extrabold text-lg text-black/40'>
                  Shipping
                </p>
                <span className='uppercase font-extrabold text-lg text-black'>
                  $50
                </span>
              </div>
              <div className='flex justify-between'>
                <p className='uppercase font-extrabold text-lg text-black/40'>
                  Vat (included)
                </p>
                <span className='uppercase font-extrabold text-lg text-black'>
                  $1,079
                </span>
              </div>
              <div className='flex justify-between'>
                <p className='uppercase font-extrabold text-lg text-black/40'>
                  GRAND TOTAL
                </p>
                <span className='uppercase font-extrabold text-lg text-black'>
                  $5,446
                </span>
              </div>
              <button className='bg-btn-orange p-4 mt-8 text-white uppercase text-sm font-semibold tracking-widest'>
                Continue & Pay
              </button>
            </div>
          </section>
        </form>
      </div>
      <section className='flex-col gap-6 p-8 absolute top-[10rem] shadow-xl z-40 hidden'>
        <div className='bg-orange rounded-full h-16 w-16 flex justify-center items-center text-white text-3xl'>
          <IoCheckmarkSharp />
        </div>
        <h2 className='font-bold uppercase text-2xl pr-24 tracking-wide'>
          Thank you for your order
        </h2>
        <p className='text-black/60 font-medium'>
          You will receive an email confirmation shortly.
        </p>
        <div>
          <section className='flex flex-col  bg-[#979797]/10'>
            <div className='flex flex-col p-6 rounded-lg'>
              <div className='flex items-start justify-between gap-4 '>
                <div className='flex'>
                  <Image
                    src={CartThumb}
                    alt='cart-thumb'
                    height={50}
                    width={60}
                    className='rounded-lg '
                  />
                  <div>
                    <p className='font-extrabold uppercase text-lg'>
                      XX99 MK II
                    </p>
                    <p className='font-extrabold uppercase text-lg text-black/40'>
                      $ 2.999
                    </p>
                  </div>
                </div>

                <span className='uppercase font-extrabold text-lg text-black/40'>
                  x1
                </span>
              </div>

              <div className='h-[1px] w-full bg-black/10 my-4'></div>
              <p className='text-black/50 text-sm font-bold text-center'>
                and 2 other items(s)
              </p>
            </div>
          </section>

          <div className='bg-black text-white/60 uppercase pt-4 px-6 pb-6 rounded-b-lg'>
            <p className='mb-4 font-light'>Grand Total</p>
            <span className='uppercase text-2xl text-white'>$ 5,446</span>
          </div>
          <button
            className='bg-btn-orange w-full p-4 mt-8 text-white uppercase text-sm font-semibold tracking-widest'
            onClick={() => router.push('/')}
          >
            Back to home
          </button>
        </div>
      </section>
    </div>
  )
}

export default Checkout
