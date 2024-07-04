import { useState } from "react";
import Header from "../components/Header";
import "./CreateUser.scss";

function CreateUser() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
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
      <div className="createuser-container">
        <div className="createuser">
          <h2>Créer un compte...</h2>
        </div>
        <div className="createuser-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
            />
            <input
              type="text"
              name="prenom"
              placeholder="Prenom"
              value={formData.prenom}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="password"
              name="motDePasse"
              placeholder="Mot de passe"
              value={formData.motDePasse}
              onChange={handleChange}
            />
            {errors.motDePasse && <p className="error">{errors.motDePasse}</p>}
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
