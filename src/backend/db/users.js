import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: 1,
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123#",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    email: "adarshbalika@gmail.com",
    img: "https://github.com/mdo.png",
    bio: "Developer",
    portfolio: "adarshbalikaPortfolio.com",
  },
  {
    _id: 2,
    firstName: "Beyonce",
    lastName: "Carter",
    username: "beyonce",
    password: "Beyonce123#",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    email: "beyonce@gmail.com",
    img: "https://static.hiphopdx.com/2023/06/beyonce-nip-slip-prevented-by-dancer-during-renaissance-world-tour-1200x675.jpg",
    bio: "",
    portfolio: "",
  },
  {
    _id: 3,
    firstName: "Rihanna",
    lastName: "Fenty",
    username: "badgalriri",
    password: "Rihanna123#",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    email: "rihanna@gmail.com",
    img: "https://cdn.britannica.com/83/211883-050-46933F1A/Rihanna-Barbadian-singer-Robyn-Fenty.jpg",
    bio: "",
    portfolio: "",
  },
  {
    _id: 4,
    firstName: "Deepaanshi",
    lastName: "Sharma",
    username: "deepee_e",
    password: "Deepanshi123#",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    email: "deepanshisharma2510@gmail.com",
    img: "https://avatars.githubusercontent.com/u/66241082?s=400&u=3f3df40f563e3a00d9361fc381a0f3435fe09f65&v=4",
    bio: "",
    portfolio: "",
  },
];
