import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from '../HomePage/HomePage';
import ProductList from '../ProductList/ProductList';

function App() {

  return (
    <div className="App">

      <main className='main'>
        <div className='container'>

          <Router>

            <Header/>

            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='restaurant/:products' element={<ProductList/>}/>
            </Routes>

            <Footer/>
          </Router>  
          
        </div>
      </main>

    </div>
  );
}

export default App;
