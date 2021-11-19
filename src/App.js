import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import {useRef} from 'react';
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Landmarks from "./pages/Landmarks"
import Show from './pages/Show'

import './App.scss';

function App() {


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/landmarks' element={<Landmarks />} />
        <Route path='/landmarks/:id' element={<Show />}/>
      </Routes>
      
    </div>
  );
}

export default App;
