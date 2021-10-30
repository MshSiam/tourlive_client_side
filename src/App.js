import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./components/pages/Header/Header"
import Home from "./components/pages/Home/Home"
import Aboutus from "./components/pages/About us/Aboutus"
import ContactUs from "./components/pages/Contact Us/ContactUs"
import Login from "./components/pages/Login and Signup/Login"
import SignUp from "./components/pages/Login and Signup/SignUp"
import Notfound from "./components/pages/Notfound/NotFound"
import Footer from "./components/pages/Footer/Footer"
import SpotPage from "./components/pages/Spots/SpotPage"
import AuthProvider from "./components/context/AuthProvider"
import ManageBooking from "./components/pages/Manage All Booking/ManageBooking"
import AddSpot from "./components/pages/Add spot/AddSpot"
import MyBookings from "./components/pages/My bookings/MyBookings"
import PrivateRoute from "./components/pages/Login and Signup/Private Route/PrivateRoute"
import LearnMore from "./components/pages/learnMore/LearnMore"
import Booking from "./components/pages/Book/Booking/Booking"

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/manageBookings">
              <ManageBooking></ManageBooking>
            </Route>
            <Route path="/myBookings">
              <MyBookings></MyBookings>
            </Route>
            <Route path="/addspot">
              <AddSpot></AddSpot>
            </Route>
            <Route path="/about">
              <Aboutus></Aboutus>
            </Route>
            <Route path="/spots">
              <SpotPage></SpotPage>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <PrivateRoute path="/booking/:bookingId">
              <Booking></Booking>
            </PrivateRoute>

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
      </AuthProvider>
    </div>
  )
}

export default App
