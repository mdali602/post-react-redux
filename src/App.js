// App.js

import React, { Component } from 'react';
// import NewPost from './components/NewPost';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// class App extends Component {
function App() {
//   render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {/* <NewPost /> */}
            <CreatePost />
          </div>
          <div className="col-md-6">
            {/* Display Post */}
            <PostList />
          </div>
        </div>
      </div>
    );
//   }
}

export default App;