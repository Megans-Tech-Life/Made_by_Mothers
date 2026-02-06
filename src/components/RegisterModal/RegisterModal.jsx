import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onRegister }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    onRegister({ email, password, name });
  };

  return (
    <ModalWithForm
      title="Register"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Sign Up"
    >
      <label>
        Name:
        <input type="text" name="name" placeholder="Name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" placeholder="Email" required />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
