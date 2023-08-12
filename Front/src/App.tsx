import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { GlobalStyles } from './styles/globalStyle.tsx';


function App() {
  return (
        <BrowserRouter>
        <GlobalStyles/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/login" element={ <Login/> } />
                <Route path="/signup" element={ <Signup/> } />
            </Routes>
        </BrowserRouter>
  )
}

export default App
