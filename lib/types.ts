import { StaticImageData } from 'next/image';
import { links } from './data';

export type SectionName = (typeof links)[number]['name'];
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
  id:string;
  photo: StaticImageData;
  className: string;
}

type GalleryObj = {
  name: string;
  images: GalleryImagesObj[]
   

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
  price: string;
  box: BoxItem[];
  gallery: GalleryObj[];
  products: ProductsSuggestions[];
 
};
