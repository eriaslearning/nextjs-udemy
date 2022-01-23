import React from 'react';
import Link from 'next/link';

function Index() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/user">Go to the users page</Link>
    </div>
  )
}

export default Index
