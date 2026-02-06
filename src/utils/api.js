import { mockNutritionData, mockFavorites } from "./mockData";

const USE_MOCK = import.meta.env.VITE_APP_USE_MOCK_DATA === "true";

const APP_ID = import.meta.env.VITE_NUTRITIONIX_APP_ID;
const APP_KEY = import.meta.env.VITE_NUTRITIONIX_APP_KEY;

export const nutritionixBaseUrl =
  "https://trackapi.nutritionix.com/v2/natural/nutrients";

const fetchNutritionData = async (query) => {
  if (USE_MOCK) {
    return mockNutritionData;
  }
  try {
    const response = await fetch(nutritionixBaseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": APP_ID,
        "x-app-key": APP_KEY,
      },
      body: JSON.stringify({ query }),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch nutrition data");
    }
    return await response.json();
  } catch (error) {
    console.error("Nutrition API error:", error);
    throw error;
  }
};

const fetchFavorites = async () => {
  if (USE_MOCK) {
    return mockFavorites;
  }
  return [];
};

export { fetchNutritionData, fetchFavorites };
