'use client';

import { useState } from 'react';

interface BlogSearchProps {
  onSearch?: (term: string) => void;
}

export default function BlogSearch({ onSearch }: BlogSearchProps) {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(keyword);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-6">
      <div className="relative flex items-center">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Enter search title..."
          className="w-full pl-4 pr-24 py-2.5 text-sm border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800"
        />
        <button
          type="submit"
          className="absolute right-1.5 px-4 py-1.5 text-xs font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition"
        >
          Search
        </button>
      </div>
    </form>
  );
}