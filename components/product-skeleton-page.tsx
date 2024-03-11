"use client";
import React from "react";
import { IndividualProduct } from "../lib/types";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { SecondaryNavigation } from "./secondary-navigation";
import { FaGithub } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, addItemToCart } from "../app/store/slice";
import { RootState } from "../app/store/store";
import { DispatchItem } from "../lib/types";
const ProductSceleton = ({
  type,
  name,
  maindesc,
  descOne,
  descTwo,
  thumbImg,
  price,
  box,
  gallery,
  products,
}: IndividualProduct) => {
  const router = useRouter();

  const quantity = useSelector((state: RootState) => state.cart.quantity);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const isOpen = useSelector((state: RootState) => state.cart.isOpen);
  const cartIsOpen = useSelector((state: RootState) => state.cart.cartIsOpen);
  const dispatch = useDispatch();

  const addItem = (quantity: number) => {
    if (quantity) {
      const item: DispatchItem = {
        name: name,
        total: price * quantity,
        defaultPrice: price,
        quantity: quantity,
        itemKey: name,
      };

      dispatch(addItemToCart(item));
    }
  };

  return (
    <>
      <a
        className=" text-orange fixed z-[9999] bottom-0 text-4xl  right-0 m-5 cursor-pointer transition-all hover:text-6xl text-center"
        target="_blank"
        href="https://github.com/IgorStojadinovic/next-e-commerce"
      >
        <FaGithub />
      </a>
      <div></div>

      <div
        className={clsx(
          "",
          {
            "bg-black/30 absolute top-0 left-0 right-0 bottom-0 z-30":
              cartIsOpen,
          },
          {
            "bg-black/30 absolute top-0 left-0 right-0 bottom-0 z-30 ": isOpen,
          }
        )}
      ></div>

      <div className="2xl:px-80  md:px-24 px-6">
        <button
          className=" pt-4 pb-6 text-black/50 font-bold"
          onClick={() => router.back()}
        >
          Go Back
        </button>
        {/** */}
        <section className="flex flex-col justify-center items-center md:flex-row md:gap-5 lg:flex-row 2xl:gap-32 2xl:justify-center 2xl:items-center lg:gap-28 xl:gap-36">
          <picture className="rounded-lg mb-8 lg:w-1/2 md:mb-0 md:w-1/2 w-full 2xl:h-[560px] ">
            <Image src={thumbImg} alt={name} quality={100} loading="lazy" />
          </picture>

          <div className="flex flex-col  gap-6  lg:w-1/2 2xl:gap-0 md:w-1/2">
            <span className="text-orange  uppercase tracking-[0.5rem] ">
              {type}
            </span>
            <h1 className="uppercase font-bold text-2xl tracking-wide pr-6  2xl:text-5xl 2xl:mt-4 ">
              {name}
            </h1>
            <p className="text-black/60 font-medium 2xl:2xl:my-8">{maindesc}</p>
            <p className="mb-10 font-bold">${price}</p>
            <div className="flex justify-between gap-4">
              <div className="flex items-center bg-light-gray/10 text-center justify-between  w-full uppercase text-sm font-semibold tracking-widest">
                <button
                  onClick={() => {
                    dispatch(decrement());
                  }}
                  className="text-light-gray text-[1.2rem] w-2/5 h-full hover:bg-light-gray/15"
                >
                  -
                </button>
                <span className=" w-2/5">{quantity}</span>
                <button
                  onClick={() => {
                    dispatch(increment());
                  }}
                  className="text-light-gray text-[1.2rem] w-2/5 h-full hover:bg-light-gray/15"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => {
                  addItem(quantity);
                }}
                className="bg-btn-orange text-white w-full p-4  uppercase text-sm font-semibold tracking-widest hover:bg-white border border-orange border-1 hover:text-orange"
              >
                Add to cart
              </button>
            </div>
          </div>
        </section>

        <div className="flex justify-between gap-40 mt-20 mb-6 xl:items-end lg:items-end 2xl:mt-32">
          <h2 className="uppercase font-bold text-2xl tracking-wide mt-20 mb-6 2xl:m-0 2xl:text-4xl">
            Features
          </h2>
          <h2 className="capitalize font-bold text-2xl tracking-wide 2xl:text-4xl hidden lg:flex lg:mb-6 2xl:mb-0">
            In the box
          </h2>
        </div>

        <div>
          <section className="flex flex-col justify-between items-center lg:flex-row lg:justify-between">
            <div className="lg:w-1/2">
              <p className="text-black/60 font-medium mb-6">{descOne}</p>
              <p className="text-black/60 font-medium">{descTwo}</p>
            </div>
            <section className="w-full lg:w-1/2 lg:text-right">
              <h2 className="capitalize font-bold text-2xl tracking-wide mt-20 mb-6 2xl:m-0 2xl:hidden xl:hidden lg:hidden">
                In the box
              </h2>
              <div className="flex flex-col gap-2 ">
                {box.map((item) => (
                  <p className="capitalize" key={item.name}>
                    <span className="text-orange pr-6">{item.quantity}</span>
                    {item.name}
                  </p>
                ))}
              </div>
            </section>
          </section>
          <section className="mt-20 grid md:grid-rows-2 md:grid-flow-col     gap-8 2xl:h-[600px] ">
            {gallery[2].images.map((image) => (
              <picture
                className="rounded-lg last:row-span-2 w-full h-full"
                key={image.id}
              >
                <Image
                  src={image.photo}
                  quality={100}
                  alt={image.id}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  className="rounded-lg "
                />
              </picture>
            ))}
          </section>

          <section>
            <h2 className="uppercase font-bold text-center text-2xl tracking-wide mt-20 mb-6">
              you may also like
            </h2>

            <div className="2xl:flex items-center gap-4 mb-32">
              {products.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center gap-6 even:my-14 "
                >
                  <Image src={item.thumbImg} alt={item.name} />
                  <p className="uppercase font-bold text-2xl">{item.name}</p>
                  <Link
                    href={item.link}
                    className="bg-btn-orange p-4 w-1/2 text-white text-center uppercase text-sm font-semibold tracking-widest hover:bg-white border border-orange border-1 hover:text-orange "
                  >
                    See product
                  </Link>
                </div>
              ))}
            </div>
          </section>
          <SecondaryNavigation />
        </div>
      </div>
    </>
  );
};

export default ProductSceleton;
