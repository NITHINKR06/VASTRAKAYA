import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';

import KarState from '../Pages/States/KarState';
import MPState from '../Pages/States/MPState';
import MapDetails from '../Steps/MapDetails';
import AndhraPradesh from '../Pages/States/AndhraPradesh';
import ArunachalPradesh from '../Pages/States/ArunachalPradesh';
import Assam from '../Pages/States/Assam';
import Bihar from '../Pages/States/Bihar';
import Chandigarh from '../Pages/States/Chandigarh';
import Chhattisgarh from '../Pages/States/Chhattisgarh';
import Delhi from '../Pages/States/Delhi';
import Goa from '../Pages/States/Goa';
import Gujarat from '../Pages/States/Gujarat';
import HimachalPradesh from '../Pages/States/HimachalPradesh';
import Haryana from '../Pages/States/Haryana';
import Jharkhand from '../Pages/States/Jharkhand';
import Kerala from '../Pages/States/Kerala';
import Lakshadweep from '../Pages/States/Lakshadweep';
import Maharashtra from '../Pages/States/Maharashtra';
import Meghalaya from '../Pages/States/Meghalaya';
import Manipur from '../Pages/States/Manipur';
import Odisha from '../Pages/States/Odisha';
import Mizoram from '../Pages/States/Mizoram';
import Nagaland from '../Pages/States/Nagaland';
import Punjab from '../Pages/States/Punjab';
import Puducherry from '../Pages/States/Puducherry';
import Rajasthan from '../Pages/States/Rajasthan';
import Sikkim from '../Pages/States/Sikkim';
import Telangana from '../Pages/States/Telangana';
import Tripura from '../Pages/States/Tripura';
import TamilNadu from '../Pages/States/TamilNadu';
import UttarPradesh from '../Pages/States/UttarPradesh';
import Uttarakhand from '../Pages/States/Uttarakhand';
import WestBengal from '../Pages/States/WestBengal';
import JammuKashmir from '../Pages/States/JammuKashmir';
import Error from './Error';

export default function StateRouter() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/*" element={<Error/>} />
          <Route path="/India" element={<MapDetails/>} />
          {/* 35 states */}
          <Route path="/Karnataka" element={<KarState />} />
          <Route path="/MadhyaPradesh" element={<MPState/>} />
          {/* <Route path="/AndamanNicobar" element={<AndamanNicobar />} /> */}
          <Route path="/AndhraPradesh" element={<AndhraPradesh/>} />
          <Route path="/ArunachalPradesh" element={<ArunachalPradesh />} />
          <Route path="/Assam" element={<Assam/>} />
          <Route path="/Bihar" element={<Bihar/>} />
          <Route path="/Chandigarh" element={<Chandigarh />} />
          <Route path="/Chhattisgarh" element={<Chhattisgarh />} />
          <Route path="/Delhi" element={<Delhi />} />
          <Route path="/Goa" element={<Goa />} />
          <Route path="/Gujarat" element={<Gujarat />} />
          <Route path="/HimachalPradesh" element={<HimachalPradesh />} />
          <Route path="/Haryana" element={<Haryana />} />
          <Route path="/Jharkhand" element={<Jharkhand />} />
          <Route path="/JammuKashmir" element={<JammuKashmir />} />
          <Route path="/Kerala" element={<Kerala />} />
          <Route path="/Lakshadweep" element={<Lakshadweep />} />
          <Route path="/Maharashtra" element={<Maharashtra />} />
          <Route path="/Meghalaya" element={<Meghalaya />} />
          <Route path="/Manipur" element={<Manipur />} />
          <Route path="/Odisha" element={<Odisha />} />
          <Route path="/Mizoram" element={<Mizoram />} />
          <Route path="/Nagaland" element={<Nagaland />} />
          <Route path="/Punjab" element={<Punjab />} />
          <Route path="/Puducherry" element={<Puducherry />} />
          <Route path="/Rajasthan" element={<Rajasthan />} />
          <Route path="/Sikkim" element={<Sikkim />} />
          <Route path="/Telangana" element={<Telangana />} />
          <Route path="/TamilNadu" element={<TamilNadu />} />
          <Route path="/Tripura" element={<Tripura />} />
          <Route path="/UttarPradesh" element={<UttarPradesh />} />
          <Route path="/Uttarakhand" element={<Uttarakhand />} />
          <Route path="/WestBengal" element={<WestBengal />} />
        </Routes>
    </Router>
  );
}
// https://youtu.be/vtCGfpjFjlM?si=Go5bGu1l3MKh_ntJ
// https://mui.com/material-ui/react-floating-action-button/

/* 

*/
