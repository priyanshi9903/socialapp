import { useState } from "react";
import { likePost, commentPost } from "../api/postApi";
import "../styles/postcard.css";

function PostCard({ post, fetchPosts }) {

  const [comment, setComment] = useState("");

  const username = localStorage.getItem("username");

  const handleLike = async () => {
    try {

      await likePost(post._id, username);

      fetchPosts();

    } catch (error) {

      console.log(error);

    }
  };

  const handleComment = async () => {

    console.log("Button Clicked!");

    if (!comment) return;

    
    try {

      console.log("Username =", username);
      await commentPost(
      post._id,
      username,
      comment
       );
      

      setComment("");

      fetchPosts();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="post-card">

      <h2 className="post-user">
      {post.username}
      </h2>

      <p className="post-text">
      {post.text}
      </p>

      {post.image && (
        <img
          src={post.image}
          alt="post"
          className="post-image"
        />
      )}

      <br /><br />

      <button className="action-btn" onClick={handleLike}>
        ❤️ {post.likes?.length || 0}
      </button>

      &nbsp;&nbsp;

      💬 {post.comments?.length || 0}

      <br /><br />

      <input
        className="comment-box"
        type="text"
        placeholder="Write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button
        className="action-btn"
        onClick={handleComment}
        style={{ marginLeft: "10px" }}
      >
        Comment
      </button>

      <br /><br />

      {
        post.comments?.map((c, index) => (

          <div
            key={index}
            style={{
              marginBottom: "8px"
            }}
          >
            <b>{c.username}</b> : {c.comment}
          </div>

        ))
      }

    </div>

  );
}

export default PostCard;