import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuantity,
  removeQuantity,
  removeAll,
  toggleCart,
} from "@/app/store/slice";
import { useMainContextProvider } from "@/context/main-context";
import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import XXII99 from "../public/assets/cart/image-xx99-mark-two-headphones.jpg";
import XXI99 from "../public/assets/cart/image-xx99-mark-one-headphones.jpg";
import XX59 from "../public/assets/cart/image-xx59-headphones.jpg";
import YX1 from "../public/assets/cart/image-yx1-earphones.jpg";
import ZX9 from "../public/assets/cart/image-zx9-speaker.jpg";
import ZX7 from "../public/assets/cart/image-zx7-speaker.jpg";

import { DispatchItem } from "@/lib/types";
import type { RootState } from "../app/store/store";
import clsx from "clsx";

const Cart = () => {
  //const { toggleCart } = useMainContextProvider();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const cartIsOpen = useSelector((state: RootState) => state.cart.cartIsOpen);
  const [expandCart, setExpandCart] = useState(false);
  const dispatch = useDispatch();

  const updateItem = (currentItem: DispatchItem) => {
    const item = {
      name: currentItem.name,
      total: currentItem.total,
      defaultPrice: currentItem.defaultPrice,
      quantity: currentItem.quantity,
      itemKey: currentItem.name,
    };

    dispatch(addQuantity(item));
  };

  const removeItem = (currentItem: DispatchItem) => {
    const item = {
      name: currentItem.name,
      total: currentItem.total,
      defaultPrice: currentItem.defaultPrice,
      quantity: currentItem.quantity,
      itemKey: currentItem.name,
    };

    dispatch(removeQuantity(item));
  };
  return (
    <>
      {cartIsOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "keyframes",
            duration: "0.2",
          }}
          className="absolute z-[999] m-6 rounded-lg left-0 right-0 px-7 py-9 bg-white shadow-lg flex flex-col justify-center md:w-[500px] md:left-[30%] 2xl:w-[500px] 2xl:left-[57%] 2xl:top-40"
        >
          {" "}
          <IoIosClose
            className="text-2xl self-end mb-4 cursor-pointer"
            onClick={() => {
              dispatch(toggleCart());
            }}
          />
          <div className="flex justify-between ">
            <h2 className="uppercase font-bold">Cart</h2>
            <button
              className="underline"
              onClick={() => {
                dispatch(removeAll());
                dispatch(toggleCart());
              }}
            >
              Remove all
            </button>
          </div>
          <div
            className={clsx(
              "",
              {
                "flex flex-col gap-4   h-auto  overflow-hidden my-6":
                  !expandCart,
              },
              {
                "flex flex-col gap-4   h-auto overflow-hidden my-6": expandCart,
              }
            )}
          >
            {cart.length > 0 &&
              cart.map((item) => {
                return (
                  <div key={item.name}>
                    <div className="flex justify-between items-center h-full my-4">
                      {item.name === "xx99 mark II" && (
                        <Image
                          src={XXII99}
                          alt="thumb"
                          className="rounded-lg"
                          height={70}
                        />
                      )}
                      {item.name === "xx99 mark I" && (
                        <Image
                          src={XXI99}
                          alt="thumb"
                          className="rounded-lg"
                          height={70}
                        />
                      )}
                      {item.name === "xx59" && (
                        <Image
                          src={XX59}
                          alt="thumb"
                          className="rounded-lg"
                          height={70}
                        />
                      )}
                      {item.name === "zx7" && (
                        <Image
                          src={ZX7}
                          alt="thumb"
                          className="rounded-lg"
                          height={70}
                        />
                      )}
                      {item.name === "zx9" && (
                        <Image
                          src={ZX9}
                          alt="thumb"
                          className="rounded-lg"
                          height={70}
                        />
                      )}
                      {item.name === "yx1" && (
                        <Image
                          src={YX1}
                          alt="thumb"
                          className="rounded-lg"
                          height={70}
                        />
                      )}
                      <div className="w-1/4">
                        <p className="uppercase font-bold">{item.name}</p>
                        <p className="uppercase font-bold text-black/50">
                          ${item.defaultPrice}
                        </p>
                      </div>

                      <div className="flex items-center bg-light-gray/10 text-center justify-between w-1/4  uppercase text-sm font-semibold tracking-widest ">
                        <button
                          onClick={() => {
                            removeItem(item);
                          }}
                          className="text-light-gray text-[1.2rem] w-2/5 h-full hover:bg-light-gray/15 "
                        >
                          -
                        </button>
                        <span className=" w-2/5">{item.quantity}</span>
                        <button
                          onClick={() => {
                            updateItem(item);
                          }}
                          className="text-light-gray text-[1.2rem] w-2/5 h-full hover:bg-light-gray/15 "
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {expandCart && cart.length > 0 && (
            <>
              <hr></hr>
              <button
                className="hover:text-orange mt-4 hover:cursor-pointer text-black/50 text-sm font-bold text-center"
                onClick={() => {
                  setExpandCart((prev) => !prev);
                }}
              >
                show less
              </button>
            </>
          )}
          {!expandCart && cart.length > 3 && (
            <>
              <hr></hr>
              <button
                className="hover:text-orange mt-4 hover:cursor-pointer text-black/50 text-sm font-bold text-center"
                onClick={() => {
                  setExpandCart((prev) => !prev);
                }}
              >
                and {cart.length > 3 && cart.length - 3} more item(s)
              </button>
            </>
          )}
          <div className="flex justify-between">
            <p className="uppercase font-bold">Total</p>
            <p className="uppercase font-bold">
              {cart.length > 0
                ? cart
                    .map((item) => {
                      return item.total;
                    })
                    .reduce((acc, curr) => acc + curr, 0)
                    .toLocaleString()
                : 0}
            </p>
          </div>
          {cart.length > 0 ? (
            <Link
              href={"/checkout"}
              onClick={() => {
                toggleCart();
              }}
              className="bg-btn-orange hover:bg-btn-orange/80 p-4 text-center mt-6 text-white uppercase text-sm font-semibold tracking-widest z-40"
            >
              Checkout
            </Link>
          ) : (
            <Link
              href={"#"}
              onClick={() => {
                toggleCart();
              }}
              className="bg-btn-orange/50 p-4 text-center mt-6 text-white uppercase text-sm font-semibold tracking-widest z-40 cursor-default"
            >
              Checkout
            </Link>
          )}
        </motion.div>
      )}
    </>
  );
};

export default Cart;
