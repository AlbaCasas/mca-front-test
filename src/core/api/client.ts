import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { getCorsSafeURL } from './getCorsSafeUrl';

// Only includes GET method since the requirements for
// the technical test don't require a more complex solution
export class HTTPClient {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    // I'm using cors-anywhere to avoid
    // CORS related issues when consuming external endpoints
    this.instance = axios.create({
      baseURL: getCorsSafeURL(baseURL)
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
