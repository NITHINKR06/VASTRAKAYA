import React from 'react'
import { Button } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { styled } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import Kashmir from '../../Images/State Flag/Kashmir.png';
import Goa from '../../Images/State Flag/Goa.png';
import Delhi from '../../Images/State Flag/Delhi.png';
import MP from '../../Images/State Flag/MP.png';
import India from '../../Images/India.png';
import AndhraPradesh from '../../Images/State Flag/AndhraPradesh.png';
import ArunachalPradesh from '../../Images/State Flag/ArunachalPradesh.png';
import Assam from '../../Images/State Flag/Assam.png';
import Bihar from '../../Images/State Flag/Bihar.png';
import Chandigarh from '../../Images/State Flag/Chandigar.png';
import Chhattisgarh from '../../Images/State Flag/Chatisgar.png';
import Gujarat from '../../Images/State Flag/Gujurath.png';



export default function StateButton() {

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

    const india = [
        {
            name                                                  : 'India',
            path                                                  : '/India',
            style: {
                backgroundImage                                   : 'linear-gradient(to bottom, orange, white, green)',
                color                                             : 'blue',
                fontWeight                                        : '800',
                height                                            : '50px',
                width                                             : '200px',
                backgroundSize                                    : 'cover',
                backgroundPosition                                : 'center',
                transition                                        : 'all 0.3s ease-in-out',
            },
            // hoverStyle: {
            //     backgroundImage                                   : 'linear-gradient(to  bottom, orange, white, green)',
            //     height                                            : '80px',
            //     width                                             : '157px',
            //     backgroundSize                                    : 'contain',
            //   },
        },
    ]

    const states1 = [
        {
          name                                                    : 'Karnataka',
          path                                                    : '/Karnataka',
          style: {
            color                                                 : 'black',
            fontWeight                                            : '800',
            height                                                : '50px',
            width                                                 : '200px',
            transition                                            : 'all 0.3s ease-in-out',
            backgroundImage                                       : 'none',
            backgroundColor                                       : 'white'
            // filter: 'blur(5px)',
          },
          hoverStyle: {
            backgroundImage                                       : 'linear-gradient(to bottom, #FFFF00 50%, #FF0000 50% )',
            backgroundSize                                        : 'cover',
            backgroundPosition                                    : 'center',
            height                                                : '100px',
            width                                                 : '157px',
            backgroundSize                                        : 'contain',
            // filter: 'blur(0px)',
          },
        },
        {
          name                                                    : 'Jammu Kashmir',
          path                                                    : '/JammuKashmir',
          style: {
            color                                                 : 'black',
            fontWeight                                            : '800',
            height                                                : '50px',
            width                                                 : '200px',
            backgroundColor                                       : 'white',
            backgroundImage                                       : 'none',
            transition                                            : 'all 0.3s ease-in-out',
          },
          hoverStyle: {
            backgroundImage                                       : `url(${Kashmir})`,
            backgroundSize                                        : 'cover',
            backgroundPosition                                    : 'center',
            height                                                : '100px',
            width                                                 : '157px',
            backgroundSize                                        : 'contain',
          },
        },
        {
          name                                                    : 'Delhi',
          path                                                    : '/Delhi',
          style: {
            backgroundImage                                       : 'none',
            color                                                 : 'black',
            fontWeight                                            : '800',
            height                                                : '50px',
            width                                                 : '200px',
            transition                                            : 'all 0.3s ease-in-out',
            backgroundColor                                       : 'white'
          },
          hoverStyle: {
            backgroundImage                                       : `url(${Delhi})`,
            backgroundSize                                        : 'cover',
            backgroundPosition                                    : 'center',
            height                                                : '100px',
            width                                                 : '157px',
            backgroundSize                                        : 'contain',
          },
        },
    ];

    const state2 = [
        {
            name                                                  : 'Madhya Pradesh',
            path                                                  : '/MadhyaPradesh',
            style: {
              color                                               : 'black',
              backgroundColor                                     : 'white',
              fontWeight                                          : '900',
              height                                              : '50px',
              width                                               : '200px',
              transition                                          : 'all 0.3s ease-in-out',
              backgroundImage                                     : 'none'
            },
            hoverStyle: {
              height                                              : '100px',
              backgroundPosition                                  : 'center',
              backgroundSize                                      : 'cover',
              backgroundImage                                     : `url(${MP})`,
              width                                               : '157px',
              backgroundSize                                      : 'contain',
            },
          },
          {
            name                                                  : 'Andhra Pradesh',
            path                                                  : '/AndhraPradesh',
            style: {
                color                                             : 'black',
                backgroundColor                                   : 'white',
                fontWeight                                        : '800',
                height                                            : '50px',
                width                                             : '200px',
                transition                                        : 'all 0.3s ease-in-out',
                backgroundImage                                   : 'none',
            },
            hoverStyle: {
                backgroundPosition                                : 'center',
                backgroundSize                                    : 'cover',
                backgroundImage                                   : `url(${AndhraPradesh})`,
                height                                            : '100px',
                width                                             : '157px',
                backgroundSize                                    : 'contain',
            },
          },
          {
            name                                                  : 'Arunachal Pradesh',
            path                                                  : '/ArunachalPradesh',
            style: {
                color                                             : 'black',
                backgroundColor                                   : 'white',
                backgroundImage                                   : 'none',
                fontWeight                                        : '800',
                height                                            : '50px',
                width                                             : '200px',
                transition                                        : 'all 0.3s ease-in-out',
            },
            hoverStyle: {
                backgroundImage                                   : `url(${ArunachalPradesh})`,
                backgroundSize                                    : 'cover',
                backgroundPosition                                : 'center',
                height                                            : '100px',
                width                                             : '157px',
                backgroundSize                                    : 'contain',
            },
          },
          {
            name                                                  : 'Assam',
            path                                                  : '/Assam',
            style: {
                color                                             : 'black',
                backgroundColor                                   : 'white',
                backgroundImage                                   : 'none',
                fontWeight                                        : '800',
                height                                            : '50px',
                width                                             : '200px',
                transition                                        : 'all 0.3s ease-in-out',
            },
            hoverStyle: {
                backgroundImage                                   : `url(${Assam})`,
                backgroundPosition                                : 'center',
                backgroundSize                                    : 'cover',
                height                                            : '100px',
                width                                             : '157px',
                backgroundSize                                    : 'contain',
            },
          },
          {
            name                                                  : 'Bihar',
            path                                                  : '/Bihar',
            style: {
                color                                             : 'black',
                backgroundColor                                   : 'white',
                backgroundImage                                   : 'none',
                fontWeight                                        : '800',
                height                                            : '50px',
                width                                             : '200px',
                
                transition                                        : 'all 0.3s ease-in-out',
            },
            hoverStyle: {
                backgroundImage                                   : `url(${Bihar})`,
                backgroundSize                                    : 'cover',
                backgroundPosition                                : 'center',
                height                                            : '100px',
                width                                             : '157px',
                backgroundSize                                    : 'contain',
            },
          },    
    ]

    const state3 = [
        {
            name                                                  : 'Chandigarh',
            path                                                  : '/Chandigarh',
            style: {
              backgroundColor                                     : 'white',
              color                                               : 'black',
              color                                               : 'black',
              fontWeight                                          : '800',
              height                                              : '50px',
              width                                               : '200px',
              transition                                          : 'all 0.3s ease-in-out',
              backgroundImage                                     : 'none'
            },
            hoverStyle: {
              backgroundImage                                     : `url(${Chandigarh})`,
              backgroundPosition                                  : 'center',
              backgroundSize                                      : 'cover',
              height                                              : '100px',
              width                                               : '157px',
              backgroundSize                                      : 'contain',
            },
          },
          {
            name                                                  : 'Chhattisgarh',
            path                                                  : '/Chhattisgarh',
            style: {
              backgroundColor                                     : 'white',
              color                                               : 'black',
              color                                               : 'black',
              fontWeight                                          : '800',
              height                                              : '50px',
              width                                               : '200px',
              transition                                          : 'all 0.3s ease-in-out',
              backgroundImage                                     : 'none'
            },
            hoverStyle: {
                backgroundPosition                                : 'center',
                backgroundSize                                    : 'cover',
                backgroundImage                                   : `url(${Chhattisgarh})`,
                height                                            : '100px',
                width                                             : '157px',
                backgroundSize                                    : 'contain',
            },
          },
          {
            name                                                  : 'Goa',
            path                                                  : '/Goa',
            style: {
              backgroundColor                                     : 'white',
              color                                               : 'black',
              fontWeight                                          : '800',
              height                                              : '50px',
              width                                               : '200px',
              transition                                          : 'all 0.3s ease-in-out',
              backgroundImage                                     : 'none'
            },
            hoverStyle: {
                height                                            : '100px',
                width                                             : '157px',
                backgroundPosition                                : 'center',
                backgroundSize                                    : 'cover',
                backgroundImage                                   : `url(${Goa})`,
                backgroundSize                                    : 'contain',
            },
          },
          {
            name                                                  : 'Gujarat',
            path                                                  : '/Gujarat',
            style: {
              backgroundColor                                     : 'white',
              color                                               : 'black',
              color                                               : 'black',
              fontWeight                                          : '800',
              height                                              : '50px',
              width                                               : '200px',
              transition                                          : 'all 0.3s ease-in-out',
              backgroundImage                                     : 'none'
            },
            hoverStyle: {
              height                                              : '100px',
              width                                               : '157px',
              backgroundImage                                     : `url(${Gujarat})`,
              backgroundSize                                      : 'cover',
              backgroundPosition                                  : 'center',
              backgroundSize                                      : 'contain',
            },
          },    
    ]

    const state4 = [
        {
            name                                                  : '...',
            path                                                  : '/',
            style: {
              backgroundColor                                     : 'white',
              color                                               : 'black',
              color                                               : 'black',
              fontWeight                                          : '800',
              height                                              : '50px',
              width                                               : '200px',
              transition                                          : 'all 0.3s ease-in-out',
              backgroundImage                                     : 'none'
            },
            // hoverStyle: {
            //   backgroundImage: `url(${Goa})`,
            //   backgroundPosition: 'center',
            //   backgroundSize: 'cover',
            //   height: '100px',
            //   width: '157px',
            //   backgroundSize: 'contain',
            // },
          },
          
              
    ]

    const [open, setOpen]                                         = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleOpen = () => {
      setOpen(true);
    };

  return (
    <div>
        <div style={{
            justifyContent                                        : 'center',
            alignItems                                            : 'center',
            textAlign                                             : 'center',

            }}>
          <h1>
          {india.map((state, index) => (
                <div key                                          = {index} style={{ marginBottom: '20px' }}>
                
                    <Button
                    onClick                               = {handleOpen}
                    variant                                       = "contained"
                    style                                         = {state.style}
                    onMouseEnter={(e) => {
                        if (state.hoverStyle) {
                        Object.assign(e.currentTarget.style, state.hoverStyle);
                        }
                    }}
                    onMouseLeave={(e) => {
                        Object.assign(e.currentTarget.style, state.style);
                    }}
                    >
                    {state.name} Map <FmdGoodIcon style           = {{ color: state.style.color || 'black' }} />
                    </Button>
                

                    <div>
                        <Backdrop
                            sx={{
                                color: '#fff',
                                zIndex: (theme) => theme.zIndex.drawer + 1,
                                backdropFilter: 'blur(10px)', // Apply blur to the backdrop
                            }}
                            open={open}
                            onClick={handleClose}
                        >
                            <div style={{ alignItems: 'center' }}>
                                <img src={India} alt="" style={{ zIndex: 2, position: 'relative' }} />
                                <Link to={india[0].path}>
                                    <Button
                                        style={{ ...india[0].style, zIndex: 2, position: 'relative', marginLeft:'-150px', marginTop:'-150px' }}
                                        variant="contained"
                                    >
                                        Open India Map 
                                    </Button>
                                </Link>
                            </div>
                        </Backdrop>

                    </div>

                </div>
            ))}
          </h1>
            <br />

        <div style                                                = {{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', gap: '50px' }}>
            {states1.map((state, index) => (
                <div key                                          = {index} style={{ marginBottom: '20px', position: 'relative' }}>
                    <Link to                                      = {state.path}>
                        <Button
                            variant                               = "contained"
                            style                                 = {state.style}
                            onMouseEnter={(e) => {
                                if (state.hoverStyle) {
                                    Object.assign(e.currentTarget.style, state.hoverStyle);
                                    Object.assign(e.currentTarget.firstChild.style, state.hoverBackgroundStyle);
                                }
                            }}
                            onMouseLeave={(e) => {
                                Object.assign(e.currentTarget.style, state.style);
                                Object.assign(e.currentTarget.firstChild.style, state.backgroundStyle);
                            }}
                        >
                            <div style                            = {state.backgroundStyle}></div>
                            {state.name} Map <FmdGoodIcon style   = {{ color: state.style.color || 'black' }} />
                        </Button>
                    </Link>
                </div>
            ))}
        </div>
        <br />

        <div style                                                = {{display:'flex' , textAlign:'center', justifyContent:'center',
      alignItems                                                  : 'center', gap:'50px', }}>
         {state2.map((state, index) => (
                <div key                                          = {index} style={{ marginBottom: '20px', position: 'relative' }}>
                    <Link to                                      = {state.path}>
                        <Button
                            variant                               = "contained"
                            style                                 = {state.style}
                            onMouseEnter={(e) => {
                                if (state.hoverStyle) {
                                    Object.assign(e.currentTarget.style, state.hoverStyle);
                                    Object.assign(e.currentTarget.firstChild.style, state.hoverBackgroundStyle);
                                }
                            }}
                            onMouseLeave={(e) => {
                                Object.assign(e.currentTarget.style, state.style);
                                Object.assign(e.currentTarget.firstChild.style, state.backgroundStyle);
                            }}
                        >
                            <div style                            = {state.backgroundStyle}></div>
                            {state.name} Map <FmdGoodIcon style   = {{ color: state.style.color || 'black' }} />
                        </Button>
                    </Link>
                </div>
            ))}
        </div>
        <br />


        <div style                                                = {{display:'flex' , textAlign:'center', justifyContent:'center',
      alignItems                                                  : 'center', gap:'50px', }}>
          {state3.map((state, index) => (
                <div key                                          = {index} style={{ marginBottom: '20px', position: 'relative' }}>
                    <Link to                                      = {state.path}>
                        <Button
                            variant                               = "contained"
                            style                                 = {state.style}
                            onMouseEnter={(e) => {
                                if (state.hoverStyle) {
                                    Object.assign(e.currentTarget.style, state.hoverStyle);
                                    Object.assign(e.currentTarget.firstChild.style, state.hoverBackgroundStyle);
                                }
                            }}
                            onMouseLeave={(e) => {
                                Object.assign(e.currentTarget.style, state.style);
                                Object.assign(e.currentTarget.firstChild.style, state.backgroundStyle);
                            }}
                        >
                            <div style                            = {state.backgroundStyle}></div>
                            {state.name} Map <FmdGoodIcon style   = {{ color: state.style.color || 'black' }} />
                        </Button>
                    </Link>
                </div>
            ))}
        </div>

        <br />

        <div style                                                = {{display:'flex' , textAlign:'center', justifyContent:'center',
        alignItems                                                : 'center', gap:'50px',}}>
          {state4.map((state, index) => (
                <div key                                          = {index} style={{ marginBottom: '20px', position: 'relative' }}>
                  <LightTooltip title="For More State Wist India Map">
                    <Button
                        variant                               = "contained"
                        style                                 = {state.style}
                    >
                        <div style                            = {state.backgroundStyle}></div>
                        {state.name}  
                    </Button>
                  </LightTooltip> 
                </div>
            ))}
        </div>

     </div>
    </div>
  )
}
