import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FuntionalGreeting';
import FunctionalGreetingWithProps from './components/FuntionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="John" age="33 "/>
    </div>
  );
}

export default App;
