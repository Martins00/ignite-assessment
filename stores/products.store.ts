import { defineStore } from "pinia";
import * as homeService from "@/services/products.service";

interface State {}

export const useProductsStore = defineStore({
  id: "products",
  state: (): State => ({}),
  getters: {},
  actions: {
    async getProducts() {
      return new Promise((resolve, reject) => {
        homeService
          .getProducts()
          .then(({ data }) => {
            data = data.data;
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
