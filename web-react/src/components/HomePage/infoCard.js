/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import {
  Home as HomeIcon,
  EventAvailable as EventAvailableIcon,
  LocalShipping as LocalShippingIcon,
  Comment as CommentIcon,
  Info as InfoIcon,
  Place as PlaceIcon,
} from '@material-ui/icons'
import PropTypes from 'prop-types'

const demosx = {
  display: 'flex',
  alignSelf: 'center',
  transform: 'translate(-1px,-2px)',
}
const configs = {
  id: {
    icon: <HomeIcon sx={demosx} />,
    caption: 'Shipment ID',
  },
  delivery: {
    icon: <EventAvailableIcon sx={demosx} />,
    caption: 'Delivery',
  },
  transportation: {
    icon: <LocalShippingIcon sx={demosx} />,
    caption: 'Transportation',
  },
  type: {
    icon: <CommentIcon sx={demosx} />,
    caption: 'Product Type',
  },
  quantity: {
    icon: <InfoIcon sx={demosx} />,
    caption: 'Quantity',
  },
}
const configLabels = Object.keys(configs)
const DoubleCard = ({ from, to }) => (
  <div className="home_info_item">
    <div className="info_card_div">
      <div className="info_card_header_div">
        <PlaceIcon sx={demosx} />
      </div>
      <div className="double_info_card_content_div">
        <div style={{ flexBasis: '50%' }}>
          <div className="label_div">from</div>
          <div className="content_div">{from}</div>
        </div>
        <div style={{ flexBasis: '50%' }}>
          <div className="label_div">to</div>
          <div className="content_div">{to}</div>
        </div>
      </div>
    </div>
  </div>
)
const DemoCard = ({ label, content }) => (
  <div className="info_card_div">
    <div className="info_card_header_div">{configs[label].icon}</div>
    <div className="info_card_content_div">
      <div className="label_div">{configs[label].caption}</div>
      <div className="content_div">{content}</div>
    </div>
  </div>
)
DemoCard.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
DoubleCard.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}
export { DemoCard, DoubleCard }
