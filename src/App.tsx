import React, { createElement } from 'react';
import { Footer } from './HomePage/Footer/Footer';
import { Header } from './HomePage/Header/Header';
import { Main } from './HomePage/Main/Main';
import { TeachersFilter } from './HomePage/Main/TeachersFilter';
import { Routes, Route } from 'react-router-dom';
import { Category } from './HomePage/Main/Category';
import { OnTheMap } from './HomePage/Main/OnTheMap';
import { AboutUs } from './HomePage/Main/AboutUs';
import { Contact } from './HomePage/Main/Contact';
import { Basket } from './HomePage/Shared/Basket/Basket';
import { Catalog } from './HomePage/Shared/Catalog/Catalog';

import '../src/HomePage/Shared/Style/Style.css'
import { TheAddressOfTheLesson } from './Dushboard/TheAddressOfTheLesson/TheAddressOfTheLesson';
import { TeacherProfile } from './Dushboard/TeacherProfile/TeacherProfile';
import { Contacts } from '../src/Dushboard/Contacts/Contacts';
import { PersonalInformation } from './Dushboard/PersonalInformation/PersonalInformation';
import { LessonsSettings } from './Dushboard/LessonsSettings/LessonsSettings';



function App() {
  return (
    <>
      <div className="new_wrapper_new_class" >
        <div>
          <Header />
        </div>
        <div className='main'>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='teachers' element={<TeachersFilter />} />
            <Route path='category' element={<Category />} />
            <Route path='map' element={<OnTheMap />} />
            <Route path='about_us' element={<AboutUs />} />
            <Route path='contact' element={<Contact />} />
            <Route path='basket' element={<Basket />} />
            <Route path='/catalog/:category' element={<Catalog />} />
            <Route path='lesson_address' element={<TheAddressOfTheLesson />} />
            <Route path='/teacher_profile/:id' element={<TeacherProfile />} />
            <Route path='/contacts_dushboard' element={<Contacts />} />
            <Route path='/personal_information' element={<PersonalInformation />} />
            <Route path='/lessons_settings' element={<LessonsSettings />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
