import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import Reveal from '../common/ScrollAnimation'; // Adjust the import path as necessary

const BlogRelatedPost = ({ relatedPosts }) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };

  return (
    <>
      {/* RELATED BLOG POSTS */}
      {relatedPosts && (
        <div className="border border-solid border-gray-300 rounded-lg mt-10">
          {/* Related Posts */}
          <div className="py-5 px-8 border-b border-solid border-gray-300">
            <h3 className="text-3xl font-semibold">Related Posts</h3>
          </div>

          {/* RELATED BLOG POST */}
          <ul className="py-5 px-8">
            {relatedPosts.map((blog, i) => (
              <Reveal key={i} from={20}>
                <li className="flex gap-4 py-3 border-b border-solid border-gray-300 last:border-b-0 text-gray-700 hover:text-primary transition-all duration-500">
                  <a
                    href={`/blog/${blog?.title?.toLowerCase()?.split(' ')?.join('-')}`}
                    className="flex-shrink-0"
                  >
                    <img
                      src={blog?.image}
                      alt={blog?.title}
                      width={100}
                      height={100}
                      className="min-h-[80px] min-w-[100px] max-w-[100px] max-h-[80px] object-cover rounded-md"
                      loading="lazy" // Equivalent to priority in Next.js
                    />
                  </a>

                  <div>
                    <p className="flex items-center gap-1 text-lg text-gray-600 mb-1">
                      <span>
                        <FaCalendarAlt className="text-primary" />
                      </span>
                      {blog?.date &&
                        new Intl.DateTimeFormat('en-US', options).format(new Date(blog?.date))}
                    </p>
                    <a
                      href={`/blog/${blog?.title?.toLowerCase()?.split(' ')?.join('-')}`}
                      className="text-xl font-semibold line-clamp-2"
                    >
                      {blog?.title}
                    </a>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default BlogRelatedPost;
