// Desc: Icon cards for Resume Proficiencies

export default function Icon({ icon, title }) {
    return (
    <div className="card text-center mb-3" style={{ width: '8rem' }}>
        <div className="card-body">
            <i className={icon} style={{ fontSize: '3rem' }}></i>
            <h5 className="card-title">{title}</h5>
        </div>
    </div>
    );
}