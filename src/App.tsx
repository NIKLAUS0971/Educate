import React, { createElement } from 'react';
import { Footer } from './HomePage/Footer/Footer';
import { Header } from './HomePage/Header/Header';
import { Main } from './HomePage/Main/Main';
import { TeachersFilter } from './HomePage/Main/TeachersFilter';
import {  Routes, Route } from 'react-router-dom';
import { Category } from './HomePage/Main/Category';
import { OnTheMap } from './HomePage/Main/OnTheMap';
import { AboutUs } from './HomePage/Main/AboutUs';
import { Contact } from './HomePage/Main/Contact';
import { Basket } from './HomePage/Shared/Basket/Basket';
import { Catalog } from './HomePage/Shared/Catalog/Catalog';




function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='teachers' element={<TeachersFilter />} />
          <Route path='category' element={<Category />} />
          <Route path='map' element={<OnTheMap />} />
          <Route path='about_us' element={<AboutUs />} />
          <Route path='contact' element={<Contact />} />
          <Route path='basket' element={<Basket />} />
          <Route path='/catalog/:category' element={<Catalog />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
