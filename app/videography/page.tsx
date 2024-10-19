import TabSwitcher from "../components/TabSwitcher";

export default function VideographyPage() {
    const aboutVideography = (
        <div>
            <h2>
                Videography Services
            </h2>
                  <p>
        We offer professional videography services for weddings, corporate events, and special occasions.
        Our experienced videographers capture the most important moments with a cinematic touch, ensuring 
        every detail is preserved beautifully.
      </p>
      <p>
        Whether it's promotional video or a product shoot, we work closely with our 
        clients to create high-quality videos that exceed expectations.
      </p>
        </div>
    );

    const bookingForm = (
        <form>
            <h2>Book Videography Services</h2>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <br />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="date">Event Date:</label>
            <input type="date" id="date" name="date" required />

            <label htmlFor="details">Event Details:</label>
            <textarea id="details" name="details" rows={4} required></textarea>
            <br />

            <button type="submit">Submit Booking</button>
        </form>
    )
}