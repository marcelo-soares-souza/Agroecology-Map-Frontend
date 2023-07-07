import { useTranslation } from "react-i18next";
import Translator from "../components/i18n/Translator";

import classes from "./Register.module.css";

import { SlLocationPin } from "react-icons/sl";
import { Button } from "../components/UI/Button";

const Register = () => {
  return (
    <div className="grid-container">
      <div className="two-columns">
        <div className="contain-center">
          <SlLocationPin size={120} />
        </div>
        <div className="contain-center">
          <div>
            <h1>
              <Translator path="register.heading" />
            </h1>
            <p className="light-text">
              <Translator path="register.description" />
            </p>
            <form className={classes.form} method="POST" action="/register">
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
                  useTranslation().t("register.passwordPlaceholder") ??
                  "Password"
                }
                required
              />
              <a href="/login">
                <Translator path="register.linkToLogin" />
              </a>
              <Button fill="outline" color="1">
                <Translator path="form.submit" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
