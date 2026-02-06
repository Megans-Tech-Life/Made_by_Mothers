import React, { useState } from "react";
import EditProfileModal from "../../components/EditProfileModal/EditProfileModal";
import "./Profile.css";
import Avatar from "../../images/profile.avatar.jpg";
import FoodCard from "../../components/FoodCard/FoodCard";

function Profile({ user, favorites = [], onLogout, onUpdateProfile }) {
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <div className="profile">
      <div className="profile-container">
        <h1 className="profile__title">Welcome</h1>

        <div className="profile__info">
          <div className="profile__avatar">
            <img
              src={
                user?.photoUrl && user.photoUrl.trim() !== ""
                  ? user.photoUrl
                  : Avatar
              }
              alt={user?.name || "Default Avatar"}
            />
          </div>
          <div className="profile__name">
            <h2>{user?.name}</h2>
            <button
              className="profile__edit-btn"
              onClick={() => setIsEditOpen(true)}
            >
              Edit Profile
            </button>
          </div>
        </div>
        <div className="profile__favorites-title">
          <h2>Your Favorite Recipes</h2>
          {favorites && favorites.length > 0 ? (
            <div className="food-card-container">
              {favorites.map((recipe, index) => (
                <FoodCard key={index} {...recipe} />
              ))}
            </div>
          ) : (
            <div className="profile__favorites-added">
              <p className="profile__favorites-message">
                No favorite recipes yet.
              </p>
              <p className="profile__favorites-invite">
                Start exploring our delicious baby food recipes and save your
                favorites by clicking the heart icon!
              </p>
            </div>
          )}
          <button className="profile__logout-btn" onClick={onLogout}>
            Logout
          </button>
        </div>
        <EditProfileModal
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          onUpdateProfile={onUpdateProfile}
          user={user}
        />
      </div>
    </div>
  );
}

export default Profile;
