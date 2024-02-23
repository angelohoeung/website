const ContactForm = () => {
  return (
    <form
      action="https://getform.io/f/Qe1g5obJ"
      method="POST"
      className="max-w-lg"
    >
      <input
        type="text"
        name="name"
        className="border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm w-full p-2.5 mb-6"
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        className="border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm w-full p-2.5 mb-6"
        placeholder="Email"
        required
      />
      <textarea
        name="message"
        className="border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm w-full p-2.5 mb-6 h-32"
        placeholder="Your message..."
        required
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
