import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { getDate } from '../../../utils/getDate'
import Grid from '@mui/material/Grid'; 

import './styles.css'

// eslint-disable-next-line react/prop-types
const TopBar = ({ isLoginPage = false }) => {
    const dateNow = getDate();
    return (
        <div>
            <AppBar position="static" className='top-bar'>
                <Grid container alignItems="center">

                    <Grid item xs={5} md={5}>
                        <Typography
                        variant="h3"
                        >
                            PagTree
                        </Typography>
                    </Grid>

                    <Grid item xs={7} md={7} alignItems="center">
                        {!isLoginPage ? <Grid container justifyContent="flex-end">
                            <Grid item xs={3} md={3}>
                                <Typography variant="body1">
                                    Nome do Usuário 
                                </Typography>
                            </Grid>
                            <Grid item xs={5} md={5}>
                                <Typography variant="body1">
                                    {dateNow} 
                                </Typography>
                            </Grid>
                        
                        </Grid> : ''}
                    </Grid>
                </Grid>
            </AppBar>
        </div>
    )
}

export default TopBar;