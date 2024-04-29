import React from 'react'
import Link from "next/link";

interface Props {
    path: string;
    color: string;
}

const Button: React.FC<Props> = ({path, color}) => {
    return (
        <>
            {color === 'black' &&
                <Link
                    href={path}
                    className="w-40 h-12 flex items-center justify-center z-10 uppercase font-semibold text-sm  text-white bg-black  md:mt-7 transition-all duration-300 hover:bg-white hover:text-black"
                >
                    See product
                </Link>}
            {color === 'transparent' &&
                <Link
                    href={path}
                    className="w-40 h-12 flex items-center justify-center z-10 uppercase font-semibold text-sm  bg-transparent border border-black  md:mt-7 transition-all duration-300 hover:bg-black hover:text-white"
                >
                    See product
                </Link>}
            {color === 'orange' &&
                <Link
                    href={path}
                    className="w-40 h-12 flex items-center justify-center z-10 uppercase font-semibold text-sm  text-white bg-orange border border-orange  md:mt-7 transition-all duration-300 hover:bg-black"
                >
                    See product
                </Link>}
            {color === 'orange-border' &&
                <Link
                    href={path}
                    className="w-40 h-12 flex items-center justify-center z-10 uppercase font-semibold text-sm  text-white bg-orange border border-orange  md:mt-7 transition-all duration-300 hover:bg-transparent hover:text-orange"
                >
                    See product
                </Link>}

        </>
    );
}
export default Button
