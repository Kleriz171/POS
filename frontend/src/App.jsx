import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom"
import { Home, Orders, Menu, Auth } from "./pages"
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
          <Route path="/menu" element={<Menu/>}/>
          <Route path="*" element={<div>404 Not Found</div>}/>
        </Routes>
        <BottomNav/>
      </Router>

    </>
  )
}

export default App
