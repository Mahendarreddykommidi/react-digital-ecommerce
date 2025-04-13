
import './App.css'




import {Routes, Route} from 'react-router-dom'
import Cart from './pages/Cart'
import About from './pages/About'
import Homepage from './pages/Homepage'
import Products from './pages/Products'
import Navbar from './components/Navbar/Navbar'
import Contact from './pages/Contact'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <div>
      <Navbar/>
   
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
      </Routes>
      <Footer/>
    
  
 

    </div>
  )
}

export default App
