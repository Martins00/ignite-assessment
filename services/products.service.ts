export const getProducts = async () => {
    const { $apiClient } = useNuxtApp();
    return $apiClient.get("/products");
}