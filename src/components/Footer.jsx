// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, X)

export default function Footer() {
    return (
        <footer class="footer bg-secondary text-white py-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 text-center">
                        <h5>GitHub</h5>
                    </div>
                    <div class="col-md-4 text-center">
                        <h5>LinkedIn</h5>
                    </div>
                    <div class="col-md-4 text-center">
                        <h5>X</h5>
                    </div>
                </div>
                
                <div class="row mt-3">
                    <div class="col text-center">
                        <p class="mb-0 fst-italic">&copy; 2024 Ian Ferguson. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
  }