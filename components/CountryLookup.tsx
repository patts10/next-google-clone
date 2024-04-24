'use client'

import { useEffect, useState } from 'react'

export const CountryLookup = () => {
  const [country, setCountry] = useState('United States')

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch('https://extreme-ip-lookup.com/json/')
        .then((res) => res.json())
        .then((data) => {
          if (data?.country) {
            setCountry(data?.country)
          }
        })
    }

    getCountry()
  }, [])

  return <div>{country}</div>
}
