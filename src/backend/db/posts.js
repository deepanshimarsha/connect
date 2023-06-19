import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Follow for more such cuteness!",
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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_cp6y0xHAyKoBxQHpN0kX6LoAUV9gIf-ew&usqp=CAU",
    content: "Ahhh! This face.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
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
    username: "deepanshi",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
