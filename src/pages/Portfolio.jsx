// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories

import Hero from '../components/UI/Hero';
import PortfolioCards from '../components/UI/PortfolioCards';
import yesChef from '../assets/images/yesChef.jpg';
import rockPaperScissors from '../assets/images/rockPaperScissors.jpg';
import blog from '../assets/images/blog.jpg';
import employeeTracker from '../assets/images/employeeTracker.jpg';
import basicPortfolio from '../assets/images/basicPortfolio.jpg';
import horiseon from '../assets/images/horiseon.jpg';

const hero = {
  title: "portfolio.",
  description: "Welcome to my creative space. Here, I bring together technology and innovation to craft web solutions that solve real-world problems.  View the projects below, or visit my GitHub profile to see more of my work.",
  buttonText: "My GitHub Profile",
  buttonLink: "https://github.com/TEMPTAG"
};

const applications = [
  {
    title: "Yes, Chef!",
    description: "This application helps you select a recipe, generate a shopping list, and guide you through the cooking process.",
    image: yesChef,
    githubLink: "https://github.com/TEMPTAG/Yes-Chef",
    deployedLink: "https://temptag.github.io/Yes-Chef/"
  },
  {
    title: "Rock, Paper, Scissors",
    description: "A simple game of Rock, Paper, Scissors... with a familiar theme.",
    image: rockPaperScissors,
    githubLink: "https://github.com/TEMPTAG/rock-paper-scissors",
    deployedLink: "https://temptag.github.io/rock-paper-scissors/"
  },
  {
    title: "Simple Blog Site",
    description: "Challenge Module 4",
    image: blog,
    githubLink: "https://github.com/TEMPTAG/Challenge-Module-4",
    deployedLink: "https://temptag.github.io/Challenge-Module-4/"
  },
  {
    title: "Employee Tracker",
    description: "Challenge Module 3",
    image: employeeTracker,
    githubLink: "https://github.com/TEMPTAG/Challenge-Module-3",
    deployedLink: "https://temptag.github.io/Challenge-Module-3/"
  },
  {
    title: "Basic Portfolio",
    description: "Elegent single-page portfolio website using simple Semantic HTML and interactive CSS.",
    image: basicPortfolio,
    githubLink: "https://github.com/TEMPTAG/Basic-Portfolio",
    deployedLink: "https://temptag.github.io/Basic-Portfolio/"
  },
  {
    title: "Horiseon",
    description: "Basic single-page semantic HTML website for a Marketing Agency.",
    image: horiseon,
    githubLink: "https://github.com/TEMPTAG/Horiseon-Social-Solution-Services",
    deployedLink: "https://temptag.github.io/Horiseon-Social-Solution-Services/"
  }
];

export default function Portfolio() {
  return (
    <div className="container">
      <div>
        <Hero title={hero.title} description={hero.description} buttonText={hero.buttonText} buttonLink={hero.buttonLink}/>
      </div>
      <div className="d-flex flex-wrap justify-content-around">
        {applications.map((applications, index) => (
          <PortfolioCards
            key={index}
            title={applications.title}
            description={applications.description}
            image={applications.image}
            githubLink={applications.githubLink}
            deployedLink={applications.deployedLink}
          />
        ))}
      </div>
    </div>
  );
}