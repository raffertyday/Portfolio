'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import classes from './image-slide.module.css'

import mum from '@/public/images/mum.jpg'
import casual2 from '@/public/images/casual2.jpg'
import casual3 from '@/public/images/casual3.jpg'
import footy2 from '@/public/images/footy2.jpg'


const images = [
  { image: mum, alt: 'me and my mum' },
  { image: casual2, alt: 'me in the mirror' },
  { image: casual3, alt: 'me playing football' },
  { image: footy2, alt: 'me playing football' },
 
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
        fill
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
          
        />
      ))}
    </div>
  );
}