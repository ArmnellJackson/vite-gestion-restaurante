import './App.css';
import Beneficios from './components/Beneficios';
import Caracteristicas from './components/Caracteristicas';
import ComoFunciona from './components/ComoFunciona';
import Footer from './components/Footer';
import Header from "./components/Header";

function App() {

  return (
    <>
      <Header />
      <Caracteristicas />
      <Beneficios />
      <ComoFunciona />
      <Footer />
    </>
  )
}

export default App;