import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../app/slices/basketSlice'
import prime from "../assets/prime-tag.png"

export default function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime }) {
    const dispatch = useDispatch()

    const addItemToBasket = () => {
        const product = { id, title, price, rating, description, category, image, hasPrime }
        dispatch(addToBasket(product))
    }
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}))
    }

  return (
    <div className='grid grid-cols-5'>
        <Image src={image} alt={title} height={200} width={200} objectFit="contain" />

        {/* Middle */}
        <div className='col-span-3 mx-5'>
            <p>{title}</p>
            <div className='flex'>
                {Array(rating).fill().map((_,i) => (
                    <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
            <p className='text-xs my-2 line-clamp-3'>{description}</p>
            <span>{price} €</span>
            {hasPrime && (
                <div className='flex items-center space-x-2'>
                    <Image loading='lazy' width={50} height={50} alt='prime logo' src={prime}  />
                    <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                </div>
            )}
        </div>

        <div className='flex flex-col space-y-2 my-auto justify-self-end'>
            <button onClick={addItemToBasket} className='button mt-auto'>Add to Basket</button>
            <button onClick={removeItemFromBasket} className='button mt-auto'>Remove from Basket</button>
        </div>

    </div>
  )
}
