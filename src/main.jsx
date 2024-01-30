import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home/home.jsx';
import Details from './pages/Details/details.jsx';
import Search from './pages/Search/search.jsx';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='search' element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
