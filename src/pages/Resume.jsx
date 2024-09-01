// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

// TODO:  Make proficiency cards with icons

import Hero from '../components/UI/Hero';
import resumePDF from '../assets/documents/Resume.pdf';
import Icon from '../components/UI/IconCards';

const hero = {
  title: "resume.",
  description: "Combining years of business leadership with technical proficiency, this page offers a comprehensive look at the skills and experience that define my career...",
  buttonText: "Download My Resume",
  buttonLink: resumePDF
};

const proficiencies = [
  { icon: "bi bi-git", title: "git" },
  { icon: "bi bi-code-slash", title: "OOP" },
  { icon: "bi bi-database", title: "SQL" },
  { icon: "bi bi-filetype-js", title: "JavaScript" },
  { icon: "bi bi-filetype-json", title: "JSON" },
  { icon: "bi bi-bootstrap", title: "Bootstrap" },
  { icon: "bi bi-node", title: "Node.js" },
  { icon: "bi bi-type", title: "TypeScript" },
  { icon: "bi bi-layers", title: "REST APIs" },
  { icon: "bi bi-server", title: "SSP" },
  { icon: "bi bi-file-code", title: "HTML5" },
  { icon: "bi bi-filetype-css", title: "CSS" },
  { icon: "bi bi-arrows-move", title: "Fetch" },
  { icon: "bi bi-arrow-repeat", title: "AJAX" },
  { icon: "bi bi-terminal", title: "CLI" },
  { icon: "bi bi-filetype-jsx", title: "React" },
  { icon: "bi bi-cloud-arrow-up", title: "APIs" },
  { icon: "bi bi-code-slash", title: "Tailwind" }
];

export default function Resume() {
  return (
    <div className="container">
      <div>
        <Hero title={hero.title} description={hero.description} buttonText={hero.buttonText} buttonLink={hero.buttonLink}/>
      </div>
      <div>
        <h2>codingProficiencies.</h2>
        <div className="row justify-content-center">
          {proficiencies.map((proficiency, index) => (
            <Icon key={index} icon={proficiency.icon} title={proficiency.title} />
          ))}
        </div>
      </div>
    </div>
  );
}