
import Grid from '@mui/material/Grid';
// import { getMerchantsApi } from '../../api/api'; 
import './styles.css'
import { useState} from "react";
import {
    Button,
    Typography
} from '@mui/material';
const MerchantsPage = () => {
    const [apiErrors, setApiErrors] = useState({});
   

    return (
        
        <Grid container spacing={2} className="create-merchants">
            <Grid item xs={8}>
                <div className='title'>
                    <Typography variant="h3">
                        {'Crie seu primeiro mercante'}
                     </Typography>
                </div>
                <div className='center'>
                    <Button variant="outlined" onClick={() => console.log()}>{'Criar mercante'}</Button>
                </div>
            </Grid>
        </Grid>
    )
}

export default MerchantsPage;