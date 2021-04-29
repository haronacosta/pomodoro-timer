import './libs/bootstrap-reboot.min.css';
import './App.scss';
import Footer from './components/Footer';
import { Header } from './components/Header';
import { Timer } from './components/Timer';

function App() {
  return (
    <div className="main">
      <div className="wrapper">
        <Header />
        <Timer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
