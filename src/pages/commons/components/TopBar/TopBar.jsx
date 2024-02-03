import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { getDate } from '../../../../utils/getDate'
import Grid from '@mui/material/Grid'; 

import './styles.css'

const TopBar = () => {
    const dateNow = getDate();

    console.log(dateNow)
    return (
        <div className='top-bar'>
            <AppBar position="static">
            <Grid container spacing={2}>

                <Grid xs={6} md={4}>
                    <Item>
                        <Typography
                        variant="h3"
                        >
                            LOGO
                        </Typography>
                    </Item>
                </Grid>

                <Grid xs={6} md={8}>
                    <Grid container spacing={2}>
                        <Grid>
                            <Item>
                        <Typography variant="body1">
                            Nome do Usuário 
                        </Typography>
                    </Item>

                    
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AppBar>
        </div>
    )
}

export default TopBar;