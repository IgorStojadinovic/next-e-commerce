"use client";
import React from "react";
import ProductContainer from "@/components/product-container";
import clsx from "clsx";
import {EarphonesPage} from "@/lib/data";
import {SecondaryNavigation} from "@/components/secondary-navigation";
import {useRouter} from "next/navigation";
import {FaGithub} from "react-icons/fa6";
import {useSelector} from "react-redux";
import type {RootState} from "../../../app/store/store";


const Earphones = () => {
    const isOpen = useSelector((state: RootState) => state.cart.isOpen);
    const cartIsOpen = useSelector((state: RootState) => state.cart.cartIsOpen);
    const router = useRouter();
    return (
        <>
            <a
                className=" text-orange fixed z-[9999] bottom-0 text-4xl  right-0 m-5 cursor-pointer transition-all hover:text-6xl text-center"
                target="_blank"
                href="https://github.com/IgorStojadinovic/next-e-commerce"
            >
                <FaGithub/>
            </a>
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
            <div className="mb-[7.5rem]  relative">
                <p className="bg-black text-white p-6 text-center uppercase font-bold tracking-widest 2xl:pb-9 border-none 2xl:text-3xl ">
                    Earphones
                </p>
                <button
                    className="px-6 pt-4 pb-6 text-black/50 font-bold 2xl:px-64 2xl:hidden"
                    onClick={() => router.push("/")}
                >
                    Go Back
                </button>
                {EarphonesPage.map((product) => (
                    <div
                        key={product.name}
                        className="flex flex-wrap  px-6 xl:flex-row lg:flex-nowrap xl:even:flex-row-reverse xl:px-32 2xl:px-80 lg:mt-16 xl:h-[560px] xl:gap-32  2xl:gap-60 "
                    >
                        <ProductContainer
                            name={product.name}
                            type={product.type}
                            desc={product.desc}
                            mobile={product.mobile}
                            tablet={product.tablet}
                            desktop={product.desktop}
                            link={product.link}
                            className={product.className}
                        />
                    </div>
                ))}
            </div>
            <div className="px-6 2xl:px-80 2xl:mb-40">
                <SecondaryNavigation/>
            </div>
        </>
    );
};

export default Earphones;
