
import { useState } from "react";
import { createPost } from "../api/postApi";
import "../styles/createpost.css";

function CreatePost({ fetchPosts = () => {} }) {

const username = localStorage.getItem("username");

  const [text, setText] = useState("");
  const [image, setImage] = useState(null);



  const handlePost = async () => {

    try {

     const formData = new FormData();

formData.append(
    "username",
    username
);

formData.append(
    "text",
    text
);

if(image){
    formData.append(
        "image",
        image
    );
}

await createPost(formData);

      setText("");
      setImage(null);

      fetchPosts();

      alert("Post created!");

    }

    catch (error) {

      console.log(error);

    }

  };

 return (

<div className="create-post">

    <div className="create-title">
        Create Post
    </div>

    <input
        className="create-input"
        type="text"
        placeholder="What's on your mind?"
        value={text}
        onChange={(e)=>setText(e.target.value)}
    />

    <input
        className="create-input"
        type="file"
        accept="image/*"
        onChange={(e)=> setImage(e.target.files[0])}
    />

    <button className="post-btn" onClick={handlePost}>
    Post
</button>

</div>

);
}

export default CreatePost;