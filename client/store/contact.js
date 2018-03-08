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
export function fetchContact(name){
  dispatch =>
    axios.post('/api/contact', {"name":name })
      .then(res => {
        console.log("inside")
        return dispatch(postContact(res.data))
      })
      .catch(err => console.log(err))
}

/**
 * REDUCER
 */
export default function (state = [], action) {
  console.log("type", action)
  switch (action.type) {
    case POST_CONTACT:
      return action.contact
    default:
      return state
  }
}
