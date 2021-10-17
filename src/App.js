import './App.css';
import Header from './components/Header/Header';
import Team from './components/Team/Team';
import Mission from './components/Mission/Mission';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Mission />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
