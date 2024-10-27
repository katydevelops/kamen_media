// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div>
      <h2>Contact Andrew</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />

        <label htmlFor="event">Event Details:</label>
        <textarea id="event" name="event" rows={4} required></textarea>
        <br />

        <button type="submit" className="cta">Submit</button>
      </form>
    </div>
  );
}
