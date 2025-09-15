import { useState, useEffect } from "react";
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
import Preloader from "../Preloader/Preloader";

import { fetchNutritionData } from "../../utils/api.js";
import { login, register, checkToken } from "../../utils/auth.js";

import Banana from "../../images/FoodCardImages/banana.oat.jpg";
import Apple from "../../images/FoodCardImages/apple.rice.jpg";
import Salmon from "../../images/FoodCardImages/salmon.carrot.jpg";
import Avocado from "../../images/FoodCardImages/avocado.pea.jpg";
import Chicken from "../../images/FoodCardImages/chicken.zucchini.jpg";
import Broccoli from "../../images/FoodCardImages/broccoli.potatos.jpg";
import Fruit from "../../images/FoodCardImages/fruit.yogurt.jpg";
import Peaches from "../../images/FoodCardImages/peaches.cream.jpg";
import NutritionModal from "../NutritionModal/NutritionModal.jsx";

function App() {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  const [recipes] = useState([
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

  const [nutritionData, setNutritionData] = useState(null);
  const [isNutritionOpen, setIsNutritionOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [visibleCount, setVisibleCount] = useState(2);

  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Keep localStorage in sync if user or isLoggedIn changes (for edge cases)
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn ? "true" : "false");
  }, [isLoggedIn]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken(token)
        .then((userData) => {
          setIsLoggedIn(true);
          setUser(userData);
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("user", JSON.stringify(userData));
        })
        .catch(() => {
          setIsLoggedIn(false);
          setUser(null);
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("user");
          localStorage.removeItem("token");
        });
    }
  }, []);

  const handleViewNutrition = async (ingredients) => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      const data = await fetchNutritionData(ingredients);
      setNutritionData(data);
      setIsNutritionOpen(true);
    } catch (err) {
      console.error("Failed to fetch nutrition info. Try again later.", err);
      setErrorMessage(
        "Failed to fetch nutrition info. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async ({ email, password }) => {
    try {
      const res = await login(email, password);
      if (res.token) {
        localStorage.setItem("token", res.token);
        setIsLoggedIn(true);

        const userObj = {
          name: "Jane Doe",
          email: email,
          photoUrl: "",
          favorites: [],
        };

        setUser(userObj);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(userObj));
      }
      setIsLoginOpen(false);
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Login failed. Please try again.");
    }
  };

  const handleRegister = async ({ name, email, password }) => {
    try {
      const res = await register(name, email, password);
      if (res.token) {
        localStorage.setItem("token", res.token);
        setIsLoggedIn(true);

        const userObj = { name, email, photoUrl: "", favorites: [] };
        setUser(userObj);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(userObj));

        if (res.token) {
          localStorage.setItem("token", res.token);
        }
      }
      setIsRegisterOpen(false);
    } catch (error) {
      console.error("Registration failed:", error);
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
  };

  const handleUpdateProfile = (data) => {
    console.log("Updating profile with:", data);
    setUser((prev) => {
      const updated = { ...prev, ...data };
      localStorage.setItem("user", JSON.stringify(updated));
      return updated;
    });
    setIsEditProfileOpen(false);
  };

  const handleAddFavorite = (recipe) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.title === recipe.title)) return prev;
      return [...prev, recipe];
    });
  };

  const handleRemoveFavorite = (title) => {
    setFavorites((prev) => prev.filter((fav) => fav.title !== title));
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

  if (isLoading) {
    return <Preloader />;
  }

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
              favorites={favorites}
              onAddFavorite={handleAddFavorite}
              onRemoveFavorite={handleRemoveFavorite}
              isLoggedIn={isLoggedIn}
              onViewNutrition={handleViewNutrition}
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
                favorites={favorites}
                onLogout={handleLogout}
                onAddFavorite={handleAddFavorite}
                onRemoveFavorite={handleRemoveFavorite}
                onUpdateProfile={handleUpdateProfile}
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
      <NutritionModal
        isOpen={isNutritionOpen}
        onClose={() => setIsNutritionOpen(false)}
        nutritionData={nutritionData}
        loading={isLoading}
        error={errorMessage}
      />
    </>
  );
}

export default App;
