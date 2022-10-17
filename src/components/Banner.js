import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image"
import image1 from "../assets/carousselImg01.jpg"
import image2 from "../assets/carousselImg02.jpg"
import image3 from "../assets/carousselImg03.jpg"

export default function Banner() {
  return (
    <div className='relative '>
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
        <Carousel 
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        >
            <div>
            <Image
                // loading='lazy'
                src={image1}
                width='100%'
                height='50%'
                layout="responsive"
                alt="banner image"
                priority={1}
            />
            </div>
            <div>
            <Image
                loading='lazy'
                src={image2}
                width='100%'
                height='50%'
                layout="responsive"
                alt="banner image"
            />
            </div>
            <div>
            <Image
                loading='lazy'
                src={image3}
                width='100%'
                height='50%'
                layout="responsive"
                alt="banner image"
            />
            </div>
        </Carousel>
    </div>
  )
}
