import React, { useState } from 'react';
import blogs from '../component/BlogComponent/BlogData';

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  const splitDescription = (description) => {
    const maxLength = description.length / 4;
    const chunks = [];
    for (let i = 0; i < 4; i++) {
      chunks.push(description.slice(i * maxLength, (i + 1) * maxLength));
    }
    return chunks;
  };

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white relative pb-2 mb-6">
        Personal Blogs
        <span className="absolute left-0 bottom-0 w-16 sm:w-36 md:w-48 h-1 bg-amber-400 rounded-full"></span>
      </h2>
      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="cursor-pointer p-4 border rounded-lg shadow-lg hover:shadow-2xl transition"
            onClick={() => handleBlogClick(blog)}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-2 text-center">
              {blog.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed top-0 left-0 right-0  bottom-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative max-h-[80vh] p-6 rounded-lg border-2 border-white shadow-xl w-11/12 max-w-lg h-auto overflow-y-auto bg-gray-950">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white hover:text-gray-500 text-2xl"
            >
              X
            </button>

            <h2 className="text-2xl font-bold text-center mb-4">
              {selectedBlog.title}
            </h2>

            <div className="w-full flex justify-center">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>

            <div className="mt-4 text-white overflow-y-auto">
              {splitDescription(selectedBlog.description).map((para, index) => (
                <p key={index} className="mb-4">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-4">
              <p className="text-gray-500 italic">
                This article starts with an in-depth exploration of the topic
                and concludes with a thorough summary.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
