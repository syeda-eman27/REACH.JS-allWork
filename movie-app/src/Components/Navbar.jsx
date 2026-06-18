import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import MovieIcon from '@mui/icons-material/Movie'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: 'linear-gradient(90deg, #0f0c29, #302b63, #24243e)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
          {/* Logo */}
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none' }}>
            <MovieIcon sx={{ color: '#f5c518', fontSize: 30 }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: '#fff',
                letterSpacing: 1,
                fontFamily: '"Segoe UI", sans-serif',
              }}
            >
              Cine<span style={{ color: '#f5c518' }}>Verse</span>
            </Typography>
          </Box>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Button
                    key={link.path}
                    component={Link}
                    to={link.path}
                    sx={{
                      color: isActive ? '#f5c518' : '#fff',
                      fontWeight: isActive ? 700 : 500,
                      textTransform: 'none',
                      fontSize: '1rem',
                      borderBottom: isActive ? '2px solid #f5c518' : '2px solid transparent',
                      borderRadius: 0,
                      px: 2,
                      '&:hover': { color: '#f5c518', background: 'transparent' },
                    }}
                  >
                    {link.label}
                  </Button>
                )
              })}
            </Box>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: '#fff' }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 220, pt: 4, background: '#1a1a2e', height: '100%' }}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.path} disablePadding>
                <ListItemButton
                  component={Link}
                  to={link.path}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    color: location.pathname === link.path ? '#f5c518' : '#fff',
                    fontWeight: location.pathname === link.path ? 700 : 400,
                    '&:hover': { color: '#f5c518', background: 'rgba(245,197,24,0.08)' },
                  }}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}
