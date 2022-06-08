import usePageData from '../../custom-hooks/usePageData';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import './App.scss';

function App() {

  const data = usePageData('foodBand');

  return (
    <div className="App">
      
      <Header/>

      <main className='main'>
        <div className='container'>
          <Banner/>
        </div>
      </main>

    </div>
  );
}

export default App;
