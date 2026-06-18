import { useParams, useNavigate } from 'react-router-dom'
import {
  Box,
  Typography,
  Button,
  Chip,
  Divider,
  Container,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import TheatersIcon from '@mui/icons-material/Theaters'
import PersonIcon from '@mui/icons-material/Person'

export default function MovieDetail({ movies }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const movie = movies.find((m) => m.id === parseInt(id))

  if (!movie) {
    return (
      <Box sx={{ background: '#0d0d1a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h5" sx={{ color: '#fff' }}>Movie nahi mila! 😢</Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ background: '#0d0d1a', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md">
        {/* Back Button */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          sx={{
            color: '#f5c518',
            mb: 4,
            fontWeight: 600,
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': { background: 'rgba(245,197,24,0.1)' },
          }}
        >
          BACK...
        </Button>

        {/* Movie Card Detail */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 4,
            background: '#1c1c2e',
            borderRadius: 4,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
          }}
        >
          {/* Poster */}
          <Box
            component="img"
            src={movie.Poster}
            alt={movie.Title}
            sx={{
              width: { xs: '100%', sm: 280 },
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />

          {/* Info */}
          <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 900, color: '#fff', lineHeight: 1.2, fontSize: { xs: '1.4rem', md: '1.9rem' } }}
            >
              {movie.Title}
            </Typography>

            {/* Chips */}
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
              <Chip
                icon={<CalendarMonthIcon sx={{ fontSize: 16, color: '#000 !important' }} />}
                label={movie.Year}
                sx={{ background: '#f5c518', color: '#000', fontWeight: 700 }}
              />
              <Chip
                icon={<TheatersIcon sx={{ fontSize: 16, color: '#f5c518 !important' }} />}
                label={movie.Genre}
                sx={{ background: 'rgba(245,197,24,0.12)', color: '#f5c518', border: '1px solid #f5c518' }}
              />
            </Box>

            <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', my: 1 }} />

            {/* Director */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PersonIcon sx={{ color: '#f5c518', fontSize: 20 }} />
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)' }}>
                Director:
              </Typography>
              <Typography variant="body2" sx={{ color: '#fff', fontWeight: 600 }}>
                {movie.Director}
              </Typography>
            </Box>

            {/* Plot */}
            <Box sx={{ mt: 1 }}>
              <Typography variant="overline" sx={{ color: '#f5c518', letterSpacing: 2, fontSize: '0.7rem' }}>
                Story
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, mt: 0.5 }}>
                {movie.Plot}
              </Typography>
            </Box>

            {/* Movie Number */}
            <Box
              sx={{
                mt: 'auto',
                pt: 2,
                borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)' }}>
                Movie ID:
              </Typography>
              <Typography variant="caption" sx={{ color: '#f5c518', fontWeight: 700 }}>
                #{String(movie.id).padStart(3, '0')}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
