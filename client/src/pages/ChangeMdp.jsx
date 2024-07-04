import { useState } from "react";
import Header from "../components/Header";
import "./ChangeMdp.scss";

function ChangeMdp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email.includes("@")) {
      newErrors.email = "* Email incorrect *";
      valid = false;
    }

    if (password !== confirmPassword) {
      newErrors.password = "* Les mots de passe ne correspondent pas *";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // eslint-disable-next-line no-console
      console.log("Form submitted");
    }
  };

  return (
    <div className="changeMdp">
      <Header />
      <div className="title">
        <h2>Changer votre mot de passe</h2>
      </div>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="error">{errors.email}</div>}

          <input
            type="password"
            name="password"
            placeholder="Nouveau mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmer votre mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.password && <div className="error">{errors.password}</div>}

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default ChangeMdp;
