import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import {menuItems} from './menuItems'
import MenuList from './MenuItem';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { saveEnvSelectedId, saveSwitchValue } from '../../../slicers/Dashboard/slicer';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from '../../../api/api';
import {useNavigate} from 'react-router-dom'
const Menu = () => {

  const navigate = useNavigate();
  const envs = useSelector((state) => state.dashboard);
  const dispatch = useDispatch()

  const handleSwitchChange = (event) => {
    dispatch(saveSwitchValue(event.target.checked))
    if(event.target.checked){
      console.log(event.target.checked)
      dispatch(saveEnvSelectedId(envs.envs.liveEnv.id))
      
    } else {
      dispatch(saveEnvSelectedId(event.target.checked))
    }
  };

  const handleSignout = async () => {
    sessionStorage.clear();
    await signOut()
    navigate("/")
  }
  
  return (
    <div >
      <Grid item className="menu">
          <List component="nav" aria-label="menu" className='menu-list'>
          <FormControlLabel control={<Switch checked={envs.switchValue} onChange={handleSwitchChange} inputProps={{ 'aria-label': 'controlled' }}/>} label="Ambiente: Produção" />

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