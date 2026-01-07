import Navigation from "./components/nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";


function App() {
  return(
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App;
