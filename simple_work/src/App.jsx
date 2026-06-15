import './App.css'
import Student from './Components/Student.jsx'
import Product from './Components/Product.jsx'

function App() {
  const name = "syeda emaan";
  const x = 10;
  const fruitsArray = ["apple", "banana", "cherry", "orange", "pineapple"];
  const person = {
    name: "syeda emaan",
    age: 20,
    city: "karachi"
  }
  return (
    <>
      <Student name={person.name} age={person.age} class={"BA"} />
      <Product title="Iphone" price={999} quantity={3} />
       <Product title="Iphone-15" price={100999} quantity={3} />
      <h1>Hello My Name is {name}</h1>

      <p>The value of x is {x}</p>
      <ul>
        {fruitsArray.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
      <p>My name is {person.name} and I am {person.age} years old and I live in {person.city}</p>
    </>
  )
}

export default App
