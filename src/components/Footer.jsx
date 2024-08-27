// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, X)

export default function Footer() {
    return (
    <footer className="footer bg-secondary py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-4 text-center">
                    <a href="https://github.com/TEMPTAG" target="_blank" rel="noopener noreferrer" className="text-white">
                    <i className="bi bi-github" style={{ fontSize: '2rem' }}></i>
                    </a>
                </div>
                <div className="col-md-4 text-center">
                    <a href="https://www.linkedin.com/in/ianferguson/" target="_blank" rel="noopener noreferrer" className="text-white">
                    <i className="bi bi-linkedin" style={{ fontSize: '2rem' }}></i>
                    </a>
                </div>
                <div className="col-md-4 text-center">
                    <a href="https://x.com/TEMPTAG_on_X" target="_blank" rel="noopener noreferrer" className="text-white">
                    <i className="bi bi-twitter-x" style={{ fontSize: '2rem' }}></i>
                    </a>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col text-center">
                    <p className="mb-0 fst-italic text-white">&copy; 2024 Ian Ferguson. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
    );
  }