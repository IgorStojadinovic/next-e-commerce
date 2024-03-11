import { StaticImageData } from "next/image";
import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];
export type SecondaryNavLinks = {
  name: string;
  url: string;
  imgpath: StaticImageData;
  height: number;
  width: number;
  toggleMenu: () => void;
};

export type Product = {
  type: string;
  name: string;
  desc: string;
  link: string;
  mobile: StaticImageData;
  tablet: StaticImageData;
  desktop: StaticImageData;
  className: string;
};

export type Data = {
  data: object;
};

type BoxItem = {
  quantity: string;
  name: string;
};

type GalleryImagesObj = {
  id: string;
  photo: StaticImageData;
  className: string;
};

type GalleryObj = {
  name: string;
  images: GalleryImagesObj[];
};

type ProductsSuggestions = {
  name: string;
  link: string;
  thumbImg: StaticImageData;
};

export type IndividualProduct = {
  type: string;
  name: string;
  maindesc: string;
  descOne: string;
  descTwo: string;
  thumbImg: StaticImageData;
  price: number;
  box: BoxItem[];
  gallery: GalleryObj[];
  products: ProductsSuggestions[];
};

export type DispatchItem = {
  name: string;
  total: number;
  defaultPrice: number;
  quantity: number;
  itemKey: string;
};

export type CartItem = {
  name: string;
  total: number;
  defaultPrice: number;
  quantity: number;
  itemKey: string;
};

type MenuStatus = false | true;
type LocalStorage = string;
type Cart = [];

type MainContextProviderProps = {
  children: React.ReactNode;
};

export type CounterState = {
  isOpen: MenuStatus;
  cartIsOpen: MenuStatus;
  cart: CartItem[];
  quantity: number;
};
