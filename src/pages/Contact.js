export default function Contact() {
  return (
    <section className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <form className="bg-white border rounded-xl shadow-sm p-6 space-y-4">
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Your name"
        />

        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Email "
        />

        <textarea
          className="w-full border rounded px-3 py-2"
          rows="4"
          placeholder="Message"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Send (demo)
        </button>
      </form>
    </section>
  );
}
