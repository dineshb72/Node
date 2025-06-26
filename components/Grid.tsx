"use client";
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid>
        {gridItems.map(({id, title, titleClassName, description, className, img, imgClassName, spareImg}, i)=>(
          <BentoGridItem 
  id={id}
  key={id}
  title={title}
  titleClassName={titleClassName}
  description={description}
  className={className}
  img={img ? `${process.env.NODE_ENV === 'production' ? '/Node' + img : img}` : ''}
  imgClassName={imgClassName}
  spareImg={spareImg ? `${process.env.NODE_ENV === 'production' ? '/Node' + spareImg : spareImg}` : ''}
/>
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid