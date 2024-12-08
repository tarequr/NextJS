import React from 'react'

async function Comments({ promise }) {
    const comments = await promise;
    return (
        <div className='mt-10'>
            <h1>Comments</h1>
            <ul>
                {comments.map((comment) => (
                    <li className='mb-3 bg-orange-200 p-3 rounded-2xl' key={comment.id}>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Comments