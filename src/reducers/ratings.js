// this could be obtained from an API
const defaultRatings = [
  {
    id: 1,
    slug: `helmet`,
    average: 4.2,
    total: 21890,
  },
  {
    id: 2,
    slug: `jacket`,
    average: 3.1,
    total: 17807,
  }
];

const ratingsReducer = (state = defaultRatings, action) => {
  switch (action.type) {
    case 'SET_RATINGS_DATA':
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default ratingsReducer;
