import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can also send the form data to an API or email service here.
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        {submitted ? (
          <div className="text-center text-green-500">
            <h2 className="text-2xl font-bold">Thank You!</h2>
            <p>Your message has been sent successfully. I’ll get back to you soon!</p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-white text-center">Contact Andrew</h2>
            <p className="text-gray-400 text-center mt-2 mb-6">
              Have an event in mind? Let’s chat and make it unforgettable!
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form fields here */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition transform hover:scale-105"
              >
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
