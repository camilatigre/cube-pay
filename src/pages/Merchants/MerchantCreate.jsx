
import Grid from '@mui/material/Grid';
// import { getMerchantsApi } from '../../api/api'; 
import './styles.css'
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Typography,
} from '@mui/material';
const MerchantsCreate = () => {
   const navigate = useNavigate();

   const redirectTo = () => {
    navigate("/merchants/create")
  };

    return (
        <Grid container spacing={2} className="create-merchants">
            <Grid item xs={8}>
                <div className='title'>
                    <Typography variant="h3">
                        {'Crie seu primeiro mercante'}
                    </Typography>
                </div>
                <div className='center'>
                    <Button variant="outlined" onClick={redirectTo}>{'Criar mercante'}</Button>
                </div>
            </Grid>
        </Grid>
    )
}

export default MerchantsCreate;