import { Post } from "../types/types";
import PostItem from "./PostItem";
import { Grid2 } from "@mui/material";

interface PostListProps {
  posts: Post[];
}

function PostList({ posts }: PostListProps) {
  return (
    <Grid2 spacing={3}>
      {posts.map((post) => (
        <Grid2 key={post.id}>
          <PostItem post={post} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default PostList;
