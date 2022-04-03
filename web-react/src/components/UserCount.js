import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'
import { useQuery, gql } from '@apollo/client'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  navLink: {
    textDecoration: 'none',
  },
})

const GET_COUNT_QUERY = gql`
  {
    propertyCount
  }
`

export default function Deposits() {
  const classes = useStyles()

  const { loading, error, data } = useQuery(GET_COUNT_QUERY)
  if (error) return <p>Error</p>
  return (
    <React.Fragment>
      <Title>Total Properties</Title>
      <Typography component="p" variant="h4">
        {loading ? 'Loading...' : data.propertyCount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        properties found
      </Typography>
      <div>
        <Link to="/users" className={classes.navLink}>
          View properties
        </Link>
      </div>
    </React.Fragment>
  )
}
