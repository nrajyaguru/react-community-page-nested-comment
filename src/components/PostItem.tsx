import { useState } from "react";
import { Post, Comment } from "../types/types";
import CommentSection from "./CommentSection";
import { Card, CardContent, Typography, Box, TextField, Button } from "@mui/material";

interface PostItemProps {
  post: Post;
}

function PostItem({ post }: PostItemProps) {
  const [comments, setComments] = useState<Comment[]>(post.comments || []);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        text: newComment,
        parentId: null,
        children: [],
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
    }
  };

  return (
    <Card variant="outlined" sx={{ mt: 2 }} className="post-item">
      <CardContent>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {post.content}
        </Typography>

        {/* Comment Section */}
        <CommentSection
          comments={comments}
          onUpdateComments={(updatedComments) => setComments(updatedComments)}
        />

        {/* Add Comment Form */}
        <Box sx={{ mt: 1 }}>
          <TextField
            label="Add a comment"
            variant="outlined"
            fullWidth
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddComment}
            sx={{ mt: 1 }}
          >
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostItem;
