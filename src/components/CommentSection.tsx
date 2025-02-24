import { useState } from "react";
import { Comment } from "../types/types";
import { Box, Typography, TextField, Button, colors } from "@mui/material";

interface CommentSectionProps {
  comments: Comment[];
  onUpdateComments: (updatedComments: Comment[]) => void; // Prop to update parent state
}

function CommentSection({
  comments,
  onUpdateComments,
}: CommentSectionProps) {
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState("");

  // Recursive function to add a reply
  const addReplyToComment = (
    commentsList: Comment[],
    parentId: number,
    newReply: Comment
  ): Comment[] => {
    return commentsList.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          children: [...(comment.children || []), newReply],
        };
      } else if (comment.children) {
        return {
          ...comment,
          children: addReplyToComment(comment.children, parentId, newReply),
        };
      }
      return comment;
    });
  };

  const handleReplySubmit = (parentId: number) => {
    if (replyText.trim()) {
      const newReply: Comment = {
        id: new Date().getTime(), // Generate unique ID for the reply
        text: replyText,
        parentId,
        children: [],
      };

      const updatedComments = addReplyToComment(comments, parentId, newReply);
      onUpdateComments(updatedComments); // Notify parent component of updates
      setReplyingTo(null);
      setReplyText("");
    }
  };

  const renderComments = (commentsList: Comment[], level = 0) => (
    commentsList.map((comment) => (
      <Box key={comment.id} sx={{ ml: level * 4, mt: 1, pt: 1 }}>
        <Typography sx={{ py: 2, pl: 2, background: colors.grey[200], borderRadius: 3 }} variant="body2" color="text.primary">
          {comment.text}
        </Typography>

        {/* Reply Button */}
        <Button
          variant="text"
          size="small"
          onClick={() =>
            setReplyingTo(comment.id)
          }
          sx={{ mt: 1 }}
        >
          Reply
        </Button>

        {/* Render Nested Comments */}
        {comment.children && renderComments(comment.children, level + 1)}

        {/* Reply Form */}
        {replyingTo === comment.id && (
          <Box sx={{ mt: 2 }}>
            <TextField
              label="Write a reply"
              variant="outlined"
              fullWidth
              autoFocus
              onChange={(e) => setReplyText(e.target.value)}
              size="small"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleReplySubmit(comment.id)}
              sx={{ mt: 1 }}
            >
              Submit Reply
            </Button>
          </Box>
        )}
      </Box>
    ))
  );

  return <>{renderComments(comments)}</>;
};

export default CommentSection;