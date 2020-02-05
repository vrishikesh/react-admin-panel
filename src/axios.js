import axios from 'axios'
import config from './config'
import store from './store'

export const api = axios.create({
  baseURL: config.common.REACT_APP_API_LINK,
  // timeout: 1000,
  headers: {
    lan: config.common.REACT_APP_DEFAULT_LANGUAGE,
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

api.interceptors.request.use(function (config) {
  const state = store.getState()
  if (state.login && state.login.token) {
    const token = state.login.token
    config.headers.Authorization = `Bearer ${token}`
  } else if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
