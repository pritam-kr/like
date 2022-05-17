import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    bio:"Full Stack Developer", 
    website: "https://adarshbalika.netlify.app/",
    password: "adarshBalika123",
    avatar: "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [{
      _id: uuid(), firstName: "Abhishek",
      lastName: "Gautam",avatar: "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg", username: "abhishekg",
    }], 
    following: [{
      _id: uuid(), firstName: "Pritam",
      lastName: "Kumar",avatar: "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg", username: "pritamkr",
    }]
  },
  {
    _id: uuid(),
    firstName: "Pritam",
    lastName: "Kumar",
    username: "pritamkr",
    bio:"Full Stack Developer", 
    website: "https://google.com/",
    avatar: "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg",
    password: "pritamkr123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
  },
  {
    _id: uuid(),
    firstName: "Abhishek",
    lastName: "Gautam",
    username: "abhishekg",
    bio:"Full Stack Developer", 
    website: "https://google.com/",
    avatar: "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg",
    password: "abhishekG123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
  },
  {
    _id: uuid(),
    firstName: "Srishti",
    lastName: "Maurya",
    username: "srishtim",
    bio:"Full Stack Developer", 
    website: "https://google.com/",
    avatar: "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg",
    password: "srishtim123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
  },
  {
    _id: uuid(),
    firstName: "Shruti",
    lastName: "Raj",
    username: "shrutir",
    bio:"Full Stack Developer", 
    website: "https://google.com/",
    avatar: "https://t3.ftcdn.net/jpg/01/36/49/90/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2.jpg",
    password: "shrutir123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
  },
];
