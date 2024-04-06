// I was going to use Pinia to handle state management, but i was having a configuration bug, so i just used raw axios.

import { defineStore } from "pinia";
import * as productService from "@/services/products.service";

interface State {}

// export const useProductsStore = defineStore({
//   id: "products",
//   state: (): State => ({}),
//   getters: {},
//   actions: {
//     async getProducts() {
//       return new Promise((resolve, reject) => {
//         productService
//           .getProducts()
//           .then(({ data }) => {
//             data = data.data;
//             resolve(data);
//           })
//           .catch((error) => {
//             reject(error);
//           });
//       });
//     },
//   },
// });
