import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CreatePost from "../components/CreatePost";
import FilterTabs from "../components/FilterTabs";
import PostCard from "../components/PostCard";
import BottomNav from "../components/BottomNav";
import { getPosts } from "../api/postApi";

function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {

    try {

      const res = await getPosts();

      console.log(res.data);

      setPosts(res.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  return (

    <div style={{ 
      minHeight:"100vh", 
      paddingBottom:"100px", 
      background: "linear-gradient( 135deg, #0f172a, #1e293b, #111827),"
      }}>

      {/* Top Navbar */}
      <Navbar />

      {/* Create Post */}
      <CreatePost fetchPosts={fetchPosts} />

      {/* Filter Tabs */}
      <FilterTabs />

      {/* Posts */}
      {posts.length > 0 ? (

        posts.map((post) => (

         <PostCard
        key={post._id}
        post={post}
        fetchPosts={fetchPosts}
        />

        ))

      ) : (

        <h3>No posts available</h3>

      )}

      {/* Bottom Navigation */}
      <BottomNav />

    </div>

  );

}

export default Home;