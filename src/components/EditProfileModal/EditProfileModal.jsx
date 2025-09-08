import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const EditProfileModal = ({ isOpen, onClose, onUpdateProfile }) => {
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

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
