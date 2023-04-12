import { useTranslation } from "react-i18next";
import Translator from "../components/i18n/Translator";

const Register = () => {
  return (
    <div className="grid-container">
      <div className="two-columns">
        <div className="contain-center">
          <p>IMAGEM</p>
        </div>
        <div>
          <h1>
            <Translator path="register.heading" />
          </h1>
          <p>
            <Translator path="register.description" />
          </p>
          <form method="POST" action="/register">
            <label htmlFor="email" hidden>
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="E-mail"
              required
            />
            <label htmlFor="password" hidden>
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder={
                useTranslation().t("register.passwordPlaceholder") ?? "Password"
              }
              required
            />
            <a href="/login">
              <Translator path="register.linkToLogin" />
            </a>
            <button type="submit">
              <Translator path="form.submit" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
