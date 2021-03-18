// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import MovieList from './component/MovieList.js'
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([{
    title:"Marthen",
    Poster:"movie1.jpg",
    rate:2,
    description:"desc movie1"
  },
  {
    title:"Marocco",
    Poster:"movie2.jpg",
    rate:2,
    description:"desc movie2"
  }
])
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path= "/" component= {MovieList movies={movies}} />
            
    </div>
    </BrowserRouter>
  );
}

export default App;
