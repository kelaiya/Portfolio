import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const POST_CONTACT = 'POST_CONTACT'
const WITE_CONTACT = 'WRITE_CONTACT'

/**
 * ACTION CREATORS
 */
function postContact(contact){
  var action = {type: POST_CONTACT, contact}
  return action
} 

/**
 * THUNK CREATORS
 */
export function fetchContact(message){
  dispatch =>
    axios.post('/api/contact/', {"message":message })
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
      return state.push(action.contact)
    default:
      return state
  }
}
