
import './App.css';
import Header from './componenets/Header';
import Footer from './componenets/Footer';

function App() {
  return (
    <div className="App">
     <Header info="This is my Message" myNumber="6"/>
     
     <p>main contenet</p>
     <Footer trademark="page by ritesh"/>
    </div>
  );
}

export default App;
