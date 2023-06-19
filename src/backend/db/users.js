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
    firstName: "Beyonce",
    lastName: "Carter",
    username: "beyonce",
    password: "Beyonce123#",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    email: "beyonce@gmail.com",
  },
  {
    _id: uuid(),
    firstName: "Rihanna",
    lastName: "Fenty",
    username: "badgalriri",
    password: "Rihanna123#",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    email: "rihanna@gmail.com",
  },
  {
    _id: uuid(),
    firstName: "Deepaanshi",
    lastName: "Sharma",
    username: "deepee_e",
    password: "Deepanshi123#",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    email: "deepanshisharma2510@gmail.com",
  },
];
