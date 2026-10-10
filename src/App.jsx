import { Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header/Header.jsx";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { MoviesPage } from "./pages/MoviesPage/MoviesPage.jsx";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </>
  )
}

export default App