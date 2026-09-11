import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo bên trái */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
            D
          </div>
          <span className="font-semibold text-gray-900 text-lg hidden sm:inline-block">DevBlog</span>
        </Link>

        {/* Action bên phải: Nút Create Blog + Avatar */}
        <div className="flex items-center gap-4">
          <Link
            href="/create-blog"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
          >
            + Create Blog
          </Link>

          {/* User Avatar */}
          <div className="w-9 h-9 rounded-full bg-gray-200 border border-gray-300 overflow-hidden flex items-center justify-center text-xs font-semibold text-gray-600 cursor-pointer">
            U
          </div>
        </div>
      </div>
    </header>
  );
}