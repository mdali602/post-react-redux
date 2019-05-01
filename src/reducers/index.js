import { combineReducers } from 'redux';
import posts from './postReducere';

export default combineReducers({
  posts: posts
});