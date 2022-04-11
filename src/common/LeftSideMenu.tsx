import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { useState } from 'react';
import { Dashboard, Book, Event, Feedback, Group, Photo } from '@mui/icons-material';
import { useNavigate } from 'react-router';

interface Props {
  drawerWidth : number,
  mobileOpen : boolean,
  handleDrawerToggle : (param : boolean) => void
}

export default function LeftSideMenu(props : Props) { 
  
  const {drawerWidth, mobileOpen, handleDrawerToggle } = props
  const [clicked, setClicked] = useState(false)
  const navigate = useNavigate()


  const handleClicked = (url : string) => {
    setClicked(!clicked)
    navigate(url)
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider sx={{ height: '1px', margin: '0px 0px 16px 0px', background: 'rgba(255, 255, 255, 0.1)'}}/>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom : '16px'}}>
        <Avatar sx={{width :56, height: 56}}alt="person" src="/images/person.jpeg"/>
      </Box>
      <Box sx={{ display:'flex', justifyContent:'center'}}>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <Typography variant='h4' sx={{fontSize: '16px', fontWeight: 700}}>
            Randy Smith
          </Typography>
          <Typography variant='h4' sx={{fontSize: '14px', fontWeight: 400, color: 'rgba(255, 255, 255, 0.7)'}}>
            Lead Developer
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ height: '1px', margin: '16px 0px 16px 0px', background: 'rgba(255, 255, 255, 0.1)'}}/>
      <List>
        {
          [
            {
              title : 'Dashboard',
              url : '/',
              icon : <Dashboard />
            },
            {
              title : 'Users',
              url : '/users',
              icon : <Group />
            },
            {
              title : 'Reservation',
              url : '/reservation',
              icon : <Book />
            }, 
            {
              title : 'Photo',
              url : '/photo',
              icon : <Photo />
            },
            {
              title : 'Events',
              url : '/events',
              icon : <Event />
            },
            {
              title : 'Feedback',
              url : '/feedback',
              icon : <Feedback />
            }].map(( { title, url, icon }) => (
              <ListItem button key={title} onClick={() => handleClicked(url)}> 
                <ListItemIcon sx={{color: 'rgba(255, 255, 255, 0.7)', minWidth: '32px'}}>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={title} />    
              </ListItem>
          ))
        }
      </List>
    </div>
  );

  const container = document.body

  return (
    <Box
      component="nav"
      sx={{ 
        width: { sm: drawerWidth }, 
        flexShrink: { sm: 0 }
      }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth, 
            backgroundColor: 'rgb(17, 25, 42)',
            color: 'rgba(255, 255, 255, 0.7)'
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box',
            width: drawerWidth, 
            backgroundColor: 'rgb(17, 25, 42)', 
            color:'rgba(255, 255, 255, 0.7)' 
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
