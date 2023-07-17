import axios from "axios";

export const getContent = async (endpoint) => {
  try {
    const response = await axios.get(process.env.VUE_APP_API_URL + endpoint);
    // console.log(response);
    return response;
  } catch (error) {
    if (!error.response) {
      return { status: "No Server Response" };
    } else {
      return error.response;
    }
  }
};

export const getMetaPage = async (pageName) => {
  try {
    const response = await axios.get(
      process.env.VUE_APP_API_URL + "meta-page?name=" + pageName
    );
    return response;
  } catch (error) {
    if (!error.response) {
      return { status: "No Server Response" };
    } else {
      return error.response;
    }
  }
};

export const postContent = async (endpoint, data) => {
  try {
    const response = await axios.post(
      process.env.VUE_APP_API_URL + endpoint,
      data,
      { headers: { "content-type": "multipart/form-data" } }
    );
    return response;
  } catch (error) {
    if (!error.response) {
      return { status: "No Server Response" };
    } else {
      return error.response;
    }
  }
};
