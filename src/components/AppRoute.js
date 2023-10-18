import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Supplier from '../pages/Supplier';
import Customers from '../pages/Customers';
import Orders from '../pages/Orders';
import Report from '../pages/Report';
import Logout from '../pages/Logout';
import AddCustomer from '../pages/AddCustomer';
import EditCustomer from '../pages/EditCustomer';

function AppRoute() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='products' element={<Product />}/>
        <Route path='suppliers' element={<Supplier />}/>
        <Route path='customers' element={<Customers />}/>
        <Route path='orders' element={<Orders />}/>
        <Route path='reports' element={<Report />}/>
        <Route path='logout' element={<Logout />}/>
        <Route path='customers/create' element={<AddCustomer />}/>
        <Route path='customers/:id/edit' element={<EditCustomer />}/>
    </Routes>
  )
}
export default AppRoute;