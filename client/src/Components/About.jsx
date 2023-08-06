import React from 'react'

const About = () => {
  return (
    <div className='flex space-x-4 justify-center p-4 mdm:p-2 font-mono'>
      <div className='image w-1/2 smm:hidden'>
        <img className='rounded-2xl w-[30rem] h-[18rem] mdm:w-[15rem] mdm:h-[18rem] mx-auto' src='https://img.freepik.com/premium-photo/veg-samosa-with-jalebi-snack-combination-also-called-imarti-sambusa-samusa_466689-88683.jpg?w=360' alt='jain jalebi products' />
      </div>
      <div className='about flex flex-col space-y-4 w-1/2 items-center smm:w-full'>
        <div className='about-heading text-center text-6xl font-semibold mb-4 text-yellow-500 smm:text-xl'>ABOUT US</div>
        <div className='about-shop smm:text-sm'>Jain Jalebi is a well established restaurant or shop who is serving their hygienic and tasty food to their customers since 1970.Jain Jalebi deals in many variety of foods like Jalebi, Samosa, Bedmi Poori, etc. There are two outlets of this shop or restaurant in gurgaon.</div>
        <div className='founder italic text-yellow-300 smm:text-sm'>
          <div className='name font-semibold text-xl smm:text-sm'>Kishan Chand Jain</div>
          <span className='founder-name text-gray-600'>Founder</span>
        </div>
      </div>
    </div>
  )
}

export default About