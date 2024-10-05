import React, { useState } from "react";
import { Button } from "@mui/material";
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

import '../Css/NavBar1.css';
import { Link } from "react-router-dom";

function NavBar() {
  const [clicked, setClicked] = useState(false);
  const [isButtonVisible, setButtonVisible] = useState(true);
  const [clickedItem, setClickedItem] = useState(null);

  const handleClick = () => {
    setClicked(!clicked);
    setButtonVisible(!isButtonVisible);
  };

  const handleItemClick = (index) => {
    setClickedItem(index);
  };

  return (
    <div className="navbar1">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="" className="navbar">
          <Toolbar variant="" className="navbar">
            <h2 className="navbar-logo" style={{fontFamily:'Tapestry,serif'}}>
              VASTRAKAYA
            </h2>

            <Box className="navbar-buttons navbar ">
              <Link to={'/'}>
                <Button className="navbar-button" sx={{color:'black' , fontWeight:'600'}}>
                  Home <HomeIcon sx={{ paddingLeft: '8px' }} />
                </Button>
              </Link>
              <Link to={'/India'}>
                <Button className="navbar-button" sx={{color:'black' , fontWeight:'600'}}>
                  India Map <TravelExploreIcon sx={{ paddingLeft: '5px' }} />
                </Button>
              </Link>
              <Link to={'/About-Us'}>
                <Button className="navbar-button" sx={{color:'black' , fontWeight:'600'}}>
                  About Us <InfoIcon sx={{ paddingLeft: '5px' }} />
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default NavBar;
