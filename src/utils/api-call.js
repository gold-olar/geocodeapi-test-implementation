const GEOCODE_API_BASEURL = "https://app.geocodeapi.io/api/v1";

/**
 *
 * @param {"*"} path
 * @param {"*"} method
 * @param {"*"} data
 */

const apiCall = async (path, method = "GET", data) => {
  const url = new URL(`${GEOCODE_API_BASEURL}/${path}`);
  url.search = new URLSearchParams(data).toString();

  try {
    const response = await fetch(url, {
      method: method,
    });

    const { features } = await response.json();

    return {
      status: true,
      message: "Success",
      data: features,
    };
  } catch (err) {
    return {
      status: false,
      message: err.message,
      err,
    };
  }
};

export default apiCall;
