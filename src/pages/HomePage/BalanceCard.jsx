import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import EuroIcon from '@mui/icons-material/Euro';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// eslint-disable-next-line react/prop-types
const BalanceCard = ({coin = 'USD', balance = '0'}) => {
    const handleIcon = () => {
        if(coin === 'USD') {
            return <AttachMoneyIcon />
        }
        if(coin === 'EUR') {
            return <EuroIcon />
        }
        if(coin === 'BRL') {
            return `R$`
        }
    }


    return (
        <Card variant="outlined" className='card'>
            <Grid item sm={2} className='icon'>
                {handleIcon()}
            </Grid>
            <Grid item sm={10}>
                <Typography variant="h6">
                    {balance}
                </Typography>
                <Typography variant="body2">
                    {`Balance ${coin}`}
                </Typography>
            </Grid>
        </Card>
    )
}

export default BalanceCard;