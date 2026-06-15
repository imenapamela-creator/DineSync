import LoginForm from "../components/LoginForm";
import "../styles/LoginPage.css";
import restaurantImg from "../assets/log.png";
import logoImg from "../assets/LOGO.png";

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-left">
        <img src={restaurantImg} alt="restaurant" className="restaurant-bg" />
        <div className="login-left-overlay center-content">
          <div className="login-logo">
            <img src={logoImg} alt="logo" className="logo-img" />
          </div>
          <div className="login-left-text">
            <h1>
              <span className="text-white">Dine</span>
              <span className="text-orange">Sync</span>
            </h1>
            <p>
              <span className="text-orange">sync</span> your restaurant,
              <br />
              simplify your life
            </p>
            <div className="underline-bar"></div>
          </div>
        </div>
      </div>

      <div className="login-right">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;