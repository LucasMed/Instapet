import React, { useState, useEffect } from 'react'
import { API } from '../../constants'
import { Category } from '../Category/'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${API}/categories`)
    .then(res => res.json())
    .then(response => {
      setCategories(response)
    })
    return () => {
      cleanup
    }
  }, [])

  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}
