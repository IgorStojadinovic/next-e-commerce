"use client";
import {Manrope} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MainContextProvider from "@/context/main-context";
import StoreProvider from "./store/StoreProvider";

const manrope = Manrope({subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <MainContextProvider>
            <StoreProvider >
                <body className={`${manrope.className} relative overflow-x-hidden `}>

                        <Navbar/>



                    {children}
                    <Footer/>

                </body>
            </StoreProvider>
        </MainContextProvider>
        </html>
    );
}
