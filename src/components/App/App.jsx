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

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  const [recipes, setRecipes] = useState([]); // Fetched later
  const [visibleCount, setVisibleCount] = useState(3);

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
    setVisibleCount((prev) => prev + 3);
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
