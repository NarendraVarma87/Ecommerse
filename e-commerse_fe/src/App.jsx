import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import SearchResults from './Components/SearchResults';
import CategoryFilter from './Components/CategoryFilter';
import AddProduct from './Components/AddProduct';
import PageNotFound from './Components/PageNotFound';
import CustomerSupport from './Components/CustomerSupport';
import Login from './Components/Login';
import Register from './Components/Register';
import MainComponent from './Components/MainComponent';
import UserProfile from './Components/Userprofile';
import AddToCart from './Components/OrdersCart/AddToCart';

function App() {
  const [username , setUsername] = useState('');
  return (
    <>
      <BrowserRouter>
        <Navbar username={username}/>
        <Routes>
          <Route path='/home' element={<Products />} />
          <Route path='/filter' element={<CategoryFilter />} />
          <Route path='/navigate' element={<SearchResults />} />
          <Route path='/add-product' element={<AddProduct/>}/>
          <Route path="/support" element={<CustomerSupport />} />
          <Route path="/get/:productId" element={<MainComponent/>}/>
          <Route path='/' element={<Login setUsername={setUsername}/>} />
          <Route path='/profile' element={<UserProfile username={username}/>}/>
          <Route path='/register' element={<Register/>} />
          <Route path='/cart' element={<AddToCart/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
