import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import {menuItems} from './menuItems'
import MenuList from './MenuItem';
import './styles.css';

const Menu = () => {

  return (
    <div >
      <Grid item sm={4} className="menu">
          <List component="nav" aria-label="menu" className='menu-list'>
            
          {menuItems.map((menuItem, index) => (
            <MenuList key={index} item={menuItem} index={index} />
          ))}
        </List>
      </Grid>
    </div>
  );
};

export default Menu;