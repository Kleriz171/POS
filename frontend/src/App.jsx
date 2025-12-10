import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom"
import { Auth } from "./pages/Auth"
import { Orders } from "./pages/Orders"
import { Home } from "./pages/Home"
import Header from "./components/shared/Header"


function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/auth" element={<Auth/>}></Route>
          <Route path="/orders" element={<Orders/>}></Route>  
        </Routes>
      </Router>

    </>
  )
}

export default App
