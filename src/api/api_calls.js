import axios from "axios";
import api_urls from "./api_urls";

const getOffers = () => {
  return axios({
    url: api_urls.get_offers,
    method: "GET",
  });
};

// NEWS START
const getNews = () => {
  return axios({
    url: api_urls.get_news,
    method: "GET",
  });
};
// NEWS END

// FINANCE START
const getFinance = () => {
  return axios({
    url: api_urls.get_finance,
    method: "GET",
  });
};

// FINANCE END

// DOMAINS START
const getDomains = (user_id) => {
  return axios({
    url: `${api_urls.get_domains}?user_id=${user_id}`,
    method: "GET",
  });
};

const createDomain = (data) => {
  return axios({
    url: api_urls.create_domain,
    method: "POST",
    data,
  });
};

const deleteDomain = (id) => {
  return axios({
    url: `${api_urls.delete_domain}?id=${id}`,
    method: "DELETE",
  });
};
// DOMAINS END

// OFFER SETTINGS
const getDirectionList = () => {
  return axios({
    url: api_urls.get_direction_list,
    method: "GET",
  });
};

const getOffersAll = () => {
  return axios({
    url: api_urls.get_offers_all,
    method: "GET",
  });
};

const getRegions = () => {
  return axios({
    url: api_urls.get_region_list,
  });
};

// STREAMS START
const createStream = (data) => {
  return axios({
    url: api_urls.create_stream,
    method: "POST",
    data,
  });
};

const deleteStream = (id) => {
  return axios({
    url: `${api_urls.delete_stream}${id}`,
    method: "GET",
  });
};

const getStreamData = (data) => {
  return axios({
    url: api_urls.get_streams,
    method: "GET",
  });
};
// STREAMS END

// REQUESTS START
const getRequests = (data) => {
  return axios({
    url: api_urls.get_requests,
    method: "GET",
  });
};
// REQUESTS END

export {
  getNews,
  getOffers,
  getFinance,
  getDomains,
  createDomain,
  deleteDomain,
  getDirectionList,
  getOffersAll,
  getRegions,
  getStreamData,
  createStream,
  deleteStream,
  getRequests,
};
