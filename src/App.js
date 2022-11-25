import './App.css';
import Header from './components/Header';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Header title='Calculadora de Edad'/>
      <Calculator />
    </div>
  );
}

export default App;
