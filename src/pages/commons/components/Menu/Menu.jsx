import {useState} from 'react'
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import {menuItems} from './menuItems'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Menu = () => {
  const [open, setOpen] = useState(false); 
  

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className='menu'>
      <Grid item sm={open ? 2 : 3}>
          <List component="nav" aria-label="menu">
          <ExpandLessIcon onClick={() => setOpen(!open)} />
          {menuItems.map((menuItem, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                {menuItem.icon}
              </ListItemIcon>
              {open && ( 
                <ListItemText primary={menuItem.text} />
              )}
            </ListItem>
          ))}
          {open && ( 
            <Collapse in={open} timeout="auto" unmountOnExit>
              {/* Nested menu content here */}
            </Collapse>
          )}
        </List>
      </Grid>
    </div>
  );
};

export default Menu;