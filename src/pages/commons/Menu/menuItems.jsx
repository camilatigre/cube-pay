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
    id: 0,
    text: 'Home',
    icon: <HomeIcon />,
    link: '/dashboard',
  },
  {
    id: 1,
    text: 'Merchants',
    icon: <SavingsIcon />,
    link: '/merchants'
  },
  {
    id: 2,
    text: 'Depositos',
    icon: <SavingsIcon />,
    link: '/deposit'
  },
  {
    id: 3,
    text: 'Pagamentos',
    icon: <PaymentsIcon />,
    link: '/payout'
  },
  {
    id: 4,
    text: 'Configuraçoes',
    icon: <SettingsIcon />,
    link: '/settings'
  },
  {
    id: 5,
    text: 'Logout',
    icon: <LogoutIcon />,
    link: '',
  }
];

// export const menuItems = [
//   {
//     id: 0,
//     text: 'Home',
//     icon: <HomeIcon />,
//     link: '/dashboard',
//   },
//   {
//     id: 1,
//     text: 'Transações',
//     icon: <AccountBalanceWalletIcon />,
//     link: '/transactions'
//   },
//   {
//     id: 2,
//     text: 'Depositos',
//     icon: <SavingsIcon />,
//     link: '/deposit'
//   },
//   {
//     id: 3,
//     text: 'Pagamentos',
//     icon: <PaymentsIcon />,
//     link: '/payout'
//   },
//   {
//     id: 4,
//     text: 'Histórico de pagamentos',
//     icon: <ReceiptLongIcon />,
//     link: '/payout-history'
//   },
//   {
//     id: 5,
//     text: 'Acordos',
//     icon: <HandshakeIcon />,
//     link: '/settlements'
//   },
//   {
//     id: 6,
//     text: 'Configuraçoes',
//     icon: <SettingsIcon />,
//     link: '/settings'
//   },
//   {
//     id: 7,
//     text: 'Usuários',
//     icon: <GroupIcon />,
//     link: ''
//   },
//   {
//     id: 8,
//     text: 'Perfil',
//     icon: <AccountBoxIcon />,
//     link: ''
//   },
//   {
//     id: 9,
//     text: 'Logout',
//     icon: <LogoutIcon />,
//     link: '',
//   }
// ];