import React from 'react'
import NavBar from '../NavBar1'
import { Box } from '@mui/material'

export default function Odisha() {
  return (
    <>
      <Box>
        <NavBar/>
      </Box>
      <div style={{display:'flex'}}>
        <div>
          {/* <img src={img} alt="" /> */}
          <h1>Karnataka </h1>
        </div>
        <div>
          <h1>............. text .................</h1>
        </div>
      </div>

      <div>
        <h1>State language</h1>
        <h1>State Food</h1>
      </div>

      <div>
        <h1>Two button for Catogery</h1>
        <div>
        <button>Male</button><button>Female</button>
        <p>in button insert the image of traditional dress</p>
        </div>
        <p>vedio clip of the state traditional include the festival vedio</p>
      </div>

      <h1>The end</h1>

    </>
  )
}
