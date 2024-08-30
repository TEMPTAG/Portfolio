// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories

import PortfolioCards from '../components/UI/PortfolioCards';
import yesChef from '../assets/images/yesChef.jpg';

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
    <main className="container">
      <div className="text-center mb-4">
        <h1>Portfolio Projects</h1>
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
    </main>
  );
}