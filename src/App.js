import './App.css';
import Header from './components/header/Header.module';
import Home from './components/pages/home/Home.module';
import Teste from './pasta_teste/teste';

function App() {
  return (
    <div className='app'>
      <Header />
      <Home />
      <Teste/>
    </div>
  );
}

export default App;
