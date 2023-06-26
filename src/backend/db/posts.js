import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_cp6y0xHAyKoBxQHpN0kX6LoAUV9gIf-ew&usqp=CAU",
    content: "Ahhh! This face.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "beyonce",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "This is a sample text. @mention friends and add #hastags with the links https://products.com.",
    img: "https://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-2.jpg",
    likes: {
      likeCount: 33,
      likedBy: [],
      dislikedBy: [],
    },
    username: "badgalriri",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_cp6y0xHAyKoBxQHpN0kX6LoAUV9gIf-ew&usqp=CAU",
    content: "Ahhh! This face.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "deepee_e",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPLJbYf52cpv_wPhhQJbcvZ4BCo9S_SfuKgg&usqp=CAU",
    likes: {
      likeCount: 33,
      likedBy: [],
      dislikedBy: [],
    },
    username: "badgalriri",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "This is the cutest thing ever!",
    img: "https://pbs.twimg.com/media/Ekzemj2WAAAyDcf.jpg",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "My Dream Setup",
    img: "https://img.buzzfeed.com/buzzfeed-static/static/2022-02/11/19/asset/3f96bbcb5250/sub-buzz-1204-1644607356-24.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
