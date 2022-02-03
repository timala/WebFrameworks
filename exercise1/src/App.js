import './App.css';
import './components/Header'
import Header from './components/Header';
import Poiminnat from './components/Poiminnat';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <Header />
      <Poiminnat />
      <News />
    </div>
  );
}

export default App;
