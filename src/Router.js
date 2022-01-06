import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Signup from './pages/Login/SignUp';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import LogoutButton from './pages/Login/LogoutButton';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/LogoutButton" element={<LogoutButton />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
