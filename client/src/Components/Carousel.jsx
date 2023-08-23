import React from 'react'

const CarouselProg = () => {
  return (
    <div className='h-screen mdm:h-2/4'>

<div id="carouselExampleFade" className="carousel slide carousel-fade h-screen mdm:h-2/4">
  <div className="carousel-inner h-screen mdm:h-2/4">
    <div className="carousel-item active h-screen-1/2">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item h-screen-1/2">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item h-screen-1/2">
      <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" className="d-block w-100 " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default CarouselProg
