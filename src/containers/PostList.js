import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions';

import Post from '../components/Post';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};
/* function PostList({ posts, onDelete }) {
  return (
    <div>
      {posts.map(post => {
        return (
          <Post post={ post } onDelete={ onDelete } key={ post.id } />
        );
      })}
    </div>
  );
} */
/* class PostList extends React.Component {
  render() {
    return (
      <div>
        {this.props.posts.map(post => {
          return (
            <Post post={ post } onDelete={ this.props.onDelete } key={ post.id } />
          );
        })}
      </div>
    )
  }
} */
class PostList extends React.Component {

  onPostDelete = (e) => {
    console.log(e, "EEEEEEEE");
  }
  render() {
    console.log(this.props, "LLLLL");
    return (
      <div>
        {this.props.posts.map(post => {
          return (
            // <Post post={ post } onDelete={ this.props.onDelete } key={ post.id } />
            <div style={ styles } key={ post.id }>
              <h2>{ post.title }</h2>
              <p>{ post.body }</p>
              <button className="btn btn-danger" type="button" onClick={ this.onPostDelete }>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      console.log(id, "IDIDIDIDIDID");
      dispatch(deletePost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);