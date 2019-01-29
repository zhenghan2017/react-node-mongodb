import { combineReducers } from 'redux';
import { user } from './redux/user.redux';
import { charList } from './redux/charlist.redux'; 
import { chat } from './redux/chat.redux'

export default combineReducers({ user, charList, chat });