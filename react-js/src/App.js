//? App component
import "./App.css"

function App() {

  let name = "John Doe";
  return (
    <div>
      <h1 style={{
        backgroundColor: "red",
        color: "yellow"
      }}>Name {name}</h1>
      <h2 className="nav">Welcome to React!</h2>
    </div>
  )
}

export default App;