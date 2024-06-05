import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./presentation/layouts/Layout"
import { Login } from "./presentation/pages/Login"
import { Dashboard } from "./presentation/pages/Dashboard"
import Home from "./presentation/pages/Home"
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home/>} />
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={<Layout />} >
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
    
    </BrowserRouter>
  )
}

export default App
