import axios from "axios";

class ApiClient {
  constructor(baseURL) {
    this.httpClient = axios.create({
      baseURL: baseURL,
      headers: {
        Accept: "application/json", // Set Accept header for JSON responses
      },
    });
  }

  setCustomHeader(customHeader) {
    this.httpClient.defaults.headers = {
      ...this.httpClient.defaults.headers,
      customHeader,
    };
  }

  // GET request
  async get(endpoint) {
    try {
      const response = await this.httpClient.get(endpoint);
      return response;
    } catch (error) {
      console.error("GET Error:", error.message);
      throw error;
    }
  }

  // POST request
  async post(endpoint, data) {
    try {
      const response = await this.httpClient.post(endpoint, data);
      return response;
    } catch (error) {
      console.error("POST Error:", error.message);
      throw error;
    }
  }

  // PUT request
  async put(endpoint, data) {
    try {
      const response = await this.httpClient.put(endpoint, data);
      return response;
    } catch (error) {
      console.error("PUT Error:", error.message);
      throw error;
    }
  }

  // PATCH request
  async patch(endpoint, data) {
    try {
      const response = await this.httpClient.patch(endpoint, data);
      return response;
    } catch (error) {
      console.error("PATCH Error:", error.message);
      throw error;
    }
  }

  // DELETE request
  async delete(endpoint) {
    try {
      const response = await this.httpClient.delete(endpoint);
      return response;
    } catch (error) {
      console.error("DELETE Error:", error.message);
      throw error;
    }
  }
}

// Example usage
const api = new ApiClient("http://localhost:5000");

export default api;
