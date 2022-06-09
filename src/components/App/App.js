import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from '../HomePage/HomePage';

function App() {

  return (
    <div className="App">

      <main className='main'>
        <div className='container'>

          <Router>

            <Header/>

            <Routes>
              <Route path='/' element={<HomePage/>}/>
            </Routes>
            
            <Footer/>
          </Router>  
          
        </div>
      </main>

    </div>
  );
}

export default App;
