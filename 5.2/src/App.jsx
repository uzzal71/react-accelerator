import { useEffect, useState } from "react";
import api from "./api/api";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import Posts from "./components/Posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");

        if (response && response.data) {
          setPosts(response.data);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <div>
        <h1>API Request Axios</h1>
        <hr />
        <div>
          <Posts posts={posts} onDeletePost={""} onEditClick={""} />
          <hr />
          {!post ? (
            <AddPost onAddPost={handleAddPost} />
          ) : (
            <EditPost post={post} onEditPost={handleEditPost} />
          )}
          {error && (
            <>
              <hr />
              <div className="error">{error}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
