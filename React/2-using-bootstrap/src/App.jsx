import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>This is first App</h1>
    <button type="button" class="kg_btn btn btn-primary">Primary</button>
<button type="button" class=" kg_btn btn btn-secondary">Secondary</button>
<button type="button" class=" kg_btn btn btn-success">Success</button>
<button type="button" class=" kg_btn btn btn-danger">Danger</button>
<button type="button" class=" kg_btn btn btn-warning">Warning</button>
<button type="button" class="  kg_btn btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
    </>
  )
}

export default App
7382977951