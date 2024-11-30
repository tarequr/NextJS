"use client";

function Button() {
  return (
    <div>
      <button className='bg-green-500 rounded-sm px-4 py-1 mt-3' onClick={() => console.log('clicked')}>Click here</button>
    </div>
  )
}

export default Button
