import { createStore, combineReducers } from 'redux'
import isActive from './reducers/isActive'

let store = createStore(isActive, {home: true, inventory: false, about: false, directions: false})

export default store