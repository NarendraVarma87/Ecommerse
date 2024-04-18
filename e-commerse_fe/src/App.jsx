import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import SearchResults from './Components/SearchResults';
import CategoryFilter from './Components/CategoryFilter';
import AddProduct from './Components/AddProduct';
import PageNotFound from './Components/PageNotFound';
import CustomerSupport from './Components/CustomerSupport';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/filter' element={<CategoryFilter />} />
          <Route path='/navigate' element={<SearchResults />} />
          <Route path='/add-product' element={<AddProduct/>}/>
          <Route path="/support" element={<CustomerSupport />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
