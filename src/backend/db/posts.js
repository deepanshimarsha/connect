import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    img: "https://housing.com/news/wp-content/uploads/2023/03/Multi-storey-buildings-Know-classifications-and-benefits-f.jpg",
    content: "Whatever good things we build end up building us.",
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: "throw_to_ten",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "chelphill",
        comment: "indeed",
      },
    ],
  },
  {
    _id: uuid(),
    content: "More stretching less stressing.",
    img: "https://www.cnet.com/a/img/resize/a2ca25f744874d650c7565de1851a9754355b077/hub/2022/02/02/f80a19b8-42a5-4c71-afa2-cb9d5df312cd/gettyimages-1291740163.jpg?auto=webp&fit=crop&height=1200&width=1200",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "scotland7jimw",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "gloriaHatcher",
        comment: "Boy! I didn't expect that at all. You make it look so easy.",
      },
      {
        username: "throw_to_ten",
        comment: "Fabulous mam 💐",
      },
      {
        username: "scotland7jimw",
        comment: "Amazing",
      },
      {
        username: "kenyimatos",
        comment: "I just love your posts so much",
      },
    ],
  },

  {
    _id: uuid(),
    content:
      "Summary: Shortly after the mysterious death of the king of Denmark, his widow remarries with Claudius, his brother. The late King's son, Prince Hamlet, is having a hard time after this remarriage. One evening, guards announce that they have seen a spectrum on the rematch.Meanwhile, Hamlet is courting Ophelia, daughter of minister Polonius. Earth is reluctant about the bond between the Prince and his sister. At night, on the outskirts, Hamlet encounters his father's spectrum that reveals to him he was murdered by Claudius. More will be revealed by reading the book. In My opinion: I liked this book because it already contains very popular quotes like to be or not to be the story is very intriguing like why did the king become a ghost?I advise you to read the book because it is very instructive and very intriguing plus it is good for all theater fans.",
    img: "https://i.etsystatic.com/13595118/r/il/27d2dd/4071274134/il_570xN.4071274134_rlt2.jpg",
    likes: {
      likeCount: 38,
      likedBy: [],
      dislikedBy: [],
    },
    username: "a_grillz10",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_cp6y0xHAyKoBxQHpN0kX6LoAUV9gIf-ew&usqp=CAU",
    content: "Our little tater Todd turns two",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "millimill",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "chelphill",
        comment: "How did that happen? He has grown into such a handsome man",
      },
      {
        username: "kenyimatos",
        comment:
          "So do you guys celebrate birthdays or no? I know you’ve said no before but seems like you guys do",
      },
      {
        username: "a_grillz10",
        comment: "Definitely not crying!!",
      },
      {
        username: "millimill",
        comment: "Cutest thing I’ve seen today!",
      },
    ],
  },

  {
    _id: uuid(),
    content: "healthy lifestyle",
    img: "https://media1.popsugar-assets.com/files/thumbor/q_eu4G_Yfvd1qUU7rkJYpC9Qalk/0x532:1560x2092/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/18/102/n/1922729/2010a3325dd3450317e273.27544324_/i/healthy-meal-prep-dinner-recipes.jpg",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    username: "maximep123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "chelphill",
        comment: "Hum!! Que delícia 😋!!👏👏",
      },
      {
        username: "scotland7jimw",
        comment: "I’m actually drooling 🤤",
      },
      {
        username: "millimill",
        comment: "Don’t let Élio see this",
      },
      {
        username: "throw_to_ten",
        comment: "that looks so tasty 😋",
      },
    ],
  },
  {
    _id: uuid(),
    img: "https://assets.sweat.com/shopify_articles/images/010/005/285/original/BackToGymSWEATf1f07a7f6f79e7b8807d2436a6ae8e8b.jpg?1625801362",
    content: "No skipping leg day",
    likes: {
      likeCount: 99,
      likedBy: [],
      dislikedBy: [],
    },
    username: "dimitrihere",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "gloriaHatcher",
        comment: "I hate Bulgarian squats",
      },

      {
        username: "chelphill",
        comment:
          "Who likes Bulgarian Squats? They initials are spelt B.S. (bull s^t) lololol",
      },
    ],
  },
  {
    _id: uuid(),
    img: "https://media.istockphoto.com/id/636032262/photo/group-of-young-men.jpg?s=612x612&w=0&k=20&c=5RsWB-dCnj60w4EC64VzwG_3HVaqH3wk2RFpzTzKMvo=",
    content: "with the homies",
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mpurcell50",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "This is the cutest thing ever",
    img: "https://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-2.jpg",
    likes: {
      likeCount: 33,
      likedBy: [],
      dislikedBy: [],
    },
    username: "chelphill",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "chelphill",
        comment: "so cute",
      },
      {
        username: "scotland7jimw",
        comment: "Often grow to be 18 feet and 18 years old",
      },
      {
        username: "millimill",
        comment: "Stunning",
      },
    ],
  },
  {
    _id: uuid(),
    img: "https://i.insider.com/5f3175424dca6804400b5667?width=1000&format=jpeg&auto=webp",
    content: "Some grocery shopping",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    username: "a_grillz10",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "Nature at its best",
    img: "https://th-thumbnailer.cdn-si-edu.com/XJFrDNlNhvtv1uH-U6FKdBJ_U2U=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg",
    likes: {
      likeCount: 22,
      likedBy: [],
      dislikedBy: [],
    },
    username: "a_grillz10",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "a_grillz10",
        comment: "Breathtaking view",
      },
      {
        username: "dimitrihere",
        comment: "where is this place",
      },
      {
        username: "mpurcell50",
        comment: "I love nature.",
      },
    ],
  },
  {
    _id: uuid(),
    content: "Living it up!",
    img: "https://s3-us-west-2.amazonaws.com/cdn.panda-gossips.com/production/posts/eyecatches/000/005/138/original.jpeg?1558877543",
    likes: {
      likeCount: 22,
      likedBy: [],
      dislikedBy: [],
    },
    username: "maximep123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "a_grillz10",
        comment: "It was great",
      },
      {
        username: "dimitrihere",
        comment: "Day well spent",
      },
      {
        username: "mpurcell50",
        comment: "You! Yeah, I'm talkinA you!!! lmao",
      },
    ],
  },
  {
    _id: uuid(),
    img: "https://cdn.vox-cdn.com/thumbor/z3cP9Na_6Li5ASRVcuYVl3pvzXw=/0x0:1921x1080/1400x933/filters:focal(1058x194:1364x500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/71947999/HogwartsLegacy_lJosjHD8sY.0.jpg",
    content: "a defining moment – both then and now #HogwartsLegacy",
    likes: {
      likeCount: 58,
      likedBy: [],
      dislikedBy: [],
    },
    username: "maximep123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "chelphill",
        comment:
          "Literally have been playing the past 17hrs & still not sick of it",
      },
      {
        username: "kenyimatos",
        comment:
          "The books have a special place in my heart so cant wait to get hogwarts legacy",
      },
      {
        username: "a_grillz10",
        comment: "My graphics in the game are very poor comparing to this. 🥀",
      },
      {
        username: "millimill",
        comment: "Game of the year i chose Hufflepuff 😁",
      },
    ],
  },
  {
    _id: uuid(),
    content: "Look at that smile",
    img: "https://pbs.twimg.com/media/Ekzemj2WAAAyDcf.jpg",
    likes: {
      likeCount: 27,
      likedBy: [],
      dislikedBy: [],
    },
    username: "gloriaHatcher",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fHww&w=1000&q=80",
    content: "Gains",
    likes: {
      likeCount: 61,
      likedBy: [],
      dislikedBy: [],
    },
    username: "kenyimatos",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "gloriaHatcher",
        comment: "This dude is a fckn beast",
      },
      {
        username: "dimitrihere",
        comment: "No you the man 👉🏽 Kenyi Matos",
      },
    ],
  },
  {
    _id: uuid(),
    content: "",
    img: "https://i.pinimg.com/originals/5c/09/c4/5c09c4dc82dc441dfb26975fe8dc1634.jpg",
    likes: {
      likeCount: 83,
      likedBy: [],
      dislikedBy: [],
    },
    username: "millimill",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "The mountains are calling, and I must go",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJla2tpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "chelphill",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "gloriaHatcher",
        comment: " trop beau 😍",
      },
      {
        username: "throw_to_ten",
        comment: "Hi",
      },
      {
        username: "scotland7jimw",
        comment: "Breathtaking view!",
      },
      {
        username: "kenyimatos",
        comment: "I like this",
      },
    ],
  },
  {
    _id: uuid(),
    img: "https://media.istockphoto.com/id/599882916/photo/happy-women.jpg?s=612x612&w=0&k=20&c=v3J8d4lfUIXI_gVZKxK_hJqtjE4DQ3mbeMfq0h98bmE=",
    content: "Meeting after so long",
    likes: {
      likeCount: 24,
      likedBy: [],
      dislikedBy: [],
    },
    username: "scotland7jimw",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "chelphill",
        comment: "I missed  u",
      },
      {
        username: "mpurcell50",
        comment: "both look good",
      },
    ],
  },

  {
    _id: uuid(),
    img: "https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-bites-and-asparagus-recipe.jpg",
    content: "Healthy living",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mpurcell50",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "gloriaHatcher",
        comment: "All that just to eat it 😂",
      },
      {
        username: "dimitrihere",
        comment: "Waooo",
      },
      {
        username: "chelphill",
        comment: "Wow looks awesome",
      },
      {
        username: "a_grillz10",
        comment:
          "Amazing photo, we 'd enjoy to work with you for extra details message our main account in my biography",
      },
    ],
  },
  {
    _id: uuid(),
    img: "https://i.guim.co.uk/img/media/d9a438323cc79ea211b741b0db1b7fa0045b7ccc/0_211_5068_3040/master/5068.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8965abff7aa27d126faa14331c6c115d",
    content: "When she was just a girl she expected the world...",
    likes: {
      likeCount: 77,
      likedBy: [],
      dislikedBy: [],
    },
    username: "kenyimatos",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "maximep123",
        comment: "This moment!!!",
      },
      {
        username: "mpurcell50",
        comment: "best night of my life",
      },
    ],
  },
  {
    _id: uuid(),
    img: "https://images.pexels.com/photos/2433353/pexels-photo-2433353.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    content: "snow, ski and high mountains",
    likes: {
      likeCount: 40,
      likedBy: [],
      dislikedBy: [],
    },
    username: "throw_to_ten",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "gloriaHatcher",
        comment: "I want to try atleast once",
      },
    ],
  },
  {
    _id: uuid(),
    img: "https://caringheartsanimalhospital.com/wp-content/uploads/2020/12/puppy-teething-symptoms.jpg",
    content: "The cutest little pup on the planet",
    likes: {
      likeCount: 32,
      likedBy: [],
      dislikedBy: [],
    },
    username: "dimitrihere",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "gloriaHatcher",
        comment: "The puppy stage is the cutest but most stressful",
      },
      {
        username: "dimitrihere",
        comment: "I already miss my puppy",
      },
      {
        username: "chelphill",
        comment: "So cute",
      },
    ],
  },

  {
    _id: uuid(),
    content: "Jokic and Nuggets, The champions!",
    img: "https://i.guim.co.uk/img/media/27fb0085fe2eee9abc05a2d3e1bd7f21cd872529/0_132_4800_2882/master/4800.jpg?width=465&quality=85&dpr=1&s=none",
    likes: {
      likeCount: 44,
      likedBy: [],
      dislikedBy: [],
    },
    username: "maximep123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "a_grillz10",
        comment: "It suits him",
      },
      {
        username: "dimitrihere",
        comment: "Good job",
      },
      {
        username: "mpurcell50",
        comment:
          "Bravo Nidzo👏 ne damo se mi tako lako iz tog Vojvodjanskog frtalja",
      },
      {
        username: "throw_to_ten",
        comment:
          "Congratulations on your MVP and NBA Championship Wins Nikola! ",
      },
    ],
  },
];
