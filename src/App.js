import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
import './App.css';

const App = () => {

  return (
    <Router>

      <Navbar />

      <AnimatedRoutes />

      <Footer />

    </Router>
  );
}

export default App;
