import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home.tsx';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Movies from './pages/movies/Movies.tsx';
import { GlobalStyles } from './styles/globalStyle.tsx';
import Footer from './components/footer/Footer.tsx';

function App() {
   return (
      <BrowserRouter>
         <GlobalStyles />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
}

export default App;
