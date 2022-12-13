import './App.css';
// import FunctionalGreeting from './components/FuntionalGreeting';
// import FunctionalGreetingWithProps from './components/FuntionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import EventsClass from './components/EventsClass';
// import EventsFunctional from './components/EventsFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';

function App() {
  return (
    <div className="App">
      <ConditionalRenderingFunctional connected={true} />
      <ConditionalRenderingClass/>
    </div>
  );
}

export default App;
