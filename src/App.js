import logo from './logo.svg';
import './App.css';
import Header from './componets/Header';
import Home from './componets/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from './componets/Movie';
import Series from './componets/Series';
import NotFound from './componets/NotFound';
import Home2 from './componets/Home2';
function App() {
  return (
    // <div className="App">
    //   <Header/>
    //   <br/>
    //   <br/>
    //   <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}/>
    //     <Route path="/movie" element={<Movie />}/>
    //     <Route path="/series" element={<Series />}/>
    //     <Route path="*" element={<NotFound />}/>
    //   </Routes>
    //   </BrowserRouter>
    // </div>
    <div className='App'>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie' element={<Movie/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
