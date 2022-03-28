import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Collapse, ListItemButton } from '@mui/material';
import { useState } from 'react';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

interface Props {
  drawerWidth : number,
  mobileOpen : boolean,
  handleDrawerToggle : (param : boolean) => void
}

export default function LeftSideMenu(props : Props) { 
  
  const {drawerWidth, mobileOpen, handleDrawerToggle } = props
  const [clicked, setClicked] = useState(false)

  const handleClicked = () => {
    setClicked(!clicked)
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider sx={{ height: '1px', margin: '27px 18px', background: 'rgba(255, 255, 255, 0.1)'}}/>
      
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

      <Divider sx={{ height: '1px', margin: '27px 18px', background: 'rgba(255, 255, 255, 0.1)'}}/>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text} onClick={handleClicked}>
            <ListItemIcon sx={{color: 'rgba(255, 255, 255, 0.7)', minWidth: '32px'}}>
              {
                index % 2 === 0 
                ? <InboxIcon /> 
                : <MailIcon />
              }
            </ListItemIcon>
            <ListItemText primary={text} />
            {
              clicked ? <ExpandLess /> : <ExpandMore/> 
            }
          </ListItem>
        ))}
        <Collapse in={clicked} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{marginLeft: '16px;'}}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{color: 'rgba(255, 255, 255, 0.7)', minWidth: '32px'}}>
                  <StarBorder />
                </ListItemIcon >
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
            </Collapse>
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
