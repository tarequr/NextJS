import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "About Us",
  description: "This is a about us project",
};

function layout({ children }) {
  return (
    <div>
        <nav className='mt-6 mb-6'>
            <ul className="flex gap-6">
                <li><Link href="/about/mission">Mission</Link></li>
                <li><Link href="/about/vission">Vission</Link></li>
            </ul>
        </nav>
        {children}
    </div>
  )
}

export default layout