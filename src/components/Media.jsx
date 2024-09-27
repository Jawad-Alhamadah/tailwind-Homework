import React from 'react'
import MediaCard from './MediaCard'

function Media() {


  return (
    <div className='flex space-x-7 md:space-x-28'>
        <MediaCard title="Subscribers" src=" fa-brands fa-youtube " count="1.2M" />
        <MediaCard title="Followers" src=" fa-brands fa-instagram " count="1.8M" />
        <MediaCard title="Readers" src=" fa fa-rss " count="800K" />
    </div>
  )
}

export default Media
