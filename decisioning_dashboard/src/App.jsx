//Packages
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Components
import NavBar from './components/navBar.jsx';
import Footer from './components/Footer.jsx';

//Pages
import Home from './pages/Home.jsx';
import SummaryData from './pages/SummaryData.jsx';

//Resources used here

function App() {
  return (
    // Use BrowserRouter as Root, to comply with JSX needing a single parent
    <BrowserRouter>  
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary-data" element={<SummaryData />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
