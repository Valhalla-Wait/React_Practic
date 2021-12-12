import React from 'react'
import { Route } from 'react-router';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderConteiner from './components/Header/HeaderConteiner';
import Nav from './components/Nav/Nav';
import ProfileConteiner from './components/Profile/ProfileConteiner';
import UsersContainer from './components/Users/UsersContainer';
// import LoginConteiner from './components/Login/LoginConteiner';
import Login from './components/Login/Login';
import { Component } from 'react';
import {initializeApp} from './redux/app-reducer'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Preloader from './components/common/Preloader/preloader';

class App extends Component { 
  componentDidMount() {
    this.props.initializeApp()  
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
     <HeaderConteiner />
      <Nav />
      <div className="app-wrapper-content">
        <Route path='/dialogs' render={() => <DialogsContainer/>} />

        <Route path='/profile/:userId?' render={() => <ProfileConteiner />} //Указали парметр для url, чтобы было полное совпадения с route-путес с текущим url
        />
        <Route path='/users' render={() => <UsersContainer />}/>
        
        <Route path='/login' render={() => <Login/>} />
      </div>
      
    </div>
    
  )
  }
  
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default compose(
  withRouter, //Еще раз оборачиваем чтобы не сбивались роуты
  connect(mapStateToProps, {initializeApp}))(App)
