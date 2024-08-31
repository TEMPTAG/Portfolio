// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

// TODO:  Make proficiency cards with icons

import Hero from '../components/UI/Hero';
import resumePDF from '../assets/documents/Resume.pdf'; // Assuming your resume PDF is in the assets folder

const hero = {
  title: "resume.",
  description: "I am a full-stack web developer with a passion for creating innovative solutions to real-world problems.  My skills include...",
  buttonText: "Download My Resume"
};

export default function Resume() {
  const codingProficiencies = [
    "Object-Oriented Programming (OOP)",
    "SQL",
    "TypeScript",
    "Node.js",
    "REST APIs",
    "Git",
    "JSON",
    "Fetch",
    "AJAX",
    "Server Side JavaScript",
    "Server Side Programming",
    "Server Side",
    "Web Services API",
    "Tailwind CSS",
    "Bootstrap (Framework)",
    "Developer Tools",
    "CLI",
    "JavaScript",
    "Cascading Style Sheets (CSS)",
    "HTML5",
    "Pseudocode"
  ];

  return (
    <div className="container">
      <div>
        <Hero title={hero.title} description={hero.description} buttonText={hero.buttonText} />
      </div>
      <div className="text-center mb-4">
        <a href={resumePDF} download="Ian_Ferguson_Resume.pdf" className="btn btn-dark mb-4">
          Download My Resume
        </a>
      </div>
      <div>
        <h2>Coding Proficiencies</h2>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-group">
              {codingProficiencies.slice(0, Math.ceil(codingProficiencies.length / 2)).map((skill, index) => (
                <li key={index} className="list-group-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-group">
              {codingProficiencies.slice(Math.ceil(codingProficiencies.length / 2)).map((skill, index) => (
                <li key={index} className="list-group-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}