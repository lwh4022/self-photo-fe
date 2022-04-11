import { useTranslation } from "react-i18next";
import { Box, CssBaseline, AppBar, Toolbar, IconButton, CircularProgress } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { Suspense, useState } from "react";
import { Outlet } from "react-router";
import ErrorBoundary from "../error/ErrorBoundary";
import LeftSideMenu from "../common/LeftSideMenu";
import { Language } from "../common/types";



const drawerWidth = 290;



function Main() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const changeLang = async (lang : Language) => {
    await i18n.changeLanguage(lang)
  }

  const { t, i18n } = useTranslation('App');  

  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'white',
        }}
      >
        <Toolbar
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={
              { 
                mr: 2, 
                display: { sm: 'none' },
                color: 'rgb(17, 25, 42)'
              }
            }
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
      <Box component="div" sx={{marginTop: '64px', padding: '16px', width: '100%'}}>
        <ErrorBoundary fallbackUIComponent={<h1>123</h1>}>
          <Suspense fallback={ <CircularProgress /> }>
            {/* <div>{t(AppMessage.Welcome_To_React)}</div> */}
            {/* <button type="button" onClick={() => changeLang('kr')}>KR</button>
            <button type="button" onClick={() => changeLang('vn')}>vn</button> */}
            <Outlet />
          </Suspense> 
        </ErrorBoundary>
      </Box>
    </Box>
  )
}

export default Main