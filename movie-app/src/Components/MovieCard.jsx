import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  CardActionArea,
} from '@mui/material'
let MovieCard = ({ movies }) => {
  return (
    <Grid container spacing={2} sx={{ py: 2 }}>
      {movies.map((x, idx) => (
        <Grid key={x?.Title ?? `${idx}`} item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              height: '100%',
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 18px 35px rgba(0,0,0,0.14)',
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="190"
                image={x.Poster}
                alt={x.Title}
                sx={{
                  objectFit: 'cover',
                  backgroundColor: '#f3f4f6',
                }}
              />
              <CardContent sx={{ pb: 1.5 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 700 }}
                >
                  {x.Title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {x.Year}
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions sx={{ px: 2, pb: 2 }}>
              <Button
                size="small"
                variant="contained"
                onClick={() => {
                  alert(`Shared: ${x.Title} (${x.Year})`)
                }}
                sx={{
                  borderRadius: 999,
                  textTransform: 'none',
                  fontWeight: 600,
                }}
              >
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default MovieCard
