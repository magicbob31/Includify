import "./App.scss";
import { Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <div className="img-bienvenue">
          <h1>Bienvenue</h1>
        </div>
        <div className="text-bienvenue">
          <p>
            Dans un monde de plus en plus connecté, la protection de vos
            informations personnelles est primordiale. Que vous partagiez votre
            CV en ligne pour postuler à des emplois ou que vous le mettiez à
            disposition sur des plateformes professionnelles, il est essentiel
            de garantir la confidentialité de vos données personnelles.
            <br /> <br />
            <h3>
              Pourquoi Flouter les Informations Personnelles ?
            </h3> <br /> Les informations personnelles telles que votre adresse,
            numéro de téléphone, adresse email, et autres détails sensibles
            peuvent être utilisées à des fins malveillantes si elles tombent
            entre de mauvaises mains. Flouter ces informations sur votre CV
            permet de protéger votre identité tout en permettant aux recruteurs
            de se concentrer sur vos compétences et votre expérience.
          </p>
          <div className="input">
            <Link to="/createuser">
              <div className="input">
                <img src="./src/assets/images/6700065.png" alt="" />
                <button type="button">Crée un compte</button>
              </div>
            </Link>
            <Link to="/login">
              <div className="input">
                <img src="./src/assets/images/profile.png" alt="" />
                <button type="button">Ce connecter</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
