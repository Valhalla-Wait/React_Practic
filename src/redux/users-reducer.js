import { usersApi } from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
};


const usersReducer = (state = initialState, action) => {

  switch(action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u
        })
      }

    case SET_USERS: {
      return {...state, users: action.users}
    }

    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }
    case SET_USERS_TOTAL_COUNT: {
        return {...state, totalUsersCount: action.totalUsersCount}
    }
    
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state, 
        followingInProgress: action.isFetching
        ? [...state.followingInProgress, action.userId] //кидаем id в массив
        : state.followingInProgress.filter(id => id != action.userId)

        //Если идет запрос, то добавляем id user в массив, если она будет в массиве, то кнопка под юзером заблочиться, иначе если запрос не идет, то id удалиться из массива через filter
      }
    }

    default: 
      return state
  }

}


export const  followSucces = (userId) => ({type: FOLLOW, userId})

export const unfollowSucces = (userId) => ({type: UNFOLLOW, userId})

export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const setUsersTotalCount = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, totalUsersCount})

export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const setIsFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

//Thunks AC

export const getUsersThunkCreator = (page, pageSize) => {    return (dispatch) => {
          dispatch(setIsFetching(true))
          dispatch(setCurrentPage(page))

          usersApi.getUsers(page, pageSize).then(data => {
            dispatch(setUsers(data.items)) // Дата из returna getUsers
            dispatch(setUsersTotalCount(data.totalCount))
            dispatch(setIsFetching(false))
          })
    }
}

export const follow = (userId) => {
            return (dispatch) => {
           
              dispatch(setIsFollowingInProgress(true, userId))

              usersApi.follow(userId).then(response => {
                if (response.data.resultCode === 0) {
               dispatch(followSucces(userId))
                }
                dispatch(setIsFollowingInProgress(false, userId))
              })
    }
  }

export const unfollow = (userId) => {
  return (dispatch) => {
    
         dispatch(setIsFollowingInProgress(true, userId))

             usersApi.unfollow(userId).then(response => {
                if (response.data.resultCode === 0) {
               dispatch(unfollowSucces(userId))
                }
                dispatch(setIsFollowingInProgress(false, userId))
              })
    }
  }


export default usersReducer