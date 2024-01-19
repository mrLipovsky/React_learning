import reactImages from '../../../src/assets/react-core-concepts.png';
import './Header.css';


const reactNames = ['Daniel', 'Thiago', 'João', 'Maria', 'José', 'Pedro'];

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const randomNames = reactNames[getRandomNumber(2)];
  
    return (
      <header className="App-header">
      <img src={reactImages} /> 
      <h1> {randomNames} learn react essencial</h1>
      <p>Edit and save to reload.</p>
      <a>Learn React</a>
    </header>
    );
  };

