import BlogSearch from './_components/BlogSearch';
import BlogCard, { BlogPost } from './_components/BlogCard';

// Mock data giả lập theo ảnh thiết kế
const mockBlogs: BlogPost[] = [
  {
    id: 1,
    title: 'Self',
    description: 'Beautiful day in our campus garden enjoying the fresh air and sweet breeze...',
    tag: 'S',
    imageUrl: 'https://picsum.photos/seed/blog1/400/300',
  },
  {
    id: 2,
    title: 'Reaction',
    description: 'Quick setup on modern fullstack dev with Next.js and NestJS stack...',
    tag: 'R',
    imageUrl: 'https://picsum.photos/seed/blog2/400/300',
  },
  {
    id: 3,
    title: 'Formula',
    description: 'Mathematical derivation and calculus formulas breakdown for engineering...',
    tag: 'F',
    imageUrl: 'https://picsum.photos/seed/blog3/400/300',
  },
  {
    id: 4,
    title: '111',
    description: 'Notes on notes and system design patterns for scalable services...',
    tag: 'N',
    imageUrl: 'https://picsum.photos/seed/blog4/400/300',
  },
  {
    id: 5,
    title: 'Next Gen',
    description: 'Explore the future of web architecture and UI micro-interactions...',
    tag: 'G',
    imageUrl: 'https://picsum.photos/seed/blog5/400/300',
  },
  {
    id: 6,
    title: 'Spring Lake',
    description: 'Nature photography and color grading tips for outdoor trips...',
    tag: 'L',
    imageUrl: 'https://picsum.photos/seed/blog6/400/300',
  },
  {
    id: 7,
    title: 'Green Life',
    description: 'Plant propagation and indoor botanical decoration guides...',
    tag: 'P',
    imageUrl: 'https://picsum.photos/seed/blog7/400/300',
  },
  {
    id: 8,
    title: 'Community Vibes',
    description: 'Memories from the local meetup and campus hackathons...',
    tag: 'C',
    imageUrl: 'https://picsum.photos/seed/blog8/400/300',
  },
];

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* 1. Hero Title */}
      <section className="text-center max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-950 tracking-tight">
          Your own <span className="text-indigo-600">blogging</span> platform.
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
          Share your stories without limits, connect with like-minded creators, and build a library of your personal tech ideas.
        </p>

        {/* 2. Thanh Search */}
        <BlogSearch />
      </section>

      {/* 3. Lưới danh sách bài viết (4 cột chuẩn màn hình lớn) */}
      <section className="mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockBlogs.map((blog) => (
            <BlogCard key={blog.id} post={blog} />
          ))}
        </div>
      </section>
    </div>
  );
}