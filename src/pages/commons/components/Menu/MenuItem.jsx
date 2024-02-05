
import Link from '@mui/material/Link'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// eslint-disable-next-line react/prop-types
const MenuList = ({ open, index, item }) => {
    const handleClick = (index, item) => {
        if(index === item.id) {
            // save as menu selected in store
        }
    }

    return <div key={index} onClick={() => handleClick(index, item)}>
              <ListItem  className='list-item'>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  {open && ( 
                    <ListItemText primary={item.text} />
                  )}
              </ListItem>
            </div> 
}

export default MenuList