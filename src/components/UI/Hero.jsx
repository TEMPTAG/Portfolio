// Desc: Hero component for any page

export default function Hero({ title, description, buttonText }) {
    return (
        <div class="p-5 mb-4 bg-body-light shadow rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">{title}</h1>
                <p class="col-md-8 fs-4">{description}</p>
                <button class="btn btn-dark btn-lg" type="button">{buttonText}</button>
            </div>
        </div>
    );
}