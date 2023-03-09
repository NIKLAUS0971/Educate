import React, { createElement } from 'react';
import { Footer } from './HomePage/Footer/Footer';
import { Header } from './HomePage/Header/Header';
import { Main } from './HomePage/Main/Main';
import { TeachersFilter } from './HomePage/Main/TeachersFilter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Category } from './HomePage/Main/Category';
import { OnTheMap } from './HomePage/Main/OnTheMap';




function App() {
  return (


    <Router>
      <div>
        <Header /> 
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='teachers' element={<TeachersFilter />} />
          <Route path='category' element={<Category />} />
          <Route path='map' element={<OnTheMap />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
