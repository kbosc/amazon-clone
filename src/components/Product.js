import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import prime from "../assets/prime-tag.png"
import { useDispatch} from 'react-redux'
import { addToBasket } from "../app/slices/basketSlice"

export default function Product({ id, title, price, description, category, image }) {
    const [rating, setRating] = useState(0)
    const [hasPrime, setHasPrime] = useState()

    const dispatch = useDispatch()

    useEffect(() => {
        setRating(Math.floor(Math.random() * 5 + 1))
        setHasPrime(Math.random() < 0.5)
    }, [])

    const addItemToBasket = () => {
        const product = { id, title, price, description, category, image, rating, hasPrime }

        dispatch(addToBasket(product))
    }

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>

        <Image width={200} height={200}  objectFit="contain" alt={title} src={image} />

        <h4 className='my-3'>{title}</h4>

        <span className='flex'>
            {Array(rating).fill().map((_, i) => (
                <StarIcon key={i} className='h-5 text-yellow-500' />
            ))}
        </span>

        <p className='text-xs my-2 line-clamp-2'>{description}</p>

        <div className=''>
            {price} €
        </div>

        {hasPrime && (
            <div className='flex items-center space-x-2'>
                <Image width={50} height={50} alt='prime logo' src={prime}  />
                <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
            </div>
         )}

        <button onClick={addItemToBasket} className='mt-auto button'>Add to Basket</button>
    </div>
  )
}
