import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 bg-white text-gray-500 text-sm mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Cột trái: Logo & mô tả */}
        <div className="max-w-sm space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              D
            </div>
            <span className="font-bold text-gray-900">DevBlog</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Your own modern blogging platform to share ideas, tech insights, and daily stories with the community.
          </p>
        </div>

        {/* Cột phải: Các nhóm link */}
        <div className="grid grid-cols-3 gap-10 sm:gap-16 text-xs">
          {/* Cột 1 */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800 text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-indigo-600 transition">Home</Link></li>
              <li><Link href="/blogs" className="hover:text-indigo-600 transition">Explore</Link></li>
              <li><Link href="/about" className="hover:text-indigo-600 transition">About Us</Link></li>
            </ul>
          </div>

          {/* Cột 2 */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800 text-sm mb-3">Need Help?</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="hover:text-indigo-600 transition">FAQ</Link></li>
              <li><Link href="/terms" className="hover:text-indigo-600 transition">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-600 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Cột 3 */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800 text-sm mb-3">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-600 transition">Twitter</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">GitHub</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}