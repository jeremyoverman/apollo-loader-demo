import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ul>
        <li><Link to="/rick">Rick</Link></li>
        <li><Link to="/morty">Morty</Link></li>
      </ul>
      </header>
    </div>
  )
}
