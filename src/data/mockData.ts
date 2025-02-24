import { Post } from "../types/types";

export const mockPosts: Post[] = [
  {
    id: 2,
    title: "React Assignment",
    content: "Create a Community Page (Frontend Only) with the following features. View Existing Data: Display a small set of mock posts and comments so the page looks populated.",
    comments: [
      {
        id: 1,
        text: "Post Creation: Allow users to create a new post",
        parentId: null,
        children: [
          {
            id: 1737613912246,
            text: "Comments on Posts: Allow users to comment under a post.",
            parentId: 1,
            children: [
              {
                id: 17376139243422,
                text: "Nested Comments: Users can add comments under other comments (nested structure)",
                parentId: 1737613912246
              }
            ]
          },
          {
            id: 17376143212246,
            text: "Comments on Posts: Allow multiple comments.",
            parentId: 1
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "Welcome to the Community!",
    content: "This is the first post in our community.",
    comments: [
      {
        id: 1,
        text: "Great post!",
        parentId: null,
        children: [
          {
            id: 1737613951246,
            text: "I agree!",
            parentId: 1,
          },
        ],
      },
    ],
  },
];
