import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const EditProfileModal = ({ isOpen, onClose, onUpdateProfile, user }) => {
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    if (isOpen && user) {
      setName(user.name || "");
      setPhotoUrl(user.photoUrl || "");
    }
  }, [isOpen, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile({ name, photoUrl });
    onClose();
  };

  return (
    <ModalWithForm
      title="Edit Profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Save Changes"
    >
      <label className="edit-profile-label">
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="edit-profile-input"
          placeholder="Enter your name"
          required
        />
      </label>
      <label className="edit-profile-label">
        Photo URL:
        <input
          type="url"
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          className="edit-profile-input"
          placeholder="Enter your photo URL"
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
