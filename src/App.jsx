// GIVEN a single-page application portfolio for a web developer
// WHEN I load the portfolio
// THEN I am presented with a page containing a header, a section for content, and a footer

import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar';
import Footer from './components/UI/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
    <Nav />
    <main className="flex-grow-1">
      <Outlet />
    </main>
    <Footer />
    </div>
  );
}

export default App;
