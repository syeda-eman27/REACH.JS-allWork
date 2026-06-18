import { Box, Typography, Container } from '@mui/material'
import MovieFilterIcon from '@mui/icons-material/MovieFilter'

export default function About() {
  return (
    <Box sx={{ background: '#0d0d1a', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center', py: 8 }}>
        <MovieFilterIcon sx={{ fontSize: 64, color: '#f5c518', mb: 2 }} />
        <Typography variant="h4" sx={{ fontWeight: 900, color: '#fff', mb: 2 }}>
          CineVerse ke Baare Mein
        </Typography>
        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
          CineVerse ek movie collection app hai jahan aap apni pasandida movies dekh sakte hain.
          Abhi yahan Harry Potter ki puri series mojood hai. Har movie pe click karein aur uski
          poori details dekhein!
        </Typography>
      </Container>
    </Box>
  )
}
