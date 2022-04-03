import * as React from 'react'
import TextField from '@mui/material/TextField'
import DateRangePicker from '@mui/lab/DateRangePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Box from '@mui/material/Box'
import { DateRange as DateRangeIcon } from '@material-ui/icons'

export default function BasicDateRangePicker() {
  const [value, setValue] = React.useState([null, null])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="From date"
        endText="To Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <div
              style={{
                paddingLeft: '20px',
                paddingRight: '20px',
                display: 'inline-flex',
                verticalAlign: 'center',
              }}
            >
              <DateRangeIcon />
            </div>
            <TextField {...startProps} style={{ height: '40px' }} />
            <Box sx={{ mx: 2 }}>
              <b>to</b>
            </Box>
            <TextField {...endProps} style={{ height: '40px' }} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  )
}
