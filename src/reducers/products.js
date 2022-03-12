// this could be obtained from an API
const defaultProducts = [
  {
    id: 1,
    slug: `helmet`,
    title: `Certified Helmet`,
    image: `https://cdn.pixabay.com/photo/2017/09/16/14/33/electrician-2755682_1280.jpg`,
    price: 500,
    salePrice: 480,
    sizes: [
      {
        id: 1,
        key: `small`,
        title: `Small`
      },
      {
        id: 2,
        key: `medium`,
        title: `Medium`
      },
      {
        id: 3,
        key: `large`,
        title: `Large`
      }
    ],
  },
  {
    id: 2,
    slug: `jacket`,
    title: `Certified Jacket`,
    image: `https://cdn.pixabay.com/photo/2015/06/01/00/20/man-792821_1280.jpg`,
    price: 1200,
    salePrice: 1190,
    colors: [
      {
        id: 1,
        name: `brown`,
        title: `Brown`
      },
      {
        id: 2,
        name: `black`,
        title: `Black`
      },
      {
        id: 3,
        name: `gray`,
        title: `Gray`
      }
    ],
  }
];

const productsReducer = (state = defaultProducts, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS_DATA':
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default productsReducer;
