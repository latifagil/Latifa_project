import './App.css';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { About } from './pages/about/about';
import { Catalog } from './pages/catalog/catalog';
import { Home } from './pages/home/home';
import { Singleproductpage } from './pages/singleproductpage/singleproductpage';
import { Routes,Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header/>
      <main>
        <div className='container'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/catalog' element={<Catalog/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/catalog/:product_id' element={<Singleproductpage/>}/>
            </Routes>
        </div> 
      </main>
      <Footer/>
  </>
  )
}

 
