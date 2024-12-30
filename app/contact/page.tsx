export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white text-center">Contact Andrew</h2>
        <p className="text-gray-400 text-center mt-2 mb-6">
          Have an event in mind? Let’s chat and make it unforgettable!
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 bg-gray-900 text-gray-300 rounded-lg border border-gray-700 focus:ring-amber-500 focus:border-amber-500"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 bg-gray-900 text-gray-300 rounded-lg border border-gray-700 focus:ring-amber-500 focus:border-amber-500"
              placeholder="Your email address"
              required
            />
          </div>

          <div>
            <label htmlFor="event" className="block text-sm font-medium text-gray-300">
              Event Details
            </label>
            <textarea
              id="event"
              name="event"
              rows={4}
              className="mt-1 block w-full px-4 py-2 bg-gray-900 text-gray-300 rounded-lg border border-gray-700 focus:ring-amber-500 focus:border-amber-500"
              placeholder="Tell me about your event..."
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
