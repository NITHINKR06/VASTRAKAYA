// import './App.css';
import StateRouter from './Router/StateRouter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function App() {
  return (
    <div className="App" onContextMenu={(e) => e.preventDefault()}  >
      <header className="App-header">
        {/* Your header content */}
      </header>
      <StateRouter />

      {/* <Box sx={{ }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{
            position: 'fixed',
            bottom: '18px',
            right: '16px',
            zIndex: 1, // Ensure it's on top of other content
          }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box> */}
    </div>
  );
}


// https://blog.mirraw.com/2024/02/11/traditional-dresses-of-indian-states-and-union-territories/