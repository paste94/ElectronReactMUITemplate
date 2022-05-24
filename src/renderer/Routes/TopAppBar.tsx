import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { getText } from './Elements';
import MenuIcon from '@mui/icons-material/Menu';

const TopAppBar = () => {
  console.log(useLocation())
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => {}}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" >
          {getText(useLocation().pathname)}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TopAppBar;
