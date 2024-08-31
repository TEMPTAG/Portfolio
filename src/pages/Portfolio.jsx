// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories

import Hero from '../components/UI/Hero';
import PortfolioCards from '../components/UI/PortfolioCards';
import yesChef from '../assets/images/yesChef.jpg';

const hero = {
  title: "portfolio.",
  description: "Welcome to my creative space. Here, I bring together technology and innovation to craft web solutions that solve real-world problems.  View the projects below, or visit my GitHub profile to see more of my work.",
  buttonText: "My GitHub Profile"
};

const applications = [
  {
    title: "Yes, Chef!",
    description: "This application helps you select a recipe, generate a shopping list, and guide you through the cooking process.",
    image: yesChef,
    githubLink: "https://github.com/TEMPTAG/Yes-Chef",
    deployedLink: "https://temptag.github.io/Yes-Chef/"
  },
];

export default function Portfolio() {
  return (
    <div className="container">
      <div>
        <Hero title={hero.title} description={hero.description} buttonText={hero.buttonText} />
      </div>
      <div className="d-flex flex-wrap justify-content-around">
        {applications.map((applications, index) => (
          <PortfolioCards
            key={index}
            title={applications.title}
            description={applications.description}
            image={applications.image}
            githubLink={applications.githubLink}
            deployedLink={applications.deployLink}
          />
        ))}
      </div>
    </div>
  );
}