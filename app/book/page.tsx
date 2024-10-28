
export default function BookPage() {
  return (
    <div>
      <h2>Book Andrew Kamen</h2>
      <p>Ready to make your event unforgettable? Fill out the form below to secure your booking!</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />

        <label htmlFor="event-type">Event Type:</label>
        <select id="event-type" name="event-type" required>
          <option value="wedding">Wedding</option>
          <option value="corporate">Corporate Event</option>
          <option value="private">Private Party</option>
        </select>
        <br />

        <label htmlFor="event-date">Event Date:</label>
        <input type="date" id="event-date" name="event-date" required />
        <br />

        <label htmlFor="details">Additional Details:</label>
        <textarea id="details" name="details" rows={4} required></textarea>
        <br />

        <button type="submit" className="cta">Submit Booking</button>
      </form>
    </div>
  );
}
