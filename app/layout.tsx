"use client";
import {Manrope} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import StoreProvider from "./store/StoreProvider";
import PersistWrapper from 'next-persist/lib/NextPersistWrapper';
const manrope = Manrope({subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const npConfig = {
        method: 'localStorage',
        allowList: {},
    };

    return (
        <html lang="en">
            <StoreProvider>
                <PersistWrapper wrapperConfig={npConfig} >
                <body className={`${manrope.className} relative overflow-x-hidden `}>
                <Navbar/>
                {children}
                <Footer/>
                </body>
                </PersistWrapper>
            </StoreProvider>
        </html>
    );
}
