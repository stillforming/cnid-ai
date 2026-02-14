export default function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-dim text-sm">
          © {new Date().getFullYear()} cnid.ai
        </p>
        <p className="text-text-dim text-sm">
          Built with AI.
        </p>
      </div>
    </footer>
  );
}
