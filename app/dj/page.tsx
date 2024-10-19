import TabSwitcher from '../components/TabSwitcher';

export default function DJPage(){
    const aboutDJ = (
            <div>
      <h2>About the DJ</h2>
      <p>Our DJ services bring the best in entertainment for weddings, corporate events, and private parties. 
      We provide curated playlists tailored to your needs, top-of-the-line audio equipment, and a DJ 
      with years of experience creating memorable moments on the dance floor.</p>
    </div>
    );

    const bookingForm = (
        <form>
            <h2>
                Book the DJ
            </h2>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required/>
            <br />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required/>

            <label htmlFor="date">Event Date:</label>
            <input type="date" id="date" name="date" required />

            <label htmlFor="details">Event Details</label>
            <textarea id="details" name="details" rows={4} required></textarea>

            <br />

            <button type="submit">Submit Booking</button>
        </form>
    );

    return (
        <main>
            <h1>DJ Services</h1>
            <TabSwitcher aboutContent={aboutDJ} bookingForm={bookingForm} />
        </main>
    );
}