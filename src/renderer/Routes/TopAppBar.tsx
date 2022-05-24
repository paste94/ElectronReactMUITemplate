import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { getText } from './Elements';

const TopAppBar = () => {
  console.log(useLocation())
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant="h6" >
          {getText(useLocation().pathname)}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TopAppBar;
