import React from 'react';
import IM from '../../Images/IM';
import Vm from '../../Images/2062566-hd_1920_1080_24fps.mp4';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';

export default function IndianMap() {
  return (
    <>
      <div className='video-container' style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Link to={'/'}>
          <CancelIcon 
            sx={{ 
              fontSize: '40px', 
              position: 'absolute', // Make the icon position absolute
              top: '10px', // Adjust top spacing as needed
              right: '10px', // Align to the right
              zIndex: 1, // Ensure it appears above the video
            }}
          />
        </Link> 

        <video 
          src={Vm} 
          autoPlay 
          loop 
          muted 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
            filter: 'blur(2px)', // Apply blur effect here
          }} 
        />
        <IM />
      </div>
    </>
  );
}
