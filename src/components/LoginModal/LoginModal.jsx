import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    onLogin({ email, password });
  };

  return (
    <ModalWithForm
      title="Login"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Sign In"
    >
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

export default LoginModal;
