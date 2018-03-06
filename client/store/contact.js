import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const POST_CONTACT = 'POST_CONTACT'

/**
 * ACTION CREATORS
 */
const postContact = contact => ({type: POST_CONTACT, contact})

/**
 * THUNK CREATORS
 */
export const fetchContact = (name, email, message) =>
  dispatch =>
    axios.post('/api/contact', {name, email, password })
      .then(res => {
        dispatch(postContact(res.data))
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case POST_CONTACT:
      return action.contact
    default:
      return state
  }
}
