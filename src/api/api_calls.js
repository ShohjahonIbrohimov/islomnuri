import axios from "axios";
import api_urls from "./api_urls";

const getTags = () => {
  return axios({
    url: api_urls.get_tags,
    method: "GET",
  });
};

export { getTags };
