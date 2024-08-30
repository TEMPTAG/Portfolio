// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

import resumePDF from '../assets/documents/Resume.pdf'; // Assuming your resume PDF is in the assets folder

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
    <main className="container">
      <div className="text-center mb-4">
        <h1>Resume</h1>
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
    </main>
  );
}