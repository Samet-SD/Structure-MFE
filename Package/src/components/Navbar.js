
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { items } from './consts/items';
import { styles } from "./styles/styles"
import { Link } from 'react-router-dom';

const Navbar = () => {
   
 

    return (
    <Drawer
    sx={styles.drawer}
    variant="permanent"
    anchor="left"
  >
    <Toolbar />
    <Divider />
    <List>
      {items.map((item, index) => (
        <ListItem 
        key={item.id} 
        disablePadding
        >
          <ListItemButton>
            <ListItemIcon sx={styles.icons}>
              {item.icon}
            </ListItemIcon>
            <Link to = {item.route} relative="path">
            <ListItemText 
            sx={styles.text}
            primary={item.label} />
            </Link>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    
  </Drawer>
    )
}

export default Navbar
