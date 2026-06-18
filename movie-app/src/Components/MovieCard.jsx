import { useNavigate } from 'react-router-dom'
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  CardActionArea,
  Box,
} from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

export default function MovieCard({ movies }) {
  const navigate = useNavigate()

  return (
    <Grid container spacing={3} sx={{ py: 3, px: { xs: 2, md: 4 } }}>
      {movies.map((movie) => (
        <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              height: '100%',
              borderRadius: 3,
              overflow: 'hidden',
              background: '#1c1c2e',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow: '0 20px 40px rgba(245,197,24,0.15)',
              },
            }}
          >
            <CardActionArea onClick={() => navigate(`/movie/${movie.id}`)}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="320"
                  image={movie.Poster}
                  alt={movie.Title}
                  sx={{ objectFit: 'cover' }}
                />
                {/* Year Badge */}
                <Chip
                  icon={<CalendarMonthIcon sx={{ fontSize: 14, color: '#000 !important' }} />}
                  label={movie.Year}
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    background: '#f5c518',
                    color: '#000',
                    fontWeight: 700,
                    fontSize: '0.72rem',
                  }}
                />
              </Box>

              <CardContent sx={{ pb: 2 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: '#fff',
                    lineHeight: 1.3,
                    fontSize: '0.95rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {movie.Title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: 'rgba(255,255,255,0.45)', mt: 0.5, display: 'block' }}
                >
                  {movie.Genre}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
