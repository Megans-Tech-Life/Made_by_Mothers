import React, { useState } from "react";
import EditProfileModal from "../../components/EditProfileModal/EditProfileModal";
import "./Profile.css";

function Profile({ user, onLogout }) {
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <div className="profile">
      <div className="profile-container">
        <h1>Welcome to your Profile</h1>

        <div className="profile__info">
          <div className="profile__avatar">
            {/* Placeholder for user avatar */}
            <img src={user?.photoUrl} alt={user?.name} />
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
        <div className="profile__favorites">
          <h2>Your Favorite Recipes</h2>
          {user?.favorites && user.favorites.length > 0 ? (
            <ul>
              {user.favorites.map((recipe, index) => (
                <FoodCard key={index} {...recipe} />
              ))}
            </ul>
          ) : (
            <div>
              <p>No favorite recipes yet.</p>
              <p>
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
          onUpdateProfile={(data) => console.log("Updated profile:", data)}
        />
      </div>
    </div>
  );
}

export default Profile;
