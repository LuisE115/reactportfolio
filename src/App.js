import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import cardimg from './images/pp.jpg';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='container row'>
        <div className="card col-sm-4">
          <img className="card-img-top" src={cardimg} alt="Luis smiling" />
          <div className="card-body">
            <h2>Luis Enriquez</h2>
            <p>Web Developer</p>
          </div>
        </div>
        <div className="col-sm-8">
          <Container />
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default App;
