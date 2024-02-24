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
        className="mb-6 w-full rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-sm dark:border-gray-700 dark:bg-gray-800"
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        className="mb-6 w-full rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-sm dark:border-gray-700 dark:bg-gray-800"
        placeholder="Email"
        required
      />
      <textarea
        name="message"
        className="mb-6 h-32 w-full rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-sm dark:border-gray-700 dark:bg-gray-800"
        placeholder="Your message..."
        required
      ></textarea>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
