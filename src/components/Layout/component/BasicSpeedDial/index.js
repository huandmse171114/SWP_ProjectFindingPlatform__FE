import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import classNames from 'classnames/bind';
import styles from './BasicSpeedDial.module.scss'
import MenuIcon from '@mui/icons-material/Menu';


const cx = classNames.bind(styles);

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(-8),
    right: theme.spacing(-8),
  },
}));

export default function PlaygroundSpeedDial({ actions }) {
  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Box sx={{ position: 'relative', mt: 3}}>
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          icon={<MenuIcon sx={{height: 16, width: 16}}/>}
          direction="down"
        >
          {actions.map((action) => (
            <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={action.handleClick}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}