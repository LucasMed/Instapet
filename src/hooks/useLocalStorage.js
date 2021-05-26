import { useState } from 'react'

export function useLocalStorage(key, initialvalue) {
  const [storedValue, setvalue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialvalue
    } catch (error) {
      return initialvalue
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setvalue(value)
    } catch (err) {
      console.error(err)
    }
  }

  return [storedValue, setLocalStorage]
}