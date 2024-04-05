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
