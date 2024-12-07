import getPost from '@/lib/getPost';
import getPostComments from '@/lib/getPostComments';
import { notFound } from 'next/navigation';
import React from 'react'

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);
  const comments = await getPostComments(id);

  if (!post) return notFound();

  return {
    title: post.title,
    description: post.body,
  }
}

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