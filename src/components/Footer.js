export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} HealthTrack — All rights reserved.
      </div>
    </footer>
  );
}
