export interface Comment {
    id: number;
    text: string;
    parentId: number | null; // Null for top-level comments
    children?: Comment[]; // Nested replies
  }
  
  export interface Post {
    id: number;
    title: string;
    content: string;
    comments: Comment[];
  }
  