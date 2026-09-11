export interface BlogPost {
  id: string | number;
  title: string;
  description: string;
  tag: string;
  imageUrl: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col">
      {/* 1. Thumbnail Image */}
      <div className="w-full h-40 bg-gray-100 relative overflow-hidden">
        {/* Dùng thẻ img hoặc next/image nếu cấu hình domain */}
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Tag tròn nhỏ màu tím nhạt */}
        <div className="mb-2">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-indigo-200 bg-indigo-50 text-[10px] font-semibold text-indigo-600">
            {post.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-sm text-gray-900 line-clamp-1">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
          {post.description}
        </p>
      </div>
    </div>
  );
}