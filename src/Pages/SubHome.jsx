import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import img from '../Images/EarthWorld.jpg';
import '../Css/Subhome.css';

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>';
  },
};

export default function SubHome() {
  const slideData = [
    {
      image: img,
      name: 'Slide 1',
      description: 'This is the description for Slide 1',
      buttonText: 'Learn More',
    },
    {
      image: img,
      name: 'Slide 2',
      description: 'This is the description for Slide 2',
      buttonText: 'Discover',
    },
    {
      image: img,
      name: 'Slide 3',
      description: 'This is the description for Slide 3',
      buttonText: 'Explore',
    },
  ];

  return (
    <div style={{ marginBottom: '30px' }}>
      <Swiper
        pagination={pagination}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {slideData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="slideContent">
              <div className="leftSide">
                <img
                  src={card.image}
                  alt={`Slide ${index + 1}`}
                  onContextMenu={(e) => e.preventDefault()}
                />
                <h2>{card.name}</h2>
              </div>
              <div className="rightSide">
                <p>{card.description}</p>
                <button className="slideButton">{card.buttonText}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
