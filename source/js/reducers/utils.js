function regexFunc(fraze) {
  const words = fraze
    .split(' ')
    .filter(a => a)
    .map(b => `(?=.*${ b })`)
    .join('');

  return new RegExp(`^${ words }.*$`, 'gi');
}

function filter(arrayOfFrazes, searchFraze) {
  let filteredValues = [];
  if (searchFraze) {
    const regex = regexFunc(searchFraze);
    arrayOfFrazes.forEach((feature, index) => {
      if (feature.match(regex)) {
        filteredValues[index] = feature;
      }
    });
  } else {
    filteredValues = arrayOfFrazes;
  }
  return filteredValues;
}

export {
  filter,
};
