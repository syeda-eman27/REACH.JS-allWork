import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import MovieDetail from './Pages/MovieDetail'
import './App.css'

const movies = [
  { id: 1, Title: "Harry Potter and the Sorcerer's Stone", Year: "2001", Poster: "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_SX300.jpg", Genre: "Fantasy, Adventure", Director: "Chris Columbus", Plot: "An eleven-year-old orphan discovers that he is a wizard and is invited to study at Hogwarts, the finest school of witchcraft and wizardry in the magical world." },
  { id: 2, Title: "Harry Potter and the Chamber of Secrets", Year: "2002", Poster: "https://m.media-amazon.com/images/M/MV5BNGJhM2M2MWYtZjIzMC00MDZmLThkY2EtOWViMDhhYjRhMzk4XkEyXkFqcGc@._V1_SX300.jpg", Genre: "Fantasy, Adventure", Director: "Chris Columbus", Plot: "Harry Potter returns to Hogwarts for his second year, where a monster is petrifying students and a mysterious message says the Chamber of Secrets has been opened." },
  { id: 3, Title: "Harry Potter and the Prisoner of Azkaban", Year: "2004", Poster: "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg", Genre: "Fantasy, Adventure", Director: "Alfonso Cuarón", Plot: "It's Harry's third year at Hogwarts, and he must deal with the escaped prisoner Sirius Black, who is said to be a supporter of the Dark Lord." },
  { id: 4, Title: "Harry Potter and the Goblet of Fire", Year: "2005", Poster: "https://m.media-amazon.com/images/M/MV5BMTIzNzUzOTk2NV5BMl5BanBnXkFtZTYwNTI4MDg2._V1_SX300.jpg", Genre: "Fantasy, Adventure", Director: "Mike Newell", Plot: "Harry Potter is selected to compete in the Triwizard Tournament, a legendary event that pits students from three schools of magic against each other in terrifying tasks." },
  { id: 5, Title: "Harry Potter and the Order of the Phoenix", Year: "2007", Poster: "https://m.media-amazon.com/images/M/MV5BYWJmM2M1YzItMjY1Ni00YzRmLTg5YWYtNDFmNTJjNzQ0ODkyXkEyXkFqcGc@._V1_SX300.jpg", Genre: "Fantasy, Adventure", Director: "David Yates", Plot: "With no one believing his account that Voldemort has returned, Harry must lead a group of students in secret to stand against the dark forces threatening their world." },
  { id: 6, Title: "Harry Potter and the Half-Blood Prince", Year: "2009", Poster: "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg", Genre: "Fantasy, Adventure", Director: "David Yates", Plot: "Dumbledore and Harry work together to find the key to defeating Voldemort, as danger increasingly closes in on Hogwarts and romance blooms among the students." },
  { id: 7, Title: "Harry Potter and the Deathly Hallows: Part 1", Year: "2010", Poster: "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg", Genre: "Fantasy, Adventure", Director: "David Yates", Plot: "Harry, Ron and Hermione set out on a perilous mission to track down and destroy the secret to Voldemort's immortality — the Horcruxes." },
  { id: 8, Title: "Harry Potter and the Deathly Hallows: Part 2", Year: "2011", Poster: "https://m.media-amazon.com/images/M/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_SX300.jpg", Genre: "Fantasy, Adventure", Director: "David Yates", Plot: "Harry, Ron and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle takes place at Hogwarts." },
]

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
      </Routes>
    </Router>
  )
}

export default App
