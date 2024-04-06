// I was going to use Pinia to handle state management, but i was having a configuration bug, so i just used raw axios.

import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const apiClient = axios.create({
    baseURL: config.public.apiBaseUrl,
    timeout:  5000,
  });

  apiClient.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return {
    provide: {
      apiClient,
    },
  };
});
