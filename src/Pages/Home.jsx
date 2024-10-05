import React, { useEffect, useState } from 'react';
import '../Css/Home.css';
import NavBar from './NavBar1';
import Loader from '../LoadingPage/Loader';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SubHome from './SubHome';
import Girl from '../Images/image-removebg-preview.png'
import Pair from '../Images/Pair.png'
import Girl2 from '../Images/655f122bebaee9b7fae4a31b_Goan_women_and_men_in_traditional_attire-removebg-preview.png';
import Girl3 from '../Images/d26749958beef3c72aebfa6be329dbe7-removebg-preview.png';
import StateButton from './MapButton/StateButton';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const imageData = [
  {
    image: Girl,
    text: 'hii'
  },
  {
    image: Girl,
    text: 'hii'
  },
  {
    image: Girl,
    text: 'hii'
  },
];

export default function Home() {

  const isDataLoadedBefore = sessionStorage.getItem('isDataLoaded') === 'true';

  const [isLoading, setIsLoading] = useState(!isDataLoadedBefore);

  useEffect(() => {
    const DataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('isDataLoaded', 'true');
      }, 1000);
    };

    if (isLoading) {
      DataFetch();
    }
  }, [isLoading]);

  return isLoading ? (
    <Loader />
  ) : (
    <div >
      <div className='mainDiv'>
        <NavBar/>
        
      </div>

      <div>
      <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false} 
        interval={2000} // Change slide every 3 seconds
      >
        <div className='imageSecond' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <img src={Pair} alt="Indian fashion" style={{ height:'70%', width:'500px'}} />
          <p style={{ textAlign: 'center'}}>The beauty of Indian attire lies in its ability to blend tradition with style, making it timeless.</p>
        </div>
        
        <div className='imageFirst' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <p style={{ textAlign: 'center'}}>Draped in tradition, adorned with culture Indian attire is a work of art.</p>
          <img src={Girl2} alt="Indian fashion" style={{ height:'70%', paddingLeft:'-180px', width:'800px' }} />
        </div>

      </Carousel>
    </div>

     <div>
      <StateButton/>
     </div>

      {/* Displaying the images and text */}
      <div className='catogry' style={{ display: 'flex', gap: '35px', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: '35px' , marginTop:'60px' }}>
        {imageData.map((data, index) => (
          <div key={index} className='types' style={{ objectFit: 'contain', gap: '20px' }}>
            <img src={data.image} alt="" style={{ height: '140px', width: '140px', borderRadius: '50%' }} />
            <h2 style={{fontFamily:'Papyrus', fontSize:20, fontWeight:900, marginTop:10}}>{data.text}</h2>
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '40px',
          backgroundColor:`rgba(208, 242, 244, 0.8)`,
          width:'65%',
          marginLeft:'210px',
          margin:'5px 0px 65px 230px',
          borderRadius:'70px'
        }}
      >
        <img src={Girl3} alt="" style={{width:'100', height:'200px', marginRight:'-30px'}}/>
        <h3
          style={{
            fontFamily: 'Edu VIC WA NT Beginner, cursive',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            maxWidth: '550px',
            textAlign: 'center',
            fontSize:'25px'
          }}
        >
          The beauty of Indian attire lies in its ability to blend tradition with style, making it timeless.
        </h3>
        <img src={Pair} alt="" style={{width:'100', height:'200px', marginRight:'-40px'}}/>
      </div>

      <SubHome/>

    </div>
  );
}
