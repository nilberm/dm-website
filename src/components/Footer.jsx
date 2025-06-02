export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Debora Mara. All rights reserved.
        </p>
        <div className="space-x-4 mt-4 sm:mt-0">
          <a
            href="https://instagram.com/your‐debra‐profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://behance.net/your‐debra‐profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
}
