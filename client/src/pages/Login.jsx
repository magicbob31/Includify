import { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    motDePasse: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    motDePasse: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const validateMotDePasse = (motDePasse) => motDePasse.length >= 8;

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailError = validateEmail(formData.email)
      ? ""
      : "* Email incorrect *";
    const motDePasseError = validateMotDePasse(formData.motDePasse)
      ? ""
      : "* Le mot de passe doit contenir au moins 8 caractères *";

    setErrors({
      email: emailError,
      motDePasse: motDePasseError,
    });

    if (!emailError && !motDePasseError) {
      // eslint-disable-next-line no-console
      console.log("Form data is valid. Submitting form...");
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <h2>Se connecter</h2>
      </div>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p style={{ color: "red" }} className="error">
              {errors.email}
            </p>
          )}
          <input
            type="password"
            name="motDePasse"
            placeholder="Mot de passe"
            value={formData.motDePasse}
            onChange={handleChange}
          />
          {errors.motDePasse && (
            <p style={{ color: "red" }} className="error">
              {errors.motDePasse}
            </p>
          )}
          <div>
            <Link to="/changepassword">
              <p>Mot de passe oublié ?</p>
            </Link>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
