import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      <li>
        {[1, 2, 3, 4].map(item => <PhotoCard key={item.id} />)}
      </li>
    </ul>
  )
}
