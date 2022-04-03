import React from 'react'
import MapResults from './MapResults'
import { useQuery, gql } from '@apollo/client'

const PROPERTY_SEARCH_QUERY = gql`
  {
    suppliers(
      options: { limit: 9 }
      where: {
        location_LTE: {
          point: { latitude: 55.768655, longitude: 49.146652 }
          distance: 200000000
        }
      }
    ) {
      location {
        latitude
        longitude
      }
      name
    }
  }
`
export default function Search() {
  const { loading, error, data } = useQuery(PROPERTY_SEARCH_QUERY)

  if (error) return <p>Error</p>
  if (loading) return <p>Loading...</p>

  return <MapResults properties={data.suppliers} />
}
