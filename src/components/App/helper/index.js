import {
  replaceUrlSpaces,
  formatAutocompleteData,
} from "../../../utils/helpers";
import { autocomplete } from "../../../utils/operations/autocomplete";

export const handleChange = (e, setAddress) => {
  const {
    target: { value },
  } = e;

  setAddress(value);
};

export const handleKeyEvents = async (e, address, config, setPredictions) => {
  const { apikey } = config;
  const {
    keyCode,
    target: { value },
  } = e;

  if (keyCode === 32 && address.trim()) {
    setPredictions(false);
    const urlText = replaceUrlSpaces(value.trim());
    const requestData = {
      apikey,
      text: urlText,
      size: 6,
      layers: "address",
    };

    const autoCompleteResponse = await autocomplete(requestData);
    const { status, data } = autoCompleteResponse;

    if (status) {
      const addressLabels = await formatAutocompleteData(data);
      return setPredictions(addressLabels);
    }
    return autoCompleteResponse;
  }
};
