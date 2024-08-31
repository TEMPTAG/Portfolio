// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, X)
// TODO:  Pull styling out of html boody

export default function Footer() {
    return (
        <footer className="footer py-3">
            <div className="container-fluid text-center">
                <div className="d-inline-flex">
                    <a href="https://github.com/TEMPTAG" target="_blank" rel="noopener noreferrer" className="text-dark mx-3">
                        <i className="bi bi-github" style={{ fontSize: '2rem' }}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ianferguson/" target="_blank" rel="noopener noreferrer" className="text-dark mx-3">
                        <i className="bi bi-linkedin" style={{ fontSize: '2rem' }}></i>
                    </a>
                    <a href="https://x.com/TEMPTAG_on_X" target="_blank" rel="noopener noreferrer" className="text-dark mx-3">
                        <i className="bi bi-twitter-x" style={{ fontSize: '2rem' }}></i>
                    </a>
                </div>
                <p className="mt-2 mb-0 fst-italic">&copy; 2024 Ian Ferguson. All rights reserved.</p>
            </div>
        </footer>
    );
}