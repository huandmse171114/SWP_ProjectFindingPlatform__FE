import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CategoryIcon from '@mui/icons-material/Category';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>  
    <Link to='/dashboard/members'>
      <ListItemButton>
        <ListItemIcon>
          <PersonOutlineIcon />
        </ListItemIcon>
          <ListItemText primary="Members" />
      </ListItemButton>
    </Link>

    <Link to='/dashboard/accounts'>
      <ListItemButton>
        <ListItemIcon>
          <AccountTreeIcon />
        </ListItemIcon>
          <ListItemText primary="Accounts" />
      </ListItemButton>
    </Link>

    <Link to='/dashboard/skills'>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
          <ListItemText primary="Skills" />
      </ListItemButton>
    </Link>

    <Link to='/dashboard/categories'>
      <ListItemButton>
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
          <ListItemText primary="Categories" />
      </ListItemButton>
    </Link>

    <Link to='/dashboard/majors'>
      <ListItemButton>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
          <ListItemText primary="Majors" />
      </ListItemButton>
    </Link>

  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);