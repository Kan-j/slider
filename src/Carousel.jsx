import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({list}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <section>
         <Slider {...settings}>
            {list.map((data)=> <section key={data.id} className=''> 
                <section className='flex flex-col items-center mt-4'>
                    <img src={data.image} className='w-40 h-40 object-cover rounded-full shadow-xl shadow-gray-300' alt={data.name} />
                    <h1 className='uppercase mt-4 text-purple-700 font-medium text-lg'>{data.name}</h1>
                    <h1 className='capitalize font-medium text-gray-900'>{data.title}</h1>
                    <p className='w-2/3 mt-6 leading-loose text-gray-500 font-medium'>{data.quote}</p>
                </section> 
                
            </section>)}
        </Slider>
    </section>
  )
}

export default Carousel