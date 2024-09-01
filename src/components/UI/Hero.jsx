// Desc: Hero component for any page

export default function Hero({ title, description, buttonText, buttonLink }) {
    return (
        <div className="p-5 mb-4 bg-body-light shadow rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">{title}</h1>
                <p className="col-md-8 fs-4">{description}</p>
                <a href={buttonLink} className="btn btn-dark btn-lg" target="_blank" rel="noopener noreferrer">{buttonText}</a>
            </div>
        </div>
    );
}