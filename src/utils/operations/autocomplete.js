import apiCall from "../api-call";

const autocomplete = (data) => {
  return apiCall("autocomplete", "GET", data);
};

export { autocomplete };
