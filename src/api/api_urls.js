const api_urls = {
  get_offers: "/get-offers?limit=8",
  get_domains: "/domains/get-domains",
  create_domain: "/domains/create",
  delete_domain: "/domains/delete",
  get_finance: "/universal/finance-table",
  get_news: "/admin/news",
  get_requests: "/request/get-request-master",
  // Offer settings
  get_direction_list: "/universal/direction-list",
  get_offers_all: "/universal/get-offers",
  get_region_list: "/universal/region-list",
  get_streams: "/stream/get-streams",
  create_stream: "/generate-form/create",
  delete_stream: "/stream/delete?id=",
};

export default api_urls;
