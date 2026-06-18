import { Box, Typography, Container, TextField, Button } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'

export default function Contact() {
  return (
    <Box sx={{ background: '#0d0d1a', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <EmailIcon sx={{ fontSize: 56, color: '#f5c518', mb: 2 }} />
          <Typography variant="h4" sx={{ fontWeight: 900, color: '#fff', mb: 1 }}>
            CONTACT US
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.45)' }}>
            Got questions? We're always ready to assist you!
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            InputLabelProps={{ style: { color: 'rgba(255,255,255,0.5)' } }}
            InputProps={{ style: { color: '#fff' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
                '&:hover fieldset': { borderColor: '#f5c518' },
                '&.Mui-focused fieldset': { borderColor: '#f5c518' },
              },
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            InputLabelProps={{ style: { color: 'rgba(255,255,255,0.5)' } }}
            InputProps={{ style: { color: '#fff' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
                '&:hover fieldset': { borderColor: '#f5c518' },
                '&.Mui-focused fieldset': { borderColor: '#f5c518' },
              },
            }}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            InputLabelProps={{ style: { color: 'rgba(255,255,255,0.5)' } }}
            InputProps={{ style: { color: '#fff' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
                '&:hover fieldset': { borderColor: '#f5c518' },
                '&.Mui-focused fieldset': { borderColor: '#f5c518' },
              },
            }}
          />
          <Button
            variant="contained"
            size="large"
            onClick={() => alert('Paigham bhej diya gaya! ✅')}
            sx={{
              background: '#f5c518',
              color: '#000',
              fontWeight: 800,
              textTransform: 'none',
              fontSize: '1rem',
              borderRadius: 2,
              py: 1.5,
              '&:hover': { background: '#e6b800' },
            }}
          >
            Bhejo
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
