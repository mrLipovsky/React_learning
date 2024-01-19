import { useState } from 'react';

import componentsImages from './assets/components.png';
import { CORE_CONCEPTS } from './data.jsx';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

const person = {
  name: 'John Doe',
  age: 30,
  address: {
   street: '123 Main St',
   city: 'Anytown',
   state: 'Anystate'
  },
 };

 export default function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please click a button');

  function handleSelect(selectedButton){
    //selectedButton = 'Components','JSX', 'Props', 'State' 
    setSelectedTopic(selectedButton);
  }
  return (
    <div className="App">
      <Header></Header>
      <main>
        <section id="core-concepts">
        <h2>Core concept</h2>
        <ul>
          <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}></CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
          <CoreConcept title="Props" description="The core UI building block" image={componentsImages}></CoreConcept>
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
          <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton onSelect={() => handleSelect('jsx')} lable="JSX"> </TabButton>
          <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}




