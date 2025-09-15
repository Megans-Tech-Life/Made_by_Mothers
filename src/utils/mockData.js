// Mock data for testing purposes

const USE_MOCK = import.meta.env.VITE_APP_USE_MOCK_DATA === "true";

const mockNutritionData = {
  foods: [
    {
      food_name: "apple",
      nf_calories: 250,
      nf_protein: 15,
      nf_total_carbohydrate: 30,
      nf_total_fat: 10,
    },
  ],
};

const mockFavorites = [
  {
    title: "Banana Mash",
    image: "https://via.placeholder.com/150",
    mealType: "Breakfast",
    ingredients: ["1 banana", "1/4 cup milk"],
  },
  {
    title: "Chicken Stew",
    image: "https://via.placeholder.com/200",
    mealType: "Dinner",
    ingredients: ["1/2 cup chicken", "1/4 cup veggies"],
  },
  {
    title: "Avocado Toast",
    image: "https://via.placeholder.com/150",
    mealType: "Snack",
    ingredients: ["1 slice bread", "1/2 avocado"],
  },
  {
    title: "Oatmeal",
    image: "https://via.placeholder.com/150",
    mealType: "Breakfast",
    ingredients: ["1/4 cup oats", "1/2 cup milk"],
  },
  {
    title: "Pea Puree",
    image: "https://via.placeholder.com/150",
    mealType: "Lunch",
    ingredients: ["1/2 cup peas", "1/4 cup water"],
  },
  {
    title: "Apple Puree",
    image: "https://via.placeholder.com/150",
    mealType: "Snack",
    ingredients: ["1 apple", "1/2 cup water"],
  },
];

const mockAuth = {
  user: {
    name: "Test User",
    email: "testuser@example.com",
  },
  token: "mock-jwt-token-123456",
};

const mockLoginResponse = {
  success: true,
  user: {
    name: "Test User",
    email: "testuser@example.com",
  },
};

const mockRegisterResponse = {
  success: true,
  user: {
    name: "New User",
    email: "newuser@example.com",
  },
};

export {
  mockNutritionData,
  mockFavorites,
  mockAuth,
  mockLoginResponse,
  mockRegisterResponse,
};
