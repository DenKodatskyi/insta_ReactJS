import React, { Component } from "react";
import InstService from "../services/instaService";
import User from "./User";
import ErrorMessage from "./Error";

export default class Posts extends Component {
  InstService = new InstService();
  state = {
    posts: [],
    error: false
  }

  componentDidMount() {
    this.updatePosts();
  }

  updatePosts() {
    this.InstService.getAllPosts()
      .then(this.onPostsLoaded)
      .catch(this.onError);
  }

  onPostsLoaded = (posts) => {
    this.setState({
      posts,
      error: false
    });
  }

  onError = (err) => {
    this.setState({
      error: true
    })
  }

  renderItems(arr) {
    return arr.map(item => {
      const { name, altname, photo, src, alt, descr, id } = item;

      return (
        <div className="post" key={id}>
          <User
            src={photo}
            alt={altname}
            name={name}
            min />
          <img src={src} alt={alt}></img>
          <div className="post_name">
            {name}
          </div>
          <div className="Post_descr">
            {descr}
          </div>
        </div>
      )
    });
  }

  render() {
    const {error, posts} = this.state;

    if (error) {
      return <ErrorMessage/>
    } 

    const items = this.renderItems(posts);

    return (
      <div className="left">
        {items}
      </div>
    )
  }
}