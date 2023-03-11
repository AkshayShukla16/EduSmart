import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/Navibar';
import Homepage from './components/Homepage';
import Study from './components/Study';
import Scholarship from './components/Scholarship';
import Connect from './components/ConnectUs';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/*" element={<Navigate to="/homepage" />}/>
      <Route path="/home" element={<Homepage />} />
      <Route path="/study-material" element={<Study />} />
      <Route path="/scholarship" element={<Scholarship />} />
      <Route path="/connect" element={<Connect />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
