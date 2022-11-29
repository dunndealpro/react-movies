import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import MovieListPage from './pages/MoviesListPage/MovieListPage';
import MoviesDetailPage from './pages/MoviesDetailPage/MoviesDetailPage';
import ActorsListPage from './pages/ActorsListPage/ActorsListPage'
import NavBar from './components/NavBar/NavBar'
import { movies } from "./data.js";
// src/data.js


import './App.css';

function App() {
  
  const [user, setUser] = useState(null);

  function newUser(userName){
    setUser(userName)
  }

  return (
   <main className = "App">
     {/* REACT-Movies */}

     { user ?
     <>
    <NavBar user={user}/>
    
     <Routes>
       <Route path='/' element={<MovieListPage/>}/>
       <Route path="/movies/:movieTitle" element={<MoviesDetailPage/>}/>
       <Route path="/actors" element={<ActorsListPage/>}/>
     </Routes>
     </>
     
      :
      <LoginPage newUser = {newUser} />
    }

   </main>
  );
}

export default App;
