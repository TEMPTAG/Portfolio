// TODO: Pull the styling out of the HTML body

export default function PortfolioCards({ title, description, image, githubLink, deployedLink }) {
  return (
  <div className="card shadow m-3 border-0" style={{ width: '18rem' }}>
    <img src={image} className="card-img-top" alt={`${title} Screenshot`} />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <div className="mt-auto d-flex flex-column align-items-center">
        <a href={githubLink} className="btn btn-dark mb-2" target="_blank" rel="noopener noreferrer">
          See the Code on GitHub
        </a>
        <a href={deployedLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
          View Deployed App
        </a>
      </div>
    </div>
  </div>
  );
}