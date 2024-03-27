import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// Only includes GET method since the requirements for
// the technical test don't require a more complex solution
export class HTTPClient {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL
    });
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.instance.get<T>(url, config);
      return response.data;
    } catch (error) {
      console.error('Error in GET request:', error);
      throw error;
    }
  }
}
