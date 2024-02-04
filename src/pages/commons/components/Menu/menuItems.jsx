import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SavingsIcon from '@mui/icons-material/Savings';
import PaymentsIcon from '@mui/icons-material/Payments';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

export const menuItems = [
  {
    text: 'Home',
    icon: <HomeIcon />,
  },
  {
    text: 'Transações',
    icon: <AccountBalanceWalletIcon />
  },
  {
    text: 'Depositos',
    icon: <SavingsIcon />
  },
  {
    text: 'Pagamentos',
    icon: <PaymentsIcon />
  },
  {
    text: 'Histórico de pagamentos',
    icon: <ReceiptLongIcon />
  },
  {
    text: 'Acordos',
    icon: <HandshakeIcon />
  },
  {
    text: 'Configuraçoes',
    icon: <SettingsIcon />
  },
  {
    text: 'Usuários',
    icon: <GroupIcon />
  },
  {
    text: 'Perfil',
    icon: <AccountBoxIcon />
  },
  {
    text: 'Logout',
    icon: <LogoutIcon />
  }
];