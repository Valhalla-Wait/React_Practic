
import React from "react";
import Profile from './Profile'
import {getUserProfile, getStatus, updateStatus} from '../../redux/profile-reducer'
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";

class ProfileConteiner extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if(!userId) {
      // userId = this.props.AuthUserId;
      userId = 1049
        // if (!userId) {
        //   this.props.history.push('/login')
        // }
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)

    
  }
  render () {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>  //Передаем таким образом пропсы пришедшие в контейнер
  }
}


// let AuthRedirectComponent = withAuthRedirect(ProfileConteiner)

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  AuthUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default 
compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter
  ) (ProfileConteiner)
// connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent)

//Мы конектим нашу же контейнерную компоненту и для того чтобы получить state из mapStateToProps и передать потом его дочерней компоненте