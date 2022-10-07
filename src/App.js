import "./App.css";
import { connect } from "react-redux";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import { useEffect } from "react";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";


function App(props) {
  useEffect(() => {
    props.initializeApp();
  }, [])

  if(!props.initialized) {
    return <Preloader />
  }

  return (
    <div>
      <h3>Dear user, this project is still in development process</h3>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/dialogs' 
              element={<DialogsContainer 
               />} />

            <Route path='/profile/' 
              element={<ProfileContainer 
               />}
            >
              <Route path=':userId' element={<ProfileContainer />} />
            </Route>

            <Route path='/users'
              element={<UsersContainer />} />

            <Route path='/login'
              element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  connect(mapStateToProps, {initializeApp})
)(App);