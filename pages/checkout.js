import React from 'react'
import Header from '../src/components/Header'
import Image from 'next/image'
import checkoutBanner from "../src/assets/Prime-day-banner.png"
import { useSelector } from 'react-redux'
import { selectItems } from '../src/app/slices/basketSlice'
import CheckoutProduct from '../src/components/CheckoutProduct'

export default function Checkout() {
    const items = useSelector(selectItems)

  return (
    <div className="bg-gray-100">
        <Header />
        <main className='lg:flex max-w-screen-2xl mx-auto'>
            {/* Left */}
            <div className='flex-grow m-5 shadow-sm'>
                <Image 
                    src={checkoutBanner}
                    width={1020}
                    height={250}
                    objectFit="contain"
                />
                <div className='flex flex-col p-5 space-y-10 bg-white'>
                    <h1 className='text-3xl border-b pb-4'>
                        {items.length === 0 
                            ? "Your Amazon Basket is empty."
                            : "Shopping Basket"
                        }
                    </h1>
                    {items.map((item, i) => (
                        <CheckoutProduct
                            key={i}
                            id={item.id}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                            image={item.image}
                            hasPrime={item.hasPrime}
                        />
                    ))}
                </div>
            </div>

            {/* Right */}
            <div></div>

        </main>
    </div>
  )
}