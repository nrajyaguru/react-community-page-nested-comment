import { useState } from "react";
import PostList from "./components/PostList";
import { mockPosts } from "./data/mockData";
import CreatePostModal from "./components/CreatePostModal";
import { Container, Button } from "@mui/material";


const App = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: { title: string; content: string }) => {
    const newPostWithId = {
      id: posts.length + 1,
      title: newPost.title,
      content: newPost.content,
      comments: [],
    };
    setPosts([newPostWithId, ...posts]);
    setIsModalOpen(false);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, pb:2 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsModalOpen(true)}
        sx={{ mb: 2 }}
      >
        Create New Post
      </Button>
      <PostList posts={posts} />
      <CreatePostModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </Container>
  );
};

export default App;
