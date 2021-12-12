import axios from "axios";

const instance = axios.create({ // Шаблон запросов с настройками
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "8ff30bb7-8145-4ec9-88f5-83f283a96242"
  }
})

export const usersApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
      return response.data
    })
    
  },

  follow(userId) {
     return instance.post(`follow/${userId}`)
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },

  getProfile(userId) {
    console.warn('Old method. Use profileApi')
    return profileApi.getProfile(userId)
  },

}

export const profileApi = {
  getProfile(userId) {
    return instance.get(`profile/` + userId)
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status) { //Id не передаем т.к через куки сервер сам знает какой пользователь отправляет запрос на обновление статуса
    return instance.put(`profile/status`, {status: status}) //вторым параметром отправляем статус, сервак принимает текст в виде обектов в json формате, об этом пишут в документации к api
  }
}

export const authApi = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe})
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}



