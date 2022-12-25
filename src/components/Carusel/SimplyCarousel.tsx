import React, { useState } from 'react';
import Carousel from 'react-simply-carousel';

import data from './data.json';

export function SimplyCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <Carousel
        containerProps={{
          style: {
            width: '100%',
            justifyContent: 'space-between',
            userSelect: 'text',
          },
        }}
        activeSlideIndex={activeSlide}
        autoplay={true}
        autoplayDelay={1000}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: '>',
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: 'center',
          },
        }}
        backwardBtnProps={{
          children: '<',
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: 'center',
          },
        }}
        itemsToShow={3}
        speed={400}
        infinite={true}
      >
        {data.resources.map((img, index) => (
          <div
            style={{
              width: 300,
              display: 'flex',
              alignItems: 'center',
              marginLeft: '10px',
              marginRight: '10px',
              textAlign: 'center',
              lineHeight: '240px',
              boxSizing: 'border-box',
            }}
          >
            <img className="w-[300px] object-cover" key={index} src={img.imageUrl} alt={img.title} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
