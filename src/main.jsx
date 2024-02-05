import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { Provider } from 'react-redux';
import './index.css'
import {store} from './store';
import TransactionsPage from './pages/TransactionsPage';

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<HomePage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
