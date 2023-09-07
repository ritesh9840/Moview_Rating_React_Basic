
import './App.css';
import Header from './componenets/Header';
import Footer from './componenets/Footer';

const click=()=>alert('you clicked');

function App() {
  return (
    <div className="App">
     <Header click={click} info="This is my Message" myNumber="6"/>
     
     <p>main contenet</p>
     <Footer trademark="page by ritesh"/>
    </div>
  );
}

export default App;
