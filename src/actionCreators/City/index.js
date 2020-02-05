import actionType from '../../actionTypes'
import { api } from '../../axios'

const fetchRequest = () => {
  return {
    type: actionType.city.REQUEST
  }
}

const fetchSuccess = (cities) => {
  return {
    type: actionType.city.SUCCESS,
    payload: cities
  }
}

const fetchFailure = (error) => {
  return {
    type: actionType.city.FAILURE,
    payload: error
  }
}

const fetchCity = () => {
  return function(dispatch) {
    dispatch(fetchRequest())
    api(`/admin/city`)
      .then(response => {
        const cities = response.data.data
        dispatch(fetchSuccess(cities))
      })
      .catch(error => {
        dispatch(fetchFailure(error.message))
      })
  }
}

export default {
  fetchCity
}
