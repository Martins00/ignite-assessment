<template>
    <ProductsFilter :items="filterItems" />

    <section class="container mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] px-6 lg:px-0 mt-28">
      <CommonLoader v-if="!products" />
      <div v-for="(product, index) in products" :key="product.title">
        <ProductsCard :product="product" />
      </div>
    </section>

    <section class="py-12 bg-gray-100">
     <div class="container mx-auto">
        <p class="text-xl font-semibold mb-4">Inspiration for future getaways</p>

        <div>
          <CommonTabsHeaders :tabs="inspirationHeaders" />
          <CommonTabsBody :options="inspirationOptions" />
        </div>
     </div>
    </section>
</template>

<script setup lang="ts">;
import axios from "axios";
import { apiBaseUrl } from "@/services/products.service";
import type { Product } from '@/models/product'

const products = ref<Product[]>()
const categories = ref<Product[]>()

const filterItems = ref([
  { title: 'AmazingPools', image: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg' },
  { title: 'Cabins', image: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg' },
  { title: 'RuralHouses', image: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg' },
  { title: 'Tropical', image: 'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg' },
  { title: 'Fun', image: 'https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg' },
  { title: 'SharedHouses', image: 'https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg' },
  { title: 'IncredibleViews', image: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg' },
  { title: 'LakeFront', image: 'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg' },
  { title: 'TinyHouses', image: 'https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg' },
  { title: 'Popular', image: 'https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg' },
  { title: 'Impressive', image: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg' },
  { title: 'TreeHouses', image: 'https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg' },
  { title: 'Domes', image: 'https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg' },
  { title: 'Castles', image: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg' },
  { title: 'Novelty', image: 'https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg' },
  { title: 'NationalParks', image: 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg' },
  { title: 'Mansions', image: 'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg' },
  { title: 'FamousCities', image: 'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg' },
  { title: 'Isolated', image: 'https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg' },
  { title: 'Surf', image: 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg' },
  { title: 'Vineyards', image: 'https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg' },
  { title: 'BedAndBreakfast', image: 'https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg' }
])

const inspirationOptions = ref([
  {'location': 'Canmore', 'rental': 'Chalet rentals'},
  {'location': 'Benalmádena', 'rental': 'Apartment rentals'},
  {'location': 'Marbella', 'rental': 'Apartment rentals'},
  {'location': 'Mijas', 'rental': 'Vacation rentals'},
  {'location': 'Prescott', 'rental': 'Vacation rentals'},
  {'location': 'Padstow', 'rental': 'Apartment rentals'},
  {'location': 'South West England', 'rental': 'Cabin rentals'},
  {'location': 'Whitby', 'rental': 'Vacation rentals'},
  {'location': 'Fort Myers', 'rental': 'House rentals'},
  {'location': 'Jacksonville', 'rental': 'Condo rentals'},
  {'location': 'Santa Fe', 'rental': 'Condo rentals'},
  {'location': 'Bermagui', 'rental': 'Vacation rentals'},
  {'location': 'Evans Head', 'rental': 'Vacation rentals'},
  {'location': 'Sawtell', 'rental': 'Vacation rentals'},
  {'location': 'Young', 'rental': 'Vacation rentals'},
  {'location': 'Fredericksburg', 'rental': 'Vacation rentals'},
  {'location': 'New Braunfels', 'rental': 'Cabin rentals'},
  {'location': 'Rockport', 'rental': 'Cabin rentals'},
  {'location': 'Waco', 'rental': 'Condo rentals'},
  {'location': 'Forest of Dean District', 'rental': 'Vacation rentals'}
])

const inspirationHeaders = ref([
    { name: 'Popular', current: true },
    { name: 'Arts & Culture', current: false },
    { name: 'Outdoors', current: false },
    { name: 'Mountains', current: false },
    { name: 'Beach', current: false },
    { name: 'Unique stays', current: false },
    { name: 'Categories', current: false },
    { name: 'Thing to do', current: false },
    { name: 'Travel tips & inspiration', current: false },
    { name: 'Airbnb-friendly apartments', current: false },
]);


// I was going to use Pinia to handle state management, but i was having a configuration bug, so i just used raw axios.
async function getProducts() {
  try {
    const response = await axios.get(`${apiBaseUrl}/products`)
    products.value = response.data.products
  } catch(e: any) {
    //No time to create a toast for this.
    console.log(e)
  }
}
async function getCategories() {
  try {
    const response = await axios.get(`${apiBaseUrl}/products/categories`)
    categories.value = response.data
  } catch(e: any) {
    console.log(e)
  }
}

onMounted( async () => {
  getProducts()
  getCategories()
})
</script>