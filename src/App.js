import './App.css';
import Header from './components/Header';
import Edad from './components/Edad';

function App() {
  return (
    <div className="App">
      <Header title='Calculadora de Edad'/>
      <Edad />
    </div>
  );
}

export default App;
