import React from 'react'
import { getFeaturedEvents } from '../public/dummy-data'

function HomePage() {
  const featuredEvents = getFeaturedEvents;
  return (
    <div>
      <h1>The Home Page</h1>
    </div>
  )
}

export default HomePage
