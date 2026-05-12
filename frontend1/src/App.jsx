import { useState } from 'react'
import './App.css'

function App() {
  const [members, setMembers] = useState(0)

  return (
    <div>
      <h1>Project Connect</h1>

      <p>
        Project Connect helps students find project teammates,
        share project ideas, and collaborate with others.
      </p>

      <h2>Team Members Joined: {members}</h2>

      <button onClick={() => setMembers(members + 1)}>
        Join a Project
      </button>
    </div>
  )
}

export default App