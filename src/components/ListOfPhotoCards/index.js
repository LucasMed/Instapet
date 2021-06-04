import React from 'react'

import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } }) => {

  return (
    <ul>
      <li>
        {photos.map(photos => <PhotoCard key={photos.id} {...photos} />)}
      </li>
    </ul>
  )
}
