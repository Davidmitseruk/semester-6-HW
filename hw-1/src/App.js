import Navigation from "./components/nav";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Movies from "./pages/movies";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;