import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Page1 from './pages/Page_1';
import Page2 from './pages/Page_2';

const App = () => {
  const firstName = "Надія";
  const lastName = "Зорівчак";
  const vilage = "Воловець";
  const hobby = "Гуляти, спати";
  const group = "ІСТ - 3 курс";

  return (
    <div>
      <Header firstName={firstName} lastName={lastName} vilage={vilage} hobby={hobby} group={group} />
      
      <Routes>
        <Route path="/" element={<Page1 vilage={vilage} />} />
        <Route path="/page2" element={<Page2 hobby={hobby} />} />
      </Routes>

      <Footer group={group} />
    </div>
  );
};

export default App;
