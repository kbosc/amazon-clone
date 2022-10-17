import React from 'react'
import Product from './Product'
import Image from 'next/image'
import banner from "../assets/banner-md.jpg"

export default function ProductFeed({ products }) {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
        {products.slice(0,6).map(({id, title, price, description, category, image}) => (
            <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            />
        ))}

        <div className='md:col-span-full'>
        <Image width='100%' height='25%' layout="responsive" src={banner} alt="banner" />
        </div>

        <div className='md:col-span-2 lg:hidden '>
        {products.slice(6,7).map(({id, title, price, description, category, image}) => (
            <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            />
        ))}
        </div>

        {products.slice(7,products.length).map(({id, title, price, description, category, image}) => (
            <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            />
        ))}
    </div>
  )
}
