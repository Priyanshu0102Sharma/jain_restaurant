import React from 'react'

const About = () => {
  return (
    <div className='flex space-x-4 justify-center p-4 mdm:p-2 font-mono bg-gray-200'>
      <div className='image w-1/2 smm:hidden'>
        <img className='rounded-2xl w-[30rem] h-[18rem] mdm:w-[15rem] mdm:h-[18rem] mx-auto' src='https://img.freepik.com/premium-photo/veg-samosa-with-jalebi-snack-combination-also-called-imarti-sambusa-samusa_466689-88683.jpg?w=360' alt='jain jalebi products' />
      </div>
      <div className='about flex flex-col space-y-4 w-1/2 items-center smm:w-full'>
        <div className='about-heading text-center text-6xl font-semibold mb-4 text-orange-500 mdm:text-lg'>ABOUT US</div>
        <div className='about-shop smm:text-sm'><span className='font-semibold text-yellow-600'>Welcome</span> to Jain Jalebi iconic Gurgaon eatery established in <span className='text-yellow-600'>1970</span>. Savor the taste of tradition with our authentic <span className='font-semibold text-yellow-600'>Jalebi, Samosa, Bedmi Poori and Kachodi</span>. For over 50 years, we've delighted in sharing these cherished flavors with our patrons. There are two outlets of this restaurant in Gurgaon, Haryana. Join us on this flavorful journey.</div>
        <div className='founder italic text-yellow-500 smm:text-sm'>
          <div className='name font-semibold text-xl mdm:text-sm'>Kishan Chand Jain</div>
          <span className='founder-name text-gray-400 mdm:text-sm'>Founder</span>
        </div>
      </div>
    </div>
  )
}

// Jain Jalebi is a well established restaurant or shop who is serving their hygienic and tasty food to their customers since 1970.Jain Jalebi deals in many variety of foods like Jalebi, Samosa, Bedmi Poori, etc. There are two outlets of this shop or restaurant in gurgaon.

// Welcome to "Flavors of India," a culinary treasure nestled in the heart of Gurgaon since 1970. For over five decades, we have been dishing out the authentic delights of Jalebi, Samosa, and Kachodi, serving a slice of India's rich gastronomic heritage on every plate. Our founder's passion for preserving traditional recipes and using the finest locally sourced ingredients has been the driving force behind our success. With skilled chefs and a warm ambiance, we invite you to indulge in nostalgia-in
// Welcome to our iconic Gurgaon eatery established in 1970. Savor the taste of tradition with our authentic Jalebi, Samosa, and Kachodi. For over 50 years, we've delighted in sharing these cherished flavors with our patrons. Join us on this flavorful journey as we celebrate India's culinary heritage.

export default About