import React from 'react'
import list from "../../public/list.json"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const Freebook = () => {
    const filterData = list.filter((data) => data.category === "Free");

// react slick slider
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
  return (
   <>
   <div className='max-w-screen-2xl mx-auto container md:px-20 px-4 '>
    <div>
    <h1 className='font-semibold text-xl pb-2'> Free Offered Courses  </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim non vel, aliquam corrupti ut recusandae hic soluta. Rerum, ipsum. ipisicing elit. Itaque sit quos dicta in! Animi obcaecati dolorem iusto eos nulla temporibus.</p>
    </div>
   
  
   <div>
   <Slider {...settings}>
       {filterData.map((item)=>(
        <Cards item={item} key={(item.id)} />
       ))}
      </Slider>
     </div>
   </div>
   </>
  )
}

export default Freebook