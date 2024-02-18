'use client'
import React, { FC } from 'react'
import { useParams } from 'next/navigation'
import ProductSceleton from '@/components/product-skeleton-page'
import {
  XX99MARKIIProduct,
  XX99MARKIProduct,
  XX59Product,
  ZX9Product,
  ZX7Product,
  YXProduct,
} from '@/lib/data'

const PageId: FC = () => {
  const param = useParams()

  return (
    <div>
      {param.id === 'xx99-2' && (
        <ProductSceleton
          type={XX99MARKIIProduct.type}
          name={XX99MARKIIProduct.name}
          maindesc={XX99MARKIIProduct.maindesc}
          descOne={XX99MARKIIProduct.descOne}
          descTwo={XX99MARKIIProduct.descTwo}
          thumbImg={XX99MARKIIProduct.thumbImg}
          price={XX99MARKIIProduct.price}
          box={XX99MARKIIProduct.box}
          gallery={XX99MARKIIProduct.gallery}
          products={XX99MARKIIProduct.products}
        />
      )}
      {param.id === 'xx99-1' && (
        <ProductSceleton
          type={XX99MARKIProduct.type}
          name={XX99MARKIProduct.name}
          maindesc={XX99MARKIProduct.maindesc}
          descOne={XX99MARKIProduct.descOne}
          descTwo={XX99MARKIProduct.descTwo}
          thumbImg={XX99MARKIProduct.thumbImg}
          price={XX99MARKIProduct.price}
          box={XX99MARKIProduct.box}
          gallery={XX99MARKIProduct.gallery}
          products={XX99MARKIProduct.products}
        />
      )}
      {param.id === 'xx59' && (
        <ProductSceleton
          type={XX59Product.type}
          name={XX59Product.name}
          maindesc={XX59Product.maindesc}
          descOne={XX59Product.descOne}
          descTwo={XX59Product.descTwo}
          thumbImg={XX59Product.thumbImg}
          price={XX59Product.price}
          box={XX59Product.box}
          gallery={XX59Product.gallery}
          products={XX59Product.products}
        />
      )}
      {param.id === 'zx9' && (
        <ProductSceleton
          type={ZX9Product.type}
          name={ZX9Product.name}
          maindesc={ZX9Product.maindesc}
          descOne={ZX9Product.descOne}
          descTwo={ZX9Product.descTwo}
          thumbImg={ZX9Product.thumbImg}
          price={ZX9Product.price}
          box={ZX9Product.box}
          gallery={ZX9Product.gallery}
          products={ZX9Product.products}
        />
      )}
      {param.id === 'zx7' && (
        <ProductSceleton
          type={ZX7Product.type}
          name={ZX7Product.name}
          maindesc={ZX7Product.maindesc}
          descOne={ZX7Product.descOne}
          descTwo={ZX7Product.descTwo}
          thumbImg={ZX7Product.thumbImg}
          price={ZX7Product.price}
          box={ZX7Product.box}
          gallery={ZX7Product.gallery}
          products={ZX7Product.products}
        />
      )}
      {param.id === 'yx1' && (
        <ProductSceleton
          type={YXProduct.type}
          name={YXProduct.name}
          maindesc={YXProduct.maindesc}
          descOne={YXProduct.descOne}
          descTwo={YXProduct.descTwo}
          thumbImg={YXProduct.thumbImg}
          price={YXProduct.price}
          box={YXProduct.box}
          gallery={YXProduct.gallery}
          products={YXProduct.products}
        />
      )}
    </div>
  )
}

export default PageId
