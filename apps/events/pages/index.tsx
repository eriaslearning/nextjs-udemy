import React from 'react'
import { getFeaturedEvents } from '../public/dummy-data'
import {EventsUi} from '@tests/events/ui'

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventsUi items={featuredEvents} />
    </div>
  )
}

export default HomePage
