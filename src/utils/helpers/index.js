export const replaceUrlSpaces = (str) => {
  return str.replace(/\s/g, "%20");
};

export const formatAutocompleteData = (predictions, country) => {
  if (!country) {
    return predictions.map((prediction) => prediction.properties.label);
  }
};
