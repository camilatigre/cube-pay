import TopBar from "../commons/TopBar/TopBar";
import PermissionWrapper from "../commons/PermissionWrapper/PermissionWrapper";
import {
    Paper,
    Typography,
    Grid,
    TextField,
    Button
} from '@mui/material';
import useCreateMerchant from './useCreateMerchant'

const MerchantCreateForm = () => {
    const { fields, apiErrors, validationErrors, isLoading, handleInputChange, handleSubmit } = useCreateMerchant({ name: '', type: '', email: '', document: '', phone: '', address: '' });
    return (
         <PermissionWrapper hasPermission={true}>
                <TopBar />
                    
                    <Grid container className="merchants">
                        <Typography
                        variant="h3"
                    >
                        Criar novo mercante
                    </Typography>
                        <Grid item xs={9}>
                            <Paper className="paper-form" elevation={3}>
                            <Grid container>
                                <Grid item md={6}>
                                    <TextField
                                        className="field"
                                        label="Nome *"
                                        variant="outlined"
                                        name="name"
                                        value={fields.name}
                                        onChange={handleInputChange}
                                        error={!!validationErrors.name}
                                        helperText={validationErrors.name}
                                    />
                                </Grid>

                                <Grid item md={6}>
                                    <TextField
                                        className="field field-right"
                                        label="E-mail *"
                                        variant="outlined"
                                        name="email"
                                        value={fields.email}
                                        onChange={handleInputChange}
                                        error={!!validationErrors.email}
                                        helperText={validationErrors.email}
                                    />
                                </Grid>

                                <Grid item md={6}>
                                    <TextField
                                        className="field"
                                        label="Tipo *"
                                        variant="outlined"
                                        name="type"
                                        value={fields.type}
                                        onChange={handleInputChange}
                                        error={!!validationErrors.type}
                                        helperText={validationErrors.type}
                                    />
                                </Grid>

                                <Grid item md={6}>
                                    <TextField
                                        className="field field-right"
                                        label="Documento *"
                                        variant="outlined"
                                        name="document"
                                        value={fields.document}
                                        onChange={handleInputChange}
                                        error={!!validationErrors.document}
                                        helperText={validationErrors.document}
                                        maxLength={11}
                                        minLength={11}
                                    />
                                </Grid>

                                <Grid item md={12}>
                                    <TextField
                                        className="field field-right"
                                        label="Telefone"
                                        variant="outlined"
                                        type="tel"
                                        name="phone"
                                        value={fields.phone}
                                        onChange={handleInputChange}
                                        error={!!validationErrors.phone}
                                        helperText={validationErrors.phone}
                                        
                                    />
                                </Grid>

                                <Grid item md={12}>
                                    <TextField
                                        className="field field-right"
                                        label="Endereço"
                                        variant="outlined"
                                        name="address"
                                        value={fields.address}
                                        onChange={handleInputChange}
                                        error={!!validationErrors.address}
                                        helperText={validationErrors.address}
                                    />
                                </Grid>

                                <div className="error-button">
                                <Grid item md={12} className="api-errors">
                                    {apiErrors._general && (
                                        <Typography variant="body2" color="error" component="p">
                                            {apiErrors._general}
                                        </Typography>
                                    )}
                                </Grid>
                                <Grid item md={6} style={{display: 'flex'}} justifyContent="flex-end">
                                    <Button variant="outlined" onClick={handleSubmit}>{isLoading ? 'Criando...' : 'Criar'}</Button>
                                </Grid>
                                </div>
                            </Grid>
                        </Paper>  
                        </Grid>
                    </Grid>
        </PermissionWrapper>
    )
}

export default MerchantCreateForm