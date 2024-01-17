import reactImages from './assets/react-core-concepts.png';
import componentsImages from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';

const reactNames = ['Daniel', 'Thiago', 'João', 'Maria', 'José', 'Pedro'];

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function Header() {
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

const person = {
  name: 'John Doe',
  age: 30,
  address: {
   street: '123 Main St',
   city: 'Anytown',
   state: 'Anystate'
  },
 };

 function CoreConcept({image, title, description}) {
   return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
   )
 }

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <section id="core-concepts">
        <h2>Core concept</h2>
        <ul>
          <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}></CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
          <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}></CoreConcept>
          <CoreConcept title="Props" description="The core UI building block" image={componentsImages}></CoreConcept>
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;


