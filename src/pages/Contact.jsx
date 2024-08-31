// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

import Hero from '../components/UI/Hero';

const hero = {
  title: "contact.",
  description: "I am always excited to hear from you.  Please fill out the form below to get in touch with me.",
  buttonText: "Submit"
};

export default function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div>
          <Hero title={hero.title} description={hero.description} buttonText={hero.buttonText} />
        </div>
        <form className="col">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address:</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea className="form-control" id="message"></textarea>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="newsletterCheck" />
            <label className="form-check-label" htmlFor="newsletterCheck">Add me to your newsletter...</label>
          </div>
          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
      </div>
    </div>
  );
}
  