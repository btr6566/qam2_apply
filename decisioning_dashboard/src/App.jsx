//Packages
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Pages
import Home from './pages/Home.jsx';

//Resources used here

function App() {
  return (
    // Use BrowserRouter as Root, to comply with JSX needing a single parent
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
