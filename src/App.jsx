// GIVEN a single-page application portfolio for a web developer
// WHEN I load the portfolio
// THEN I am presented with a page containing a header, a section for content, and a footer

import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar';
import Footer from './components/UI/Footer';

function App() {
  return (
    <>
    <Nav />
    <Outlet />
    <Footer />
    </>
  );
}

export default App;
