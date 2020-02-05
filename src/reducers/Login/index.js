import actionType from '../../actionTypes'

const initialState = {
  loading: false,
  token: '',
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.login.REQUEST: return {
      ...state,
      loading: true
    }

    case actionType.login.SUCCESS: return {
      ...state,
      loading: false,
      token: action.payload,
      error: ''
    }

    case actionType.login.FAILURE: return {
      ...state,
      loading: false,
      token: '',
      error: action.payload
    }

    default: return state
  }
}

export default reducer
