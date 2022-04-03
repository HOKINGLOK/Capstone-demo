import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { useQuery, gql } from '@apollo/client'
import Title from './Title'
// import moment from 'moment'

const GET_RECENT_REVIEWS_QUERY = gql`
  {
    properties(
      where: {
        AddressLin_NOT: null
        in_subdivision: { name_NOT: "N/A" }
        bedrooms_NOT: null
        full_baths_NOT: null
      }
      options: { sort: [{ TotalAcres: DESC }], limit: 10 }
    ) {
      TotalValue
      id
      AddressLin
      bedrooms
      full_baths
      half_baths
      sqft
      in_subdivision {
        name
      }
    }
  }
`

export default function RecentReviews() {
  const { loading, error, data } = useQuery(GET_RECENT_REVIEWS_QUERY)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <React.Fragment>
      <Title>Most Expensive Properties</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell>Subdivision Name</TableCell>
            <TableCell>Bedrooms</TableCell>
            <TableCell>Sqft</TableCell>
            <TableCell align="right">Total Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.properties.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.AddressLin}</TableCell>
              <TableCell>{row.in_subdivision[0].name}</TableCell>
              <TableCell>{row.bedrooms}</TableCell>
              <TableCell>{row.sqft}</TableCell>
              <TableCell align="right">{row.TotalValue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
