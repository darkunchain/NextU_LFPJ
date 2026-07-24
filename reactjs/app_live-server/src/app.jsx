import React from 'react'
import { createRoot } from 'react-dom/client'

class App extends React.Component {
  clickHandler() {
    alert('Works!')
  }

  render() {
    return <button onClick={() => this.clickHandler()}>Click</button>
  }
}

createRoot(document.getElementById('app')).render(<App />)
