
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useSelector, useDispatch} from 'react-redux';
import { changeSelected } from '../../slicers/Menu/slicer';
import { NavLink, useLocation } from "react-router-dom";
import './styles.css'
import { useEffect } from 'react';
// eslint-disable-next-line react/prop-types
const MenuList = ({ index, item }) => {
  const menuSelected = useSelector((state) => state.menu.menuSelected);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleClick = (index, item) => {
      if(index === item.id) {
        dispatch(changeSelected(item.id))
      }
  }

  useEffect(() => {
      if(location.pathname === '/dashboard') {
        dispatch(changeSelected(0))
      }
  }, [])

  return (
    <div key={index} onClick={() => handleClick(index, item)}>
      <NavLink to={item.link} className="link">
        <ListItem className={menuSelected === item.id ? 'list-item list-item-selected' : 'list-item'}>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.text} />
      </ListItem>
      </NavLink>
    </div> 
  )
}

export default MenuList