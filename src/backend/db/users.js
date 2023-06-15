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
    password: "adarshBalika123#",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    email: "adarshbalika@gmail.com",
  },
  {
    _id: uuid(),
    firstName: "Deepanshi",
    lastName: "Sharma",
    username: "deepee_e",
    password: "Test123#",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    email: "deepnshisharma2510@gmail.com",
  },
];
