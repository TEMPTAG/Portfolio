export default function PortfolioCards({ title, description, image, githubLink, deployedLink }) {
    return (
      <div className="card m-3" style={{ width: '18rem' }}>
        <img src={image} className="card-img-top" alt={`${title} Screenshot`} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={githubLink} className="btn btn-dark mb-2" target="_blank" rel="noopener noreferrer">
            See the Code on GitHub
          </a>
          <a href={deployedLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            View Deployed App
          </a>
        </div>
      </div>
    );
  }