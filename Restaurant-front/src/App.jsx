import './App.css'
import HomePage from './components/homePage/homePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Book_a_table from './components/book a table/book_a_table';
import PanierPage from './components/PanierPage/PanierPage';
import Signup from './components/Signup/Signup'
import Booking1 from './components/Booking1/Booking1';
import Login from './components/Login/Login';


function App() {


  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/Book-a-table" element={<Book_a_table />} />
      <Route path='/Panier' element={<PanierPage />} />
      <Route path ='/Signup' element={ <Signup /> } />
      <Route path= "/booking" element={<Booking1 />} />
      <Route path='Signin' element={<Login />} />
      </Routes>
     
    </Router>
      
    </>
  )
}

export default App
