import { useState } from "react"
import Header from "./components/Header"

const App = () => {
  const [flag, setFlag] = useState(true)
  setTimeout(() => setFlag(!flag), 600000)

  return (
    <Header flag={flag} />
  )
}

export default App
