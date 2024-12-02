import getPost from '@/lib/getPost';
import { notFound } from 'next/navigation';
import React from 'react'

async function PostPage({ params }) {
  const { id } = params;
  const post = await getPost(id);

  if (!post) return notFound();
  return (
    <div className='mt-6'>
      <h2 className='text-blue-500'>{post.title}</h2>
      <p className='mt-3'>{post.body}</p>
    </div>
  )
}

export default PostPage