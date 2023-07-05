import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    img: "https://storage.googleapis.com/kagglesdsdata/datasets/2375964/4006609/-/0/B0OblQvJP0-.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230705%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230705T180017Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=13375fcf0a6b40af149d1b3b09e42735fc61c48702f122fc1f26849dbebaa6a9fad8f704780bfc31a93b028686c84e0100d74a75e94634a33abe5705fa115b89f239dd93a90b1cf7609567aa888f43faee739c4181764e3e53557ea62deb08697d3a4568d205dac1d5f2eeaf84e654818120952727b2600985b64ade9dea60b6093bb3b658cda73ece8cba57f68865f6c43d3ade8c4cd577fb411ce366172bfb27eb0cb25faa6bc9541f5d005f270f0c6866d842a1cb600cb59a086af303e7346b9f344c54e764328fdb2c1566d022e1768f716e89d5adcdfeeab949dfcd0bd4c0457a49fc6172a8d297f47d446c0da4198d9584d59786dc5bb59ae7a9d75e59",
    content: "Ahhh! This face.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "dimitrihere",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "chelphill",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "kenyimatos",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "a_grillz10",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "millimill",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },
  {
    _id: uuid(),
    content: "My Dream Setup",
    img: "https://storage.googleapis.com/kagglesdsdata/datasets/2375964/4006609/3/-/BWkKREyAW-3.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230705%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230705T181002Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=932cd34ef9bcaaf8e0d9379a33672b68da5e093fcf07defa6f49d1389e6f3d58f9ad38a79b17cfaa8590aff53231731ee90b1ded23d9344cf14de3565ac36a7c59e660f12caabdac295140da00dcc738b5687556f85d403c7884320d3041cd482194df5650eab43eea71c63257c3da642db5293acbcca0b52e03bf16c273019a804e5196a6c8c498b9b3f0e31608e488667675ea57ee2a8d650df5e64d3626499cc541431f1e1b0831c1042ac6ca54c2f04c1543085e483b097c59fb8b0826abae208b47bb8e7177ac45f3ec320570e8228b2df92d8cc2d33de77cc438c6355d8a4ea2f05518ed1669a15db49ab93493a533ca27ac32f06c3a7ba377e554952d",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "gloriaHatcher",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "throw_to_ten",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "scotland7jimw",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "kenyimatos",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },

  {
    _id: uuid(),
    content: "This is the cutest thing ever!",
    img: "https://i.etsystatic.com/13595118/r/il/27d2dd/4071274134/il_570xN.4071274134_rlt2.jpg",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "maximep123",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "scotland7jimw",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "chelphill",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "dimitrihere",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
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
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "chelphill",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "kenyimatos",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "a_grillz10",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "millimill",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },

  {
    _id: uuid(),
    content:
      "This is a sample text. @mention friends and add #hastags with the links https://products.com.",
    img: "https://media1.popsugar-assets.com/files/thumbor/q_eu4G_Yfvd1qUU7rkJYpC9Qalk/0x532:1560x2092/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/18/102/n/1922729/2010a3325dd3450317e273.27544324_/i/healthy-meal-prep-dinner-recipes.jpg",
    likes: {
      likeCount: 33,
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
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "scotland7jimw",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "millimill",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "throw_to_ten",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },
  {
    _id: uuid(),
    img: "https://assets.sweat.com/shopify_articles/images/010/005/285/original/BackToGymSWEATf1f07a7f6f79e7b8807d2436a6ae8e8b.jpg?1625801362",
    content: "Ahhh! This face.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "gloriaHatcher",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "dimitrihere",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "chelphill",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "a_grillz10",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },
  {
    _id: uuid(),
    img: "https://storage.googleapis.com/kagglesdsdata/datasets/2375964/4006609/3/0/BSV36pYAh03.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230705%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230705T181014Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=2cdaa89cdef200e5b09576d420614a8ad0be31201a471ba138a701f2b915d699133e182e7e4f6c7ec9560a16822359ffcec0ed7f9e5b4c0b66093a6ffefc5993ba2d9b7d5552560eb2723c9d0058e8873138a410679423c33887b01b82eb66ba6e680f072c6c0b332dedf295d0f5d9b023dafd6b3c2a3c35a199e825e87ac8558630c6a0d1e22b7d3dbaf07a95bad760cbd3156f44e5120c7ed11ca55a304a31d341f5f45a3e562405b0a2d5ddcce45bccf3da531a261cbf07608321e74a4b586f591b9fcb638a723b8e464c339ca953f884efeb900cd2743942d3e4ce5b24ee861fde5909e35bf376cc64464de43fcd0fc7c7d59bdec8ba63b5cc1cbd80f254",
    content: "Ahhh! This face.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "chelphill",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "kenyimatos",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "a_grillz10",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "millimill",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
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
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "chelphill",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "scotland7jimw",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "millimill",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "throw_to_ten",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },
  {
    _id: uuid(),
    img: "https://storage.googleapis.com/kagglesdsdata/datasets/2375964/4006609/-/0/BZ1DegsHc0-.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230705%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230705T125318Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=c449c0e94066c7a0e03b61baf9d1e48b5a191054a74e732ebed9aca14cba32ac123342bdf2b749e71a222c5e4d823d8e3ec4e0ec55a5e90ced11774e2f9381e5b41ff2eaf0f445d5bbf21833b653079c502e8ca5e02a00ff224e102c1f44084553c60ed1367880a72aee6dd6058c8466bbfe477e737f19cec7883fa187b2afc54ef99080d12417e6003b7deb51443163b0df7495bad1adf690e80da8f13e1cf917327006df972b776c30e3b03966389da699ccf61e9b8d8b3feeeabd7e17e78765cb6d0270ee94eaec874416112c81fd45e182eca6b23f42223a56dd8b916da3d836c2aa8f63185a49f8652ba0e45ea8ab143953cdfd6704911c2c187521554d",
    content: "Ahhh! This face.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "maximep123",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "mpurcell50",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "dimitrihere",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "scotland7jimw",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },
  {
    _id: uuid(),
    content: "",
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
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "dimitrihere",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "mpurcell50",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "maximep123",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },
  {
    _id: uuid(),
    content: "",
    img: "https://storage.googleapis.com/kagglesdsdata/datasets/2375964/4006609/-/0/BWicCIyDu0-.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230705%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230705T125324Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=b3b4dd92a932d764a6fbc285734dc7b9d4e3ce168e020f6928e66685682463da4ea578d5e59800b0f3bf821ca8c60845cb02e4f88ff18cd2c4f5822c991fdaa68b2d885329adc298d7df00be1dbaad3410bf4c06d290071a2f665bf046edb693ed0e921eff268e09a408cddc26f75ae31fb4d21cb75ae2272fe02c65edc279bee2a71f0e8ca2cf76ffa581229cbde70c762ac34c2c64319d2842a360715a928cf54f2d00d2706d66902f425cf2b383f43f1228e8ec16791f2d05b0af4757f3372aad26310277899a12545ab15dc609216428b53ffc2077409c5ff78e354998d932c7b6981a7c8e59f280254f20beed23686d1d1e4d23ba603d320a2d154e731a",
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
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "dimitrihere",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "mpurcell50",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "maximep123",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },
  {
    _id: uuid(),
    img: "https://cdn.vox-cdn.com/thumbor/z3cP9Na_6Li5ASRVcuYVl3pvzXw=/0x0:1921x1080/1400x933/filters:focal(1058x194:1364x500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/71947999/HogwartsLegacy_lJosjHD8sY.0.jpg",
    content: "Ahhh! This face.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "chelphill",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "kenyimatos",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "a_grillz10",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "millimill",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
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
    comments: [
      {
        username: "maximep123",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "scotland7jimw",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "chelphill",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "dimitrihere",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },
  {
    _id: uuid(),
    img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fHww&w=1000&q=80",
    content: "Ahhh! This face.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "gloriaHatcher",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "dimitrihere",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "chelphill",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "a_grillz10",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },
  {
    _id: uuid(),
    content: "My Dream Setup",
    img: "https://storage.googleapis.com/kagglesdsdata/datasets/2375964/4006609/-/1/BUpG_ZyF11-.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230705%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230705T180525Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=74d9fd3534457b9d8c040a8dd1949b9b7d1a9b89da09a16d31cce550767f8c5318d0d82ac6c7e14d0dac3873ca82bba20ce8a9d9a3f4858f8497a27ca3407f0721779d2813b5e14b9010a260ca5f2b58b3f86296f7d8f0a4bda66d77f0f9f5413f891943ffa62f96300632e7b40170dcccb2f59fb8c32cd4781be85dbaa41e4a26f0df2bb3c6be1b1276b3e2cc38c5bc4c57e2bc46942da16bb9c4cfb7d47d59ebacfc2c37e0c75daebd5d3f0f18aa8829ccfa6bd760ce18a072f346956414d55fcbcfefc5f80da0f91ffa3d8dec793bfdccb6ee0129caabdd8b70ef7a50308499e706759041bc6a9a6c7f8d4c2c3b46b4644a384b689dfc80f5fcd05a18ca00",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "gloriaHatcher",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "throw_to_ten",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "scotland7jimw",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "kenyimatos",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },
  {
    _id: uuid(),
    content: "My Dream Setup",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJla2tpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "gloriaHatcher",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "throw_to_ten",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "scotland7jimw",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "kenyimatos",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },
  {
    _id: uuid(),
    img: "https://storage.googleapis.com/kagglesdsdata/datasets/2375964/4006609/3/1/BJ_Kn1Xha13.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230705%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230705T181148Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=6028fcbe15181fce4284017e80949b304b635221a70205d03d6f123a535f65577d280cdfcc1a85ea32c41adf3bd2d80e5fe1791ced39c75b746ea2efea2534b40507fdf510e1f313cac933cec3579947248dc73288306a95ce1b377065217c359d28a5a491fe883978c9153191b7b467ea7a48c31b6090fc883afd16ac530ec5bc4f8560a4ed58890d6c6d7b2efbf6b1a2046d84a769876a2014b7a83144ec0e13f3668bd0bb6c785b9654c69112f2b45b3ae12e9b7de659efa3339d15414a686c4c9320ac137224e924bb00df39bee73c3ceb9761899b22944517e239e356f24f5ed729a116a1d8bfa899fc6a3164adec873669861e392e3d8fc5e1f2d72913",
    content: "Ahhh! This face.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "maximep123",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "mpurcell50",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "dimitrihere",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "scotland7jimw",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },
  {
    _id: uuid(),
    img: "https://storage.googleapis.com/kagglesdsdata/datasets/2375964/4006609/3/1/BKYsNuxA013.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230705%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230705T181148Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=08152585dcb0c7559bb55172f3fea3ce9eb00aa94ea5ce56e662b2d819d60fc30e7f29cbea293cb93dcd032e243252324497b8746f997d2eecec1ba3246b2095fd67c302b6094976f916b4bae19e8e873eaae96df22c0592d31fadb8382423e5b18d71c863dcf0777beee528e20ae518eb84a91b317a317c207bbc4914a0a0eedfc1cddbef2191a12f52e5dd037f5752bb425a5f53369df68d231a812e4f4d1e36d94ebf19d9c8050a55aba6b5bdc7608f9216007055f232a4e7a40f083740062a17d945b7b3d090681237e393672100bf5fb441a70cfc307ff28d59e4db70044bfbfad94e22c491bc273e5f56c9676117e99000de5edb7177395d20233d656f",
    content: "Ahhh! This face.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "gloriaHatcher",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "dimitrihere",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "chelphill",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "a_grillz10",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },
  {
    _id: uuid(),
    img: "https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-bites-and-asparagus-recipe.jpg",
    content: "Ahhh! This face.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mpurcell50",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "gloriaHatcher",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "dimitrihere",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "chelphill",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "a_grillz10",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },
  {
    _id: uuid(),
    img: "https://i.guim.co.uk/img/media/d9a438323cc79ea211b741b0db1b7fa0045b7ccc/0_211_5068_3040/master/5068.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8965abff7aa27d126faa14331c6c115d",
    content: "Ahhh! This face.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "maximep123",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "mpurcell50",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "dimitrihere",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "scotland7jimw",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },
  {
    _id: uuid(),
    img: "https://storage.googleapis.com/kagglesdsdata/datasets/2375964/4006609/-/0/BWanerwgq0-.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230705%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230705T180017Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=3a5a2deb0074c333766bff7d22ced9cb328e5c6c77d755fb6642e75f74ba87167a9e8a3352b5696ad909e7ef9d510396ff227597f974480d118d0dd7326140254745be74d21d910ff7372cdd3bc59cbbff20797a17e4ff22748865235af637757a6fb823a7f2bcce4bea3cbe25e2dff54b0ab95c28786a5eb71d678f1e036148be52290fe7fc3f06661c18829fc00d4d566865b520e29e3fe6234a7555d80ac36d4eb9820c601cde4791a3271abbfdb1de2b43febca7db5dd06797544b0fc34aeeee3c4b8231acb94470be2eacfb49595a48fd91e5f5cab7a3c8e0e75b898bbfc25a51cb5bd69bfffbae26347bb31839f41128afdd2afc4b1dcc295eba016a14",
    content: "Ahhh! This face.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "gloriaHatcher",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "dimitrihere",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "chelphill",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "a_grillz10",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },
  {
    _id: uuid(),
    img: "https://storage.googleapis.com/kagglesdsdata/datasets/2375964/4006609/-/2/BXFw7qUlB2-.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230705%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230705T180707Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=87a84e7ff28153a7cc2eb52ec7d842eae8d494769c32322df67c313b58691b4be1c16a6d0698c5678b45341d241569367caa87e464d173d3448bbd0af1e2843f6175d192b7e69c70abb1a45dee58b713acd725aa02f300aeb144a40fe87d6de09fc6c9835e7bab25a9e68bfceddee90b7cbbdbd3c4790d6449237c85db5d7bbd0fdb6b4acbbb7691645a5c2e19888cc831a1f1371c299db63727c8fba7e8b719d51e1ed32228b0db2a7f53f02d82790bbcab677045556ffa6024470e1dab8e937cd2f454b316aa6f8408d6f8b5fbcbedfa57facb1168411ba9393c54cc90c2f3292358efcb6fd65a6ea787651d6053b5ec7e9cdec8345b03be6d4e5b82829abf",
    content: "Ahhh! This face.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "maximep123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "gloriaHatcher",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "dimitrihere",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "chelphill",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "a_grillz10",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },
  {
    _id: uuid(),
    img: "https://storage.googleapis.com/kagglesdsdata/datasets/2375964/4006609/2/2/Bcu4VaUFA22.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230705%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230705T180814Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=129b39c6252d8a012dbd3e70394a28f071f69310d26e6367df53390457236e1e0a5fcc5b9b390ae0ebfd970a3ab3a91726b912ed627397a3364b1b312515d510c9a15b76839349f4133ecea621b398247fb9e5b6fc7e685dfc700d1311cd4d32a1921ea9a304c1b2a0bcbf60f833ef50d94b904cddbc9d4617e5f79fcdff37c550f2201d37c64d5f8232c0d9903e05b236e9e2802c4f70fc48b66818c21d7a8469c85d5ab8eb298a7a38d2b68f743912264ba3ea459aab0220d5f2e93b23489c347437a5cbf3727a4938fde58db476598e6a088c75408f21439c4bd7f6142d8be198612a6a4ced4a599591aba8e0d2aa33dda281d14262d9e7d1972dfb99cb6f",
    content: "Ahhh! This face.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "gloriaHatcher",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "dimitrihere",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "chelphill",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "a_grillz10",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },
  {
    _id: uuid(),
    content: "",
    img: "https://i.guim.co.uk/img/media/27fb0085fe2eee9abc05a2d3e1bd7f21cd872529/0_132_4800_2882/master/4800.jpg?width=465&quality=85&dpr=1&s=none",
    likes: {
      likeCount: 22,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "a_grillz10",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "dimitrihere",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "mpurcell50",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "maximep123",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },

  {
    _id: uuid(),
    content: "My Dream Setup",
    img: "https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        username: "gloriaHatcher",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "throw_to_ten",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "scotland7jimw",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
      {
        username: "kenyimatos",
        comment:
          "Why did the did Chris Paul that GM do not know what he’s doing warriors need a Centre not Chris Paul",
      },
    ],
  },
];
