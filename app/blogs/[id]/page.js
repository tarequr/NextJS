import { notFound } from 'next/navigation';
import React from 'react'

function BlogPage({ params }) {
    const { id } = params;

    if (id === '4') {
      notFound();
    }
  return (
    <div className='mt-6'>The blog with id: {id}</div>
  )
}

export default BlogPage