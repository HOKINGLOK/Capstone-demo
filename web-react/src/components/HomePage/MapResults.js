import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import { red } from '@mui/material/colors'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import MapGL, { Marker } from '@urbica/react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import {
  Home as HomeIcon,
  FormatListNumbered as FormatListNumberedIcon,
  EventAvailable as EventAvailableIcon,
  LocalShipping as LocalShippingIcon,
  Info as InfoIcon,
  Category as CategoryIcon,
  Place as PlaceIcon,
} from '@material-ui/icons'
import BasicDateRangePicker from './DateRange'
// import { DemoCard } from './infoCard'
// import { keys } from '@material-ui/core/styles/createBreakpoints'

export default function MapResults(props) {
  console.log(props.properties)
  const theme = useTheme()

  // 地图上Marker的style
  const style = {
    padding: '4px',
    color: '#fff',
    cursor: 'pointer',
    background: '#1978c8',
    borderRadius: '50%',
  }

  // Map的paper的设定
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 540,
    },
    fixedHeight_card: {
      height: 100,
    },
  }))
  const classes = useStyles(theme)
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  // const fixedHeightPaper_card = clsx(classes.paper, classes.fixedHeight_card)

  // 控制地图可以移动和缩放
  const [viewport, setViewport] = useState({
    latitude: 55.768655,
    longitude: 49.146652,
    zoom: 1,
  })

  // 定义Marker被点击时会发生什么
  const [currentProperty, setCurrentProperty] = useState(props.properties[0])

  return (
    <div>
      <div
        style={{
          display: 'flex',
          paddingLeft: '0px',
          verticalAlign: 'center',
        }}
      >
        <HomeIcon />
        <div style={{ paddingLeft: '0px', paddingBottom: '0px' }}>
          <b className="page-title">Home Page</b>
        </div>
      </div>
      <React.Fragment>
        <Grid container spacing={4}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={fixedHeightPaper}>
              <MapGL
                style={{ width: '100%', height: '100%' }}
                mapStyle="mapbox://styles/mapbox/light-v9"
                accessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                // 控制地图可以移动和缩放
                latitude={viewport.latitude}
                longitude={viewport.longitude}
                zoom={viewport.zoom}
                onViewportChange={setViewport}
              >
                {props.properties.map((p, i) => {
                  // 根据Search中GraphQL的查询内容来显示Marker
                  return (
                    <Marker
                      key={i}
                      longitude={p.location.longitude}
                      latitude={p.location.latitude}
                    >
                      <div
                        onClick={() => setCurrentProperty(p)} // 点击Marker时会发生什么
                        style={style}
                      ></div>
                    </Marker>
                  )
                })}
              </MapGL>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <div style={{ color: '#3B5AFB', paddingBottom: '20px' }}>
              <BasicDateRangePicker />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[900] }} aria-label="recipe">
                    <FormatListNumberedIcon></FormatListNumberedIcon>
                  </Avatar>
                }
                titleTypographyProps={{
                  color: 'text.secondary',
                  variant: 'h6',
                }}
                title="Shippment ID"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" align="center">
                  {currentProperty.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[900] }} aria-label="recipe">
                    <EventAvailableIcon></EventAvailableIcon>
                  </Avatar>
                }
                titleTypographyProps={{
                  color: 'text.secondary',
                  variant: 'h6',
                }}
                title="Delivery"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" align="center">
                  {currentProperty.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[900] }} aria-label="recipe">
                    <LocalShippingIcon></LocalShippingIcon>
                  </Avatar>
                }
                titleTypographyProps={{
                  color: 'text.secondary',
                  variant: 'h6',
                }}
                title="Transportation"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" align="center">
                  {currentProperty.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[900] }} aria-label="recipe">
                    <CategoryIcon></CategoryIcon>
                  </Avatar>
                }
                titleTypographyProps={{
                  color: 'text.secondary',
                  variant: 'h6',
                }}
                title="Product Type"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" align="center">
                  {currentProperty.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[900] }} aria-label="recipe">
                    <InfoIcon></InfoIcon>
                  </Avatar>
                }
                titleTypographyProps={{
                  color: 'text.secondary',
                  variant: 'h6',
                }}
                title="Quantity"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" align="center">
                  {currentProperty.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[900] }} aria-label="recipe">
                    <PlaceIcon></PlaceIcon>
                  </Avatar>
                }
                titleTypographyProps={{
                  color: 'text.secondary',
                  variant: 'h6',
                }}
                title="From/To"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" align="center">
                  {currentProperty.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  )
}
