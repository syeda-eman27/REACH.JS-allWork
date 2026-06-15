import './App.css'
import MovieCard from './Components/MovieCard'

function App() {
  const mov = [
    {Title:"Harry Potter and the Deathly Hallows: Part 2",Year:"2011",Poster:"https://m.media-amazon.com/images/M/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_SX300.jpg"}
    ,{Title:"Harry Potter and the Sorcerer's Stone",Year:"2001",Poster:"https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_SX300.jpg"},
    {Title:"Harry Potter and the Prisoner of Azkaban",Year:"2004",Poster:"https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg"},
    {Title:"Harry Potter and the Chamber of Secrets",Year:"2002",Poster:"https://m.media-amazon.com/images/M/MV5BNGJhM2M2MWYtZjIzMC00MDZmLThkY2EtOWViMDhhYjRhMzk4XkEyXkFqcGc@._V1_SX300.jpg"},
    {Title:"Harry Potter and the Goblet of Fire",Year:"2005",Poster:"https://m.media-amazon.com/images/M/MV5BMTIzNzUzOTk2NV5BMl5BanBnXkFtZTYwNTI4MDg2._V1_SX300.jpg"},
    {Title:"Harry Potter and the Order of the Phoenix",Year:"2007",Poster:"https://m.media-amazon.com/images/M/MV5BYWJmM2M1YzItMjY1Ni00YzRmLTg5YWYtNDFmNTJjNzQ0ODkyXkEyXkFqcGc@._V1_SX300.jpg"},
    {Title:"Harry Potter and the Deathly Hallows: Part 1",Year:"2010",Poster:"https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"},
    {Title:"Harry Potter and the Half-Blood Prince",Year:"2009",Poster:"https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg"}
  ]
  return (
    <>
       <MovieCard movies={mov} />
    
   
     
    </>
  )
}

export default App