//-----------
//Packages
//-----------
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//-----------
//Components
//-----------
import NavBar from './components/navBar.jsx';
import Footer from './components/Footer.jsx';

//-----------
//Pages
//-----------
import Home from './pages/Home.jsx';
import SummaryData from './pages/SummaryData.jsx';
import ReactDefault from './pages/ReactDefault.jsx'


////needed to resolve complie errors from Libaries, by using Polyfils
//// import webpackConfigJs from './webpack.config.js';


function App() {
  return (
    // Use BrowserRouter as Root, to comply with JSX needing a single parent
    <BrowserRouter>  
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary-data" element={<SummaryData />} />
        <Route path="/react-default" element={<ReactDefault />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
