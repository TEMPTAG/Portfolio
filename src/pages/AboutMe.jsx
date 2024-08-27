// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them

export default function AboutMe() {
    return (
        <main className="flex-grow-1">
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-5 text-center">
                        <img 
                        src="https://avatars.githubusercontent.com/u/170969819?v=4" 
                        alt="Ian Ferguson" 
                        className="img-fluid m-3" 
                        style={{ maxWidth: '600px' }}
                        />
                    </div>
                    <div className="col-md-7">
                        <h1>IAN FERGUSON</h1>
                        <h3>Web Developer & Software Engineer</h3>
                        <p>
                            I am Ian Ferguson, from the always-gorgeous desert of Arizona. With over 20 years of experience in the Automotive and Medical industries. I have journeyed through every corner of the business world, from entry-level Warehouse positions to the heights of Executive leadership, and I am now the proud owner of a few businesses of my own. My expertise spans sales, management, marketing, and operations—essentially, if it has moving parts, I have probably managed it, marketed it, and sold it.
                            <br />
                            <br />
                            My secret to success? Making it ridiculously easy for our customers to do business with us, and for us to do business with them. Seriously, I have made it my mission.
                            <br />
                            <br />
                            As the world shifts further into online purchasing, I have decided to hit the books again—web development books, that is. I am diving into the digital world to make our customer experience smoother than a car with a fresh ceramic coating. Through my studies, I aim to bridge the gap between the sales processes of modern business and developers, ensuring that technology works seamlessly for everyone… all in the continuation of my mission. This portfolio is a showcase of projects completed during my studies. So, buckle up and enjoy the ride!
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
