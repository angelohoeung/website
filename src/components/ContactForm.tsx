const ContactForm = () => {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="max-w-lg"
    >
      <input
        type="hidden"
        name="access_key"
        value="bf0d3eb4-f958-4260-8002-b5a66809f0a0"
      />
      <input
        type="hidden"
        name="subject"
        value="New Submission from Web3Forms"
      />
      <input
        type="hidden"
        name="redirect"
        value="https://web3forms.com/success"
      />
      <input type="checkbox" name="botcheck" className="hidden" />
      <input
        type="text"
        name="name"
        autoComplete="name"
        className="mb-6 w-full rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-sm dark:border-gray-700 dark:bg-gray-800"
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        autoComplete="email"
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
        className="w-full rounded-lg bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-hidden focus:ring-4 focus:ring-blue-300 sm:w-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
