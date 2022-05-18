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
    avatar: "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg",
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
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
      },
    ],
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
    avatar: "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg",
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
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
    avatar: "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg",
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
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
    avatar: "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg",
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
    avatar: "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg",
    username: "pritamkr",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
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
    avatar: "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg",
    username: "pritamkr",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },

  {
    _id: uuid(),
    caption: "Hello Summer.",
    content: "Going to puri beach",
    likes: {
      likeCount: 33,
      likedBy: [],
      dislikedBy: [],
    },
    avatar: "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg",
    username: "shrutir",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },

  {
    _id: uuid(),
    caption: "Hello Swimming 🏊‍♀️ .",
    content: "Going to Goa to chill",
    likes: {
      likeCount: 99,
      likedBy: [],
      dislikedBy: [],
    },
    avatar: "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg",
    username: "shrutir",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },

  {
    _id: uuid(),
    caption: "Happy Sunday 🏊‍♀️ .",
    content: "Going to Kailash",
    likes: {
      likeCount: 99,
      likedBy: [],
      dislikedBy: [],
    },
    avatar: "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg",
    username: "srishtim",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    caption: "I'm Don. 🔫",
    content: "Going to Rishikesh",
    likes: {
      likeCount: 99,
      likedBy: [],
      dislikedBy: [],
    },
    avatar: "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg",
    username: "abhishekg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
];
