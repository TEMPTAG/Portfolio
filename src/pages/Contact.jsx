// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address


export default function Contact() {
  return (
    <main className="flex-grow-1 d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1>Contact Page</h1>
        <p>Coming soon...</p> 
      </div>
    </main>
  );
}
  