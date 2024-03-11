"use client";
import React, { useEffect, useState, createContext, useContext } from "react";

type MenuStatus = false | true;
type LocalStorage = string;
type Cart = [];

type MainContextProviderProps = {
  children: React.ReactNode;
};

type MainContextType = {
  isOpen: MenuStatus;
  cartIsOpen: MenuStatus;
  cart: Cart;
  toggleMenu: () => void;
  toggleCart: () => void;
};

const MainContext = createContext<MainContextType | null>(null);

export default function MainContextProvider({
  children,
}: MainContextProviderProps) {
  const [isOpen, setIsOpen] = useState<MenuStatus>(false);
  const [cartIsOpen, setCartIsOpen] = useState<MenuStatus>(false);
  const [cart] = useState<Cart>([]);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen((prev) => !prev);
      window.localStorage.setItem("menuStatus", "closed");
    } else {
      setIsOpen((prev) => !prev);
      window.localStorage.setItem("menuStatus", "open");
    }
  };

  const toggleCart = () => {
    if (cartIsOpen) {
      setCartIsOpen((prev) => !prev);
    } else {
      setCartIsOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem(
      "menuStatus"
    ) as LocalStorage | null;

    if (!localTheme) {
      window.localStorage.setItem("menuStatus", "closed");
    }

    if (localTheme === "closed") {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, []);

  return (
    <MainContext.Provider
      value={{
        isOpen,
        cartIsOpen,
        cart,
        toggleMenu,
        toggleCart,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export function useMainContextProvider() {
  const context = useContext(MainContext);

  if (context === null) {
    throw new Error(
      "useMainContextProvider must be used within a MainContextProvider"
    );
  }

  return context;
}
