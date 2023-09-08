
import './App.css';

import Header from './componenets/Header';
import Footer from './componenets/Footer';
import styled from 'styled-components';
import Numbers from './componenets/Numbers';


const click=()=>alert('you clicked');

function ShowMessage(props)
{
  
  if(props.toShow)

  return <h1> This is true</h1>
  else
  return <h1> This is flase</h1>
}

//Inline Style
const pStyle={
  fontSize:'2em',
  color:'red'

}

//npm install styled-components 
// to use visit this web site https://styled-components.com/

const Paragraph=styled.p`
font-size: 3em;
  color: green;
`;


function App() {
  return (
    <div className="App">
     {
     
     <Numbers/>
     
     
     /* <Header click={click} info="This is my Message" myNumber="6"/>
     
     <p style={pStyle}>main contenet</p>
    <Paragraph>New Style from styled componenet</Paragraph>
     <Footer trademark="page by ritesh"/>
     <ShowMessage toShow={false}/> */}
    </div>
  );
}

export default App;
