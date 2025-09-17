import axiosInstance from "./axiosInstance";

export const getAPI = (endPoint) => axiosInstance.get("/" + endPoint);

export const createAPI = (endPoint, data) =>
  axiosInstance.post(`/${endPoint}`, data);

export const getServiceById = (id) => axiosInstance.get(`/service/${id}`);

class ApiClient {
  static cache = {};

  static async get(endpoint, useCache = true) {
    const url = endpoint;

    if (useCache && this.cache[url]) {
      return this.cache[url];
    }

    console.log("🌐 Fetching:", url);
    try {
      const res = await axiosInstance.get(url);

      if (useCache) {
        this.cache[url] = res.data;
      }

      console.log("✅ GET Success:", res.data);
      return res.data;
    } catch (error) {
      console.error("❌ GET Error:", error.response || error);
      throw error;
    }
  }

  static async post(endpoint, data) {
    const auth = localStorage.getItem("Auth_Token");

    try {
      const res = await axiosInstance.post(endpoint, data, {
        headers: {
          "Content-Type": "application/json",
          ...(auth && { Authorization: `Bearer ${auth}` }),
        },
      });

      console.log("📩 POST Success:", res.data);
      return res.data;
    } catch (error) {
      console.error("❌ POST Error:", error.response || error);
      throw error;
    }
  }
}

export default ApiClient;
