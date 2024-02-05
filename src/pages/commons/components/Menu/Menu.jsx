import {useState} from 'react'
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import {menuItems} from './menuItems'
import MenuList from './MenuItem';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import './styles.css';

const Menu = () => {
  const [open, setOpen] = useState(false); 
  

  return (
    <div >
      <Grid item sm={open ? 2 : 4} className="menu">
          <List component="nav" aria-label="menu" className='menu-list'>

          <ExpandLessIcon onClick={() => setOpen(!open)} className={open ? 'arrow-right' : 'arrow-left' }/>
          {menuItems.map((menuItem, index) => (
            <MenuList key={index} item={menuItem} index={index} open={!open} />
          ))}
        </List>
      </Grid>
    </div>
  );
};

export default Menu;