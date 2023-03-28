import "./App.css";
import Header from "./componets/layout/Header";
import Home from "./componets/Home/Home";
import Movie from "./componets/Movie/Movie";
import Series from "./componets/Series/Series";
import NotFound from "./componets/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/series" element={<Series />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
