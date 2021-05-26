import React from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

import { PhotoCard } from '../PhotoCard'

const withPhotos = graphql(gql`
query getPhotos {
  photos {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`)

const ListOfPhotoCardsComponent = ({ data: { photos = [] } }) => {

  return (
    <ul>
      <li>
        {photos.map(photos => <PhotoCard key={photos.id} {...photos} />)}
      </li>
    </ul>
  )
}

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
