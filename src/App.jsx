// GIVEN a single-page application portfolio for a web developer
// WHEN I load the portfolio
// THEN I am presented with a page containing a header, a section for content, and a footer

import { Outlet } from 'react-router-dom';
import Nav from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper d-flex flex-column min-vh-100">
      <Nav />
      <div className="flex-grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
