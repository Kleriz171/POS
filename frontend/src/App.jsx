import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom"
import { Auth } from "./pages/Auth"
import { Orders } from "./pages/Orders"
import { Home } from "./pages/Home"
import Tables from "./pages/tables"
import Header from "./components/shared/Header"
import BottomNav from "./components/shared/BottomNav"



function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/tables" element={<Tables/>}/>
        </Routes>
        <BottomNav/>
      </Router>

    </>
  )
}

export default App
