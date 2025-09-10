import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../../Pages/Home/Home.jsx";
import AboutUs from "../../Pages/About/AboutUs.jsx";
import Profile from "../../Pages/Profile/Profile.jsx";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import Banana from "../../images/FoodCardImages/banana.oat.jpg";
import Apple from "../../images/FoodCardImages/apple.rice.jpg";
import Salmon from "../../images/FoodCardImages/salmon.carrot.jpg";
import Avocado from "../../images/FoodCardImages/avocado.pea.jpg";
import Chicken from "../../images/FoodCardImages/chicken.zucchini.jpg";
import Broccoli from "../../images/FoodCardImages/broccoli.potatos.jpg";
import Fruit from "../../images/FoodCardImages/fruit.yogurt.jpg";
import Peaches from "../../images/FoodCardImages/peaches.cream.jpg";

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  const [recipes, setRecipes] = useState([
    {
      image: Banana,
      mealType: "Breakfast",
      title: "Banana Oats Mash",
      ingredients: [
        "1 ripe banana",
        "2 tbsp oats",
        "Splash of breast milk, formula, or water",
      ],
    },
    {
      image: Apple,
      mealType: "Breakfast",
      title: "Apple Cinnamon Rice Cereal",
      ingredients: [
        "1/2 apple",
        "1/4 cup rice cereal",
        "1/3 cup breast milk, formula, or water",
        "A pinch of cinnamon",
      ],
    },
    {
      image: Salmon,
      mealType: "Lunch",
      title: "Salmon Carrot Puree",
      ingredients: [
        "1/2 cup cooked salmon",
        "1 cooked carrot",
        "Splash of breast milk, formula, or water",
      ],
    },
    {
      image: Avocado,
      mealType: "Lunch",
      title: "Avocado Pea Mash",
      ingredients: [
        "1 ripe avocado",
        "1/2 cup cooked peas",
        "Squash of lemon juice(just for freshness) ",
      ],
    },
    {
      image: Chicken,
      mealType: "Dinner",
      title: "Chicken Zucchini Mash",
      ingredients: [
        "2 tbsp cooked chicken",
        "1/2 cup cooked zucchini",
        "Splash of low sodium chicken broth, or water",
      ],
    },
    {
      image: Broccoli,
      mealType: "Dinner",
      title: "Broccoli Potato Puree",
      ingredients: [
        "1/2 cup cooked broccoli",
        "1/2 cup cooked potato",
        "Drizzle of olive oil",
      ],
    },
    {
      image: Fruit,
      mealType: "Snack",
      title: "Fruit Yogurt Swirl(great frozen too!)",
      ingredients: [
        "1/2 cup plain whole milk yogurt",
        "1/2 cup mixed berries",
        "1 tbsp honey (optional)",
      ],
    },
    {
      image: Peaches,
      mealType: "Snack",
      title: "Peach and Cream Puree",
      ingredients: [
        "1 ripe peach",
        "1/2 cup plain whole milk yogurt",
        "1/2 tsp vanilla extract (optional)",
      ],
    },
  ]);

  const [visibleCount, setVisibleCount] = useState(2);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = ({ email, password }) => {
    console.log("Logging in with:", email, password);
    setIsLoggedIn(true);
    setUser({ name: "Jane Doe", email, photoUrl: "", favorites: [] });
    setIsLoginOpen(false);
  };

  const handleRegister = ({ name, email, password }) => {
    console.log("Registering with:", name, email, password);
    setIsLoggedIn(true);
    setUser({ name, email, photoUrl: "", favorites: [] });
    setIsRegisterOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const handleUpdateProfile = (data) => {
    console.log("Updating profile with:", data);
    setUser((prev) => ({ ...prev, ...data }));
    setIsEditProfileOpen(false);
  };

  const handleAddFavorite = (recipe) => {
    if (!user) return;
    setUser((prev) => ({
      ...prev,
      favorites: [...(prev.favorites || []), recipe],
    }));
  };

  const handleRemoveFavorite = (recipeId) => {
    if (!user) return;
    setUser((prev) => ({
      ...prev,
      favorites: prev.favorites.filter((r) => r.id !== recipeId),
    }));
  };

  const handleOpenModal = (modal) => {
    if (modal === "login") setIsLoginOpen(true);
    if (modal === "register") setIsRegisterOpen(true);
    if (modal === "editProfile") setIsEditProfileOpen(true);
  };

  const handleCloseModal = (modal) => {
    if (modal === "login") setIsLoginOpen(false);
    if (modal === "register") setIsRegisterOpen(false);
    if (modal === "editProfile") setIsEditProfileOpen(false);
  };

  const loadMoreRecipes = () => {
    setVisibleCount((prev) => prev + 2);
  };

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onOpenLogin={() => handleOpenModal("login")}
        onOpenRegister={() => handleOpenModal("register")}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              recipes={recipes.slice(0, visibleCount)}
              allRecipes={recipes}
              onLoadMore={loadMoreRecipes}
            />
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Profile
                user={user}
                onLogout={handleLogout}
                onAddFavorite={handleAddFavorite}
                onRemoveFavorite={handleRemoveFavorite}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => handleCloseModal("login")}
        onLogin={handleLogin}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => handleCloseModal("register")}
        onRegister={handleRegister}
      />
      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => handleCloseModal("editProfile")}
        onUpdateProfile={handleUpdateProfile}
      />
    </>
  );
}

export default App;
