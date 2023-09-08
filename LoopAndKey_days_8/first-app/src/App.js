
import './App.css';
import Header from './componenets/Header';
import Footer from './componenets/Footer';

const click=()=>alert('you clicked');

function ShowMessage(props)
{
  
  if(props.toShow)

  return <h1> This is true</h1>
  else
  return <h1> This is flase</h1>
}

function App() {
  return (
    <div className="App">
     <Header click={click} info="This is my Message" myNumber="6"/>
     
     <p>main contenet</p>
     <Footer trademark="page by ritesh"/>
     <ShowMessage toShow={false}/>
    </div>
  );
}

export default App;
