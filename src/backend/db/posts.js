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
    content: "At vero eos et accusamus et iusto .",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [{
      _id: uuid(),
      comment: "Your Post is Beautiful",
      firstName: "Abhishek",
      lastName: "Gautam",
      username: "abhishekg",
      avatar:
        "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg",
      createdAt: formatDate(),
      updatedAt: formatDate(),
      votes: {
        upvotedBy: [],
        downvotedBy: [],
      },
    },]
  },
  {
    _id: uuid(),
    caption: "Hello word",
    content: "At vero eos et accusamus et iusto.",
    likes: {
      likeCount: 23,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: []
  },
  {
    _id: uuid(),
    caption: "Hello word",
    content: "At vero eos et accusamus et iusto",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: []
  },
  {
    _id: uuid(),
    caption: "JavaScript a programming language.",
    content: "At vero eos et accusamus et iusto",
    likes: {
      likeCount: 41,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),

    comments: [
      {
        _id: uuid(),
        comment: "Your Post is Super",
        firstName: "Pritam",
        lastName: "Kumar",
        username: "pritamkr",
        avatar:
          "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    caption: "Hello JavaScript",
    content: "At vero eos et accusamus et iusto.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "pritamkr",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: []
  },
  {
    _id: uuid(),
    caption: "Hello JavaScript",
    content: "At vero eos et accusamus et iusto.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "pritamkr",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: []
  },
];
