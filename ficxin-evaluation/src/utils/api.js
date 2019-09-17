export function getImages(value) {
  const endpoint = `https://images-api.nasa.gov/search?media_type=image&q=${value}`;
  return fetch(endpoint)
    .then((res) => res.json())
    .then(({collection}) => {
      if (collection.items.length === 0) {
        throw new Error(`No info on ${value} at this moment`)
      }

      return collection;
    })
}
