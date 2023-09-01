import { useEffect, useState } from "react"
import React from 'react'



const Response = () => {

  const testimonials =[
    {
      "img":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_38423341_indian-people.html&psig=AOvVaw02iwbA4vlW03eYOtcW1jjg&ust=1692684549473000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIDFmryL7YADFQAAAAAdAAAAABAE",
      "cname":"Rahul",
      "testi":"The jalebis at this restaurant are a true delight! Crispy on the outside, soft on the inside, and dripping with just the right amount of sweetness. Pairing them with their flavorful samosas is a match made in heaven. A must-visit for anyone craving authentic Indian snacks!"
    },
    {
      "img":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_38423341_indian-people.html&psig=AOvVaw02iwbA4vlW03eYOtcW1jjg&ust=1692684549473000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIDFmryL7YADFQAAAAAdAAAAABAE",
      "cname":"Radhika",
      "testi":"Finding a place that serves both exceptional jalebis and samosas is a rare gem, and this restaurant nails it. The jalebis have that addictive crunch, and the samosas are incredibly flavorful with a crispy exterior. They've truly mastered the art of balancing flavors and textures. A definite treat for your taste buds!"
    },
    {
      "img":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_38423341_indian-people.html&psig=AOvVaw02iwbA4vlW03eYOtcW1jjg&ust=1692684549473000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIDFmryL7YADFQAAAAAdAAAAABAE",
      "cname":"Pratham",
      "testi":"I'm blown away by the quality of jalebis and samosas at this restaurant. The jalebis are perfectly crispy and have that amazing syrupy texture that I absolutely love. And the samosas? Bursting with a delicious blend of spices and filled generously with savory goodness. It's my go-to spot now!"
    },
    {
      "img":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_38423341_indian-people.html&psig=AOvVaw02iwbA4vlW03eYOtcW1jjg&ust=1692684549473000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIDFmryL7YADFQAAAAAdAAAAABAE",
      "cname":"Riya",
      "testi":"I'm blown away by the quality of jalebis and samosas at this restaurant. The jalebis are perfectly crispy and have that amazing syrupy texture that I absolutely love. And the samosas? Bursting with a delicious blend of spices and filled generously with savory goodness. It's my go-to spot now!"
    }
  ]
  console.log(testimonials);


  const [currentItemIndex, setCurrentItemIndex] = useState(0)

useEffect(() => {
  setInterval(function () {
    setCurrentItemIndex((currentItemIndex + 1) % testimonials.length);
}, 5000);
}, [currentItemIndex])


  return (
    <div>
       {/* <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper> */}


{/* {testimonials.map((data)=>{
  return(
    <>
    Customer name : {data.cname}
    <br />
    Customer info: {data.testi}
    <br />
    </>
  )
})} */}

<div className="bg-orange-300 pb-28">
<h1 className="text-center font-bold text-3xl p-10">Testimonials</h1>
<div className="container bg-gray-100 h-4/5  rounded-xl">
  {/* <div className="justify-center h-11 rounded-full">
    <img src={testimonials[currentItemIndex].img} alt="image not found" />
  </div> */}
  <div className="content text-gray-800 text-2xl font-serif text-center pt-16">
    {testimonials[currentItemIndex].testi}
  </div>
<p className="text-center font-semibold pb-16">-{testimonials[currentItemIndex].cname}</p>
</div>

</div>

    </div>
  )
}

export default Response