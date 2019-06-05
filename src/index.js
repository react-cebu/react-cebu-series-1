// Objective: Fill in the boilerplate React code required to render an
// ordered list (<ol>) to the page. The list should contain 3 list items
// (<li>) with your top 3 strongest Avenger.

// HINTS:
// import the libraries you need first
// use one of the libraries to render some JSX to the page

import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <ol>
      <li>Hulk</li>
      <li>Thor</li>
      <li>Iron Man</li>
    </ol>
  )
}

ReactDOM.render(  
  <App />,
  document.getElementById("root")
)