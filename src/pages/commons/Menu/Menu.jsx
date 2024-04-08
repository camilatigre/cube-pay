import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import {menuItems} from './menuItems'
import MenuList from './MenuItem';
import './styles.css';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from '../../../api/api';
import { useNavigate } from 'react-router-dom';
const Menu = () => {
  const navigate = useNavigate()

  const handleSignout = async () => {
    sessionStorage.clear();
    await signOut()
    navigate("/pagtree")
  }
  
  return (
    <div >
      <Grid item className="menu">
          <List component="nav" aria-label="menu" className='menu-list'>
          

          {menuItems.map((menuItem, index) => (
            <MenuList key={index} item={menuItem} index={index} />
          ))}

          <div className='logout' onClick={handleSignout}>
            <ListItem className='list-item'>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
            <ListItemText primary={'Logout'} />
          </ListItem>
          </div>
        </List>
      </Grid>
    </div>
  );
};

export default Menu;