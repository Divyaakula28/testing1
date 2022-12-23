import logo from './logo.svg';
import './App.css';
import React from "react";
import Apps from './Components/Apps';
import Secondpage from "./Components/secondpage";
import Content from "./Components/Content"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {Route, Routes,BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || ''}>
      <Routes>
        <Route exact path='/submagic' element={<Apps/>}Route/>
        <Route   path="/magic_table" element={<Secondpage />} />
        <Route exact path='/' element={<Content/>}Route/> 
      </Routes>
      </BrowserRouter>
  );
}

export default App;
