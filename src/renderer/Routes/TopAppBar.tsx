import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

type Props = {
  toggle: () => void
}

const TopAppBar = ({toggle}: Props) => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggle}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" >
          PatGest
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TopAppBar;
