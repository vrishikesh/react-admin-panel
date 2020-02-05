import actionType from '../../actionTypes'

const initialState = {
  loading: false,
  cities: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.city.REQUEST: return {
      ...state,
      loading: true
    }

    case actionType.city.SUCCESS: return {
      ...state,
      loading: false,
      cities: action.payload,
      error: ''
    }

    case actionType.city.FAILURE: return {
      ...state,
      loading: false,
      cities: [],
      error: action.payload
    }

    default: return state
  }
}

export default reducer
