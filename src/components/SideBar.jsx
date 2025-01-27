
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">Quiz Platform</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/dashboard">
              <a className="text-xl hover:text-blue-400">Dashboard</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/my-tests">
              <a className="text-xl hover:text-blue-400">My Tests</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/my-results">
              <a className="text-xl hover:text-blue-400">My Results</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/news">
              <a className="text-xl hover:text-blue-400">News</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/settings">
              <a className="text-xl hover:text-blue-400">Settings</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/profile">
              <a className="text-xl hover:text-blue-400">Profile</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
