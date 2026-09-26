import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#05070d] text-white">
      <h1 className="text-7xl font-black text-lime-400">404</h1>
      <h2 className="mt-4 text-2xl font-bold">Page Not Found</h2>
      <p className="mt-2 text-gray-400">
        The page you're looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-full bg-lime-400 px-6 py-3 font-bold text-black"
      >
        Go Home
      </Link>
    </div>
  );
}