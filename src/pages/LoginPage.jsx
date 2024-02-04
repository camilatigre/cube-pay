import {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TopBar from './commons/components/TopBar/TopBar'
import {
Grid,
TextField,
Typography,
Paper,
Button,
} from '@mui/material'; 
import './styles.css'
import { validateFields } from '../utils/validateFields';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        setCredentials({
        ...credentials,
        [event.target.name]: event.target.value,
        });
        setErrors({});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        validateFields(credentials, setErrors)
    };
  
    return  (
       <div className='login-page'>   
            <TopBar isLoginPage={true} />
            <CssBaseline />
            
            <Container maxWidth="sm">
                <Grid container>
                    <Paper className="wrapper" elevation={3}>
                        <Typography variant="h4">
                            <strong>Login</strong>
                        </Typography>
                        <Grid container>
                            <Grid item md={12}>
                                <TextField
                                label="E-mail"
                                variant="outlined"
                                name="email"
                                value={credentials.email}
                                onChange={handleInputChange}
                                error={!!errors.email}
                                helperText={errors.email}
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                label="Password"
                                variant="outlined"
                                type="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleInputChange}
                                error={!!errors.password}
                                helperText={errors.password}
                                />
                            </Grid>
                            <Grid  container justifyContent="space-around">
                                <Grid item md={6}>
                                    <Button variant="text">Esqueceu a senha?</Button>   
                                </Grid>
                                <Grid item md={6} style={{display: 'flex'}} justifyContent="flex-end">
                                    <Button variant="outlined" onClick={handleSubmit}>Entrar</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
       </div>
    )
}

export default LoginPage;