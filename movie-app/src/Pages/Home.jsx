import { Box, Typography } from '@mui/material'
import MovieCard from '../Components/MovieCard'

export default function Home({ movies }) {
  return (
    <Box sx={{ minHeight: '100vh', background: '#0d0d1a' }}>
      {/* Hero Banner */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
          py: { xs: 5, md: 8 },
          px: { xs: 2, md: 4 },
          textAlign: 'center',
          borderBottom: '1px solid rgba(245,197,24,0.2)',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            color: '#fff',
            letterSpacing: 2,
            mb: 1,
            fontSize: { xs: '1.8rem', md: '2.8rem' },
          }}
        >
          ✨ Magical Movie Collection
        </Typography>
        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem' }}>
          Click on any movie to see its full details
        </Typography>
      </Box>

      {/* Movie Grid */}
      <Box sx={{ px: { xs: 1, md: 2 }, pb: 6 }}>
        <MovieCard movies={movies} />
      </Box>
    </Box>
  )
}
