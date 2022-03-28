import { Suspense } from "react";
import { Box, CssBaseline, AppBar, Toolbar, IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import {  useRecoilState } from "recoil";
import LeftSideMenu from "./common/LeftSideMenu"
import { openState } from "./entities/state";



const drawerWidth = 290;

function App() {

  const [mobileOpen, setMobileOpen] = useRecoilState(openState);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return ( 
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: 'white'
          }}
        >
          <Toolbar
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        </Box>
        <LeftSideMenu 
          drawerWidth={drawerWidth}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </>
  )
}

export default App