import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./components/pages/Header/Header"
import Home from "./components/pages/Home/Home"
import Aboutus from "./components/pages/About us/Aboutus"
import Spots from "./components/pages/Spots/Spots"
import ContactUs from "./components/pages/Contact Us/ContactUs"
import Login from "./components/pages/Login and Signup/Login"
import SignUp from "./components/pages/Login and Signup/SignUp"
import Notfound from "./components/pages/Notfound/NotFound"
import Footer from "./components/pages/Footer/Footer"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <Aboutus></Aboutus>
          </Route>
          <Route path="/spots">
            <Spots></Spots>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App
