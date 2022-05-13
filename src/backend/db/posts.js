import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    caption: "Hello word",
    content:
      "At vero eos et accusamus et iusto .",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    
  },
  {
    _id: uuid(),
    caption: "Hello word",
    content:
      "At vero eos et accusamus et iusto.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    
  },
  {
    _id: uuid(),
    caption: "Hello word",
    content:
      "At vero eos et accusamus et iusto",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    
  },
  {
    _id: uuid(),
    caption: "Hello word",
    content:
      "At vero eos et accusamus et iusto",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    
  },
  {
    _id: uuid(),
    caption: "Hello JavaScript",
    content:
      "At vero eos et accusamus et iusto.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "pritamkr",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    caption: "Hello JavaScript",
    content:
      "At vero eos et accusamus et iusto.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "pritamkr",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
