import * as React from 'react';
import Box from '@mui/material/Box';
import NavBar from '../NavBar1';
import img from '../../Images/StateMapImage/desktop-wallpaper-hope-why-karnataka-is-unique-kannada-rajyotsava-background-thumbnail-removebg-preview.png';
import TooggleButton from '../Toggle/TooggleButton';
import YouTube from 'react-youtube';
import './AndhraPradesh.css';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

// const Root = styled('div')(({ theme }) => ({
//   width: '100%',
//   ...theme.typography.body2,
//   color: theme.palette.text.secondary,
//   '& > :not(style) ~ :not(style)': {
//     marginTop: theme.spacing(2),
//   },
// }));

export default function AndhraPradesh() {


  const fullVideoUrl = `https://www.youtube.com/watch?v=`;

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      margin: '0 auto',
      padding: '20px',
      marginTop: '-50px',
      marginBottom: '-100px'
    },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: 'auto',
      margin: 'auto',
    },
    textBlock: {
      maxWidth: '50%',
      padding: '10%',
      fontSize: '30px',
      fontWeight: '400',
      lineHeight: '1.5',
      textAlign: 'justify',
    },
    imgBlock: {
      textAlign: 'center',
      paddingLeft: '180px',
    },
    buttonSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };

  const text = " ";

  const words = text.split(' ');

  const videoOptions = {
    // width: '1024',
    // height: '600',
    // playerVars: {
    //   autoplay: 0, // Autoplay the video
    // },
  };

  return (
    <>
    {/* <Root> */}
      <Box>
        <NavBar />
      </Box>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.imgBlock}>
            <img className='StateImage' src={img} alt="Karnataka" />
          </div>
          <div style={styles.textBlock}>
            <h2 style={{ color: 'blue', fontFamily: 'Tapestry,serif' }}>❤️</h2>
            <p style={{ fontFamily: 'Satisfy, cursive' }}>
              {words.map((word, index) => (
                <span
                  key={index}
                  className="hover-word"
                >
                  {word} 
                  {index < words.length - 1 && ' '}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Tapestry,serif', fontSize: '38px' }}>State Traditional Outfits</h1>
            <div >
              <TooggleButton />
              {/* <p>in button insert the image of traditional dress</p> */}
            </div>
            <h1>.... .... ....</h1>
            
      <Divider></Divider>            
      <Divider></Divider>            
      <Divider></Divider>            
      <Divider></Divider>            
      <Divider></Divider>            
          </div>

        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Tapestry,serif', fontSize: '38px' }}>State Language</h1>
          <div style={{ textAlign: 'center', maxWidth: '700px' }}>
            <div>
              <p style={{ fontFamily: 'Satisfy, cursive', fontSize: '28px' }}></p>
            </div>
            <div className='Landiv' style={{ gap: '-20px' }}>
              <div className='landivsub' style={{ display: 'flex', height: '50px' }}>
                <p className='lantext'></p>
                <p className='lantext'></p>
              </div>
              <div className='landivsub' style={{ display: 'flex', height: '50px' }}>
                <p className='lantext'></p>
                <p className='lantext'></p>
              </div>
              {/* <div className='landivsub' style={{ display: 'flex', height: '50px' }}>
                <p className='lantext'>Urdu</p>
                <p className='lantext'>سب کو ہیلو</p> 
              </div> */}
              {/* <div className='landivsub' style={{ display: 'flex', height: '50px' }}>
                <p className='lantext'>Marathi</p>
                <p className='lantext'>सर्वांना नमस्कार</p>
              </div> */}
              {/* <div className='landivsub' style={{ display: 'flex', height: '50px' }}>
                <p className='lantext'>Telugu</p>
                <p className='lantext'>అందరికీ నమస్కారం</p>
              </div>
              <div className='landivsub' style={{ display: 'flex', height: '50px' }}>
                <p className='lantext'>Malayalam</p>
                <p className='lantext'>ഹലോ എല്ലാവരും</p>
              </div> */}
            </div>
          </div>
          <br /><br /><br />
          {/* <h1>.... .... ....</h1> <Divider></Divider>             */}
      <Divider></Divider>            
      <Divider></Divider>            
      <Divider></Divider>            
      <Divider></Divider>            
          
        </div>
        <br /><br /><br />
          <div style={styles.buttonSection}>
            <YouTube
              videoId="vcN0khsFvyg" // Pass the extracted video ID as prop
              opts={videoOptions} // Set video options
              alert="Loading"
            />
          </div>
          <h1>The end</h1>
      </div>
      {/* </Root> */}
    </>
  );
}
