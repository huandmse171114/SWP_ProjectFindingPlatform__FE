import * as React from 'react';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
import { Paper } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const data = [
  { icon: <People />, label: 'Authentication' },
  { icon: <Dns />, label: 'Database' },
  { icon: <PermMedia />, label: 'Storage' },
  { icon: <Public />, label: 'Hosting' },
];

export default function CustomList({ label, type }) {
  const [open, setOpen] = React.useState(true);
  return (
    <Paper>
        <Box
            sx={{
            pb: open ? 2 : 0,
            }}
        >
            <ListItemButton
            alignItems="flex-start"
            onClick={() => setOpen(!open)}
            sx={{
                px: 3,
                pt: 2.5,
                pb: open ? 0 : 2.5,
                '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
            }}
            >
            <ListItemText
                primary={label}
                primaryTypographyProps={{
                fontSize: 15,
                fontWeight: 'medium',
                lineHeight: '20px',
                mb: '2px',
                }}
                secondary="Filter FindHub projects by it's category"
                secondaryTypographyProps={{
                noWrap: true,
                fontSize: 12,
                lineHeight: '16px',
                color: open ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.2)',
                }}
                sx={{ my: 0 }}
            />
            <KeyboardArrowDown
                sx={{
                mr: -1,
                opacity: 0,
                transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                transition: '0.2s',
                }}
            />
            </ListItemButton>
            <Grid2 container>
                {open &&
                data.map((item, index) => (
                    <Grid2 key={index} lg={6}>
                        <FormControlLabel
                            value="Information"
                            control={<Checkbox />}
                            label="Information"
                            labelPlacement="start"
                        />
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    </Paper>
  );
}