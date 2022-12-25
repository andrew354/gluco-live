import { useState, useEffect } from 'react';
import data from './data.json';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = data.resources.length;

  const autoScroll = true;
  let slideInterval: any;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log('next');
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log('prev');
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider flex">
      <button
        onClick={prevSlide}
        className="z-10 m-0 h-full w-10 p-0 text-center text-white opacity-75 transition-all duration-300 ease-in-out hover:bg-blue-900/75 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-25"
        // disabled={isDisabled('prev')}
      ></button>
      <button
        onClick={nextSlide}
        className="z-10 m-0 h-full w-10 p-0 text-center text-white opacity-75 transition-all duration-300 ease-in-out hover:bg-blue-900/75 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-25"
        // disabled={isDisabled('next')}
      ></button>
      {data.resources.map((slide, index) => {
        return (
          <div className={`flex ${index === currentSlide ? 'slide current' : 'slide'}`} key={index}>
            {/* {index === currentSlide && ( */}
            <div>
              <img src={slide.imageUrl} alt="slide" className="image" />
              <div className="content">
                <h2>{slide.title}</h2>
              </div>
            </div>
            {/* )} */}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
