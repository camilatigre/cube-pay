import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import Merchants from './pages/Merchants/Merchants'
import MerchantsCreateForm from './pages/Merchants/MerchantCreateForm'
import Transactions from './pages/Transactions/Transactions';
import Charges from './pages/Charges/Charges';
import Register from './pages/Register/Register';
import TransactionsByWallet from './pages/Transactions/TransactionsByWallet';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { Provider } from 'react-redux';
import './index.css'
import {store} from './store';


const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/merchants" element={<Merchants />} />
            <Route path="/merchants?/create" element={<MerchantsCreateForm />} />
            <Route path="/dashboard?/:id" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/transactions?/:walletId" element={<TransactionsByWallet />} />
            <Route path="/charges" element={<Charges />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
