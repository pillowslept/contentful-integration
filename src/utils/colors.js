const colors = {
  black: `rgb(21, 21, 21);`,
  blue: `rgb(30, 48, 110)`,
  gray: `rgb(82, 82, 82)`,
  green: `rgb(0, 112, 110)`,
};

export const getColor = (color) => {
  return colors[color] || color[`gray`];
};
