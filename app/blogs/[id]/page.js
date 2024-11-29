import React from 'react'

function BlogPage({ params }) {
    const { id } = params;
  return (
    <div className='mt-6'>The blog with id: {id}</div>
  )
}

export default BlogPage