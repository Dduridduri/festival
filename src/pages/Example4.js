import React, { useState } from 'react'
import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './../index.css'


function Example4() {
  const [isActive,setIsActive] = useState("close");

  return (
    <>
    <Swiper
    modules={[Navigation, Pagination]}    
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
   {
     Array(50).fill().map((e,i)=>{
      return(
        <SwiperSlide key={i}>Slide {i+1}</SwiperSlide>
      )
     })

   }


    
    </Swiper>
    <button onClick={()=>{setIsActive(isActive === "open" ? "close" : "open")}}>클릭</button>
    <span>{isActive}</span>
    {
      isActive === "open" && 
      // open이 참일때만 작동하는 문법
      <p className={isActive === "open" ? "active" : "on"} >Lorem ipsum dolor sit amet.</p>

    }

    {/* <p className={isActive === "open" ? "active" : "on"} style={{display: isActive === "open" ? "block" : "hidden"}}>Lorem ipsum dolor sit amet.</p> */}
    {/* tailwind에서 변수랑 스타일 같이 쓰고싶을땐 {`스타일`${변수}}로 쓰면됨 */}
    {/* 모든 변수에는 삼항 연산자쓸수있음 */}

    </>
  )
}

export default Example4