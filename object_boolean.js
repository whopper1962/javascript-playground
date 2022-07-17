const favoriteItems = [
  {
    name: 'masashi'
  },
  {
    name: 'riko'
  },
  {
    name: 'yuna'
  }
];

favoriteItems.forEach((item_data) => {
  item_data.favorite_count = 1;
});

console.log(favoriteItems);
