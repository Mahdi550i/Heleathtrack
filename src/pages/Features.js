const features = [
  { title: "Activity Tracking", desc: "Log your daily activities easily." },
  { title: "Meal Logging", desc: "Record calories to track nutrition." },
  { title: "Exercise Tracking", desc: "Monitor workouts and time spent." },
  { title: "Local Storage", desc: "Entries stay saved on your browser." },
  { title: "Responsive UI", desc: "Works smoothly on phone and desktop." },
  {
    title: "Instant Updates",
    desc: "Changes appear immediately on the dashboard.",
  },
];

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Features</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-white border rounded-xl shadow-sm p-5"
          >
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="text-sm text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
