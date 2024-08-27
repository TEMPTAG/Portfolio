import Navbar from './UI/Navbar';

export default function Header() {
  const links = [
    { title: "About Me", to: "/" },
    { title: "Portfolio", to: "/portfolio" },
    { title: "Contact", to: "/contact" },
    { title: "Resume", to: "/resume" },
  ];

  return <Navbar links={links} />;
}