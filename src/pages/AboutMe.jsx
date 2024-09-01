// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them

// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them

import profilePhoto from '../assets/images/profilePhoto.jpg';

export default function AboutMe() {

    return (
    <div className="container">
        <div className="row">
            <div className="col">
                <img src={profilePhoto} alt="Ian Ferguson" className=""/>
            </div>
            <aside className="col">
                <h1 class="display-5 fw-bold">{`ianferguson.`}</h1>
                <h3>Web Developer</h3>
                <p>
                    I am Ian Ferguson, based in the stunning deserts of Arizona. With over 20 years of experience across the Automotive and Medical industries, I have been deeply involved in every aspect of the product lifecycle—from concept and development to marketing, sales, and operations. My career has seen me grow from entry-level roles to executive leadership, and today, I am the proud owner of several businesses. Throughout my journey, I have honed my expertise in making it effortless for customers to do business with us, and for us to do business with them.
                </p>
                <p>
                    As the business landscape continues to evolve, I have leveraged my extensive experience to integrate technology that enhances customer interactions and streamlines operations. My work is a testament to my commitment to bridging the gap between traditional business processes and modern digital solutions. Explore my portfolio to see how I have brought this vision to life.
                </p>
            </aside>
        </div>
    </div>
    );
}