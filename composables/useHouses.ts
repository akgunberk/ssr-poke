import { ref } from "vue";

export const useHouses = () => {
  const houses = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchHouses = async (subdomain: string) => {
    loading.value = true;
    try {
      // Replace with your actual API endpoint
      const response = await fetch(`/api/houses?location=${subdomain}`);
      houses.value = await response.json();
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  };

  return {
    houses,
    loading,
    error,
    fetchHouses,
  };
};
