import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, unfollow, setIsFollowingInProgress, getUsersThunkCreator} from "../../redux/users-reducer";
import Users from './Users'
import Preloader from "../common/Preloader/preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selectors";



class UsersConteiner extends React.Component {
  //Если мы в конструкторе передаем только пропсы, то можем его удалить, так как реакт делает это по умолчанию
  
  // constructor(props) { //Загуглить конструктор 
  //     super(props) // передаем пропсы родительскому классу React
  //   }
    componentDidMount() {
      
      this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
      
    }
    setPage = (pageNumber) => {
      this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }
    

    
    
  render() {
    
    return <> 
    {this.props.isFetching ? <Preloader/> : null }
    <Users
    totalUsersCount={this.props.totalUsersCount}
    pageSize={this.props.pageSize}
    pagesCount={this.props.pagesCount}
    currentPage={this.props.currentPage}
    setPage={this.setPage}
    users={this.props.users}
    unfollow={this.props.unfollow}
    follow={this.props.follow}
    setIsFollowingInProgress={this.props.setIsFollowingInProgress}
    followingInProgress={this.props.followingInProgress}
    />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setUsersTotalCount: (usersCount) => {
//       dispatch(setUsersTotalCountAC(usersCount))
//     },
//     setToggleFetching: (isFetching) => {
//       dispatch(setIsFetchingAC(isFetching))
//     }
//   }
// }


export default compose(
  connect(mapStateToProps, {follow, unfollow, setCurrentPage, setIsFollowingInProgress, getUsersThunkCreator}),
  withAuthRedirect
  ) (UsersConteiner)
// connect(mapStateToProps, {follow, unfollow, setCurrentPage, setIsFollowingInProgress, getUsersThunkCreator})(UsersConteiner)