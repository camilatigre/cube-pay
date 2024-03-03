import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import {menuItems} from './menuItems'
import MenuList from './MenuItem';
import './styles.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {useState} from 'react'


const Menu = () => {

  const [checked, setChecked] = useState(false);

  const handleSwitchChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div >
      <Grid item className="menu">
          <List component="nav" aria-label="menu" className='menu-list'>
          <FormControlLabel control={<Switch checked={checked} onChange={handleSwitchChange} inputProps={{ 'aria-label': 'controlled' }}/>} label="Ambiente: Produção" />

          {menuItems.map((menuItem, index) => (
            <MenuList key={index} item={menuItem} index={index} />
          ))}
        </List>
      </Grid>
    </div>
  );
};

export default Menu;