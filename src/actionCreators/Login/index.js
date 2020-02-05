import actionType from '../../actionTypes'
import { api } from '../../axios'
import crypto from 'crypto'

const loginRequest = () => {
  return {
    type: actionType.login.REQUEST
  }
}

const loginSuccess = (data) => {
  return {
    type: actionType.login.SUCCESS,
    payload: data
  }
}

const loginFailure = (error) => {
  return {
    type: actionType.login.FAILURE,
    payload: error
  }
}

const loginInitiate = (email, password) => {
  return function(dispatch) {
    dispatch(loginRequest())

    api({
        url: `/admin/signIn`,
        method: 'post',
        data: {
          email,
          password: crypto.createHash('md5').update(password).digest("hex")
        }
      })
      .then(response => {
        localStorage.setItem('token', response.data.data.token)
        dispatch(loginSuccess(response.data.data.token))
      })
      .catch(error => {
        dispatch(loginFailure(error.message))
      })
  }
}

export default {
  loginInitiate
}
