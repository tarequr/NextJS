import Link from 'next/link';
import React from 'react'

function page() {
  const blogs = [
    {
      id: 1,
      title: 'Blog 1',
      content: 'Blog 1 content'
    },
    {
      id: 2,
      title: 'Blog 2',
      content: 'Blog 2 content'
    },
    {
      id: 3,
      title: 'Blog 3',
      content: 'Blog 3 content'
    }
  ];

  return (
    <div className='mt-10'>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page