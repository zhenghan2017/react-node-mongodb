import { combineReducers } from 'redux';
import { user } from './redux/user.redux';
import { charList } from './redux/chatlist.redux';

export default combineReducers({ user, charList });