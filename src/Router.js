import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import LogoutButton from './pages/Login/LogoutButton';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/LogoutButton" element={<LogoutButton />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/detail" element={<ProductDetail />}>
          <Route path=":product_id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
