import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home.tsx';
import Login from '@pages/Login';
import Signup from '@pages/Signup';
import Movies from '@/pages/Movies.tsx';
import Series from '@pages/Series.tsx';
import Error from '@pages/Error.tsx';
import MediaDetails from '@pages/mediaDetails/MediaDetails.tsx';
import Bookmarks from '@pages/Bookmarks.tsx';
import { GlobalStyles } from './styles/globalStyle.tsx';
import Footer from '@components/footer/Footer.tsx';
import { AuthProvider } from '@/context/AuthContext.tsx';
import { BookmarkProvider } from '@/context/BookmarksContext.tsx';

function App() {
   return (
      <AuthProvider>
         <BookmarkProvider>
            <BrowserRouter>
               <GlobalStyles />
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/movies" element={<Movies />} />
                  <Route path="/tv" element={<Series />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/:type/:id" element={<MediaDetails />} />
                  <Route path="*" element={<Error />} />
                  <Route path="/Error" element={<Error />} />
                  <Route path="/bookmarks" element={<Bookmarks />} />
               </Routes>
               <Footer />
            </BrowserRouter>
         </BookmarkProvider>
      </AuthProvider>
   );
}

export default App;
