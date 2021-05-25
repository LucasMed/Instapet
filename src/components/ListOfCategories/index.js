import React, { useState, useEffect, Fragment } from 'react'
import { API } from '../../constants'
import { Category } from '../Category/'
import { List, Item } from './styles'

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setLoading(true)
      fetch(`${API}/categories`)
        .then(res => res.json())
        .then(response => {
          setCategories(response)
          setLoading(false)
        })
    } catch (error) {
      setLoading(false)
      setError(true);
    }
  }, [])

  return { categories, loading, error }
}

export const ListOfCategories = () => {
  const { categories, loading, error } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);



  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  if (loading) {
    return 'Cargando...'
  }

  if (error) {
    return 'Se ha producido un error!'
  }

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}
