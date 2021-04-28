import './App.scss';
import { Header } from './components/Header';
import { Timer } from './components/Timer';

function App() {
  return (
    <div className="main">
      <div className="wrapper">
        <Header />
        <Timer />
      </div>
    </div>
  );
}

export default App;
