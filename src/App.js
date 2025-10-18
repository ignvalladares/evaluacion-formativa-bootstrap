import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import banner from './assets/images/banner.jpg';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <div className="container">

        <div className="row mt-3">
          <div className="col-lg-12">
            <img src={banner}></img>
            <h2>PC Andes</h2>
            
          </div>
        </div>



      </div>
    </div>
  );
}

export default App;
