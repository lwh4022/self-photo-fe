
import { Box, CssBaseline, AppBar, Toolbar, IconButton, CircularProgress } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import {  useRecoilState, useRecoilValue } from "recoil";
import { Suspense } from "react";
import { data, openState } from "./entities/state";
import LeftSideMenu from "./common/LeftSideMenu"
import ErrorBoundary from "./error/ErrorBoundary";



const drawerWidth = 290;

function DataComponent() {
  const dataList = useRecoilValue(data)
  return (
    <Box component='div' sx={{marginTop: '64px'}}>
      {
        dataList.map((datum : any) => {
          return <div key={datum.id}>
            <div>
              {datum.title}
            </div>
          </div>
        })
      }
    </Box>
  )
}

function App() {

  const [mobileOpen, setMobileOpen] = useRecoilState(openState);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  

  return (
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
        <LeftSideMenu 
          drawerWidth={drawerWidth}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box component="div" sx={{marginTop: '64px'}}>
          <ErrorBoundary fallbackUIComponent={<h1>Something went wrong.</h1>}>
            <Suspense fallback={ <CircularProgress /> }>
              <DataComponent />
            </Suspense> 
          </ErrorBoundary>
        </Box>
    </Box>
  )
}

export default App