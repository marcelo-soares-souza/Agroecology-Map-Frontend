import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// components
import Translator from "../i18n/Translator";
import CheckboxItem from "~/components/CheckboxItem";
import PrevNextButtons from "./PrevNextButtons";

// styles
import classes from "../../pages/ProfileRegistration.module.css";

interface IRequiredProfileInformation {
  accountName: string;
  fullName: string;
  isFullNameVisible: boolean;
  agreedToTerms: boolean;
  changePage: Function;
  onAccountNameChange: Function;
  onFullNameChange: Function;
  onFullNameVisibleChange: Function;
  onAgreedToTermsChange: Function;
}

const RequiredProfileInformation = (props: IRequiredProfileInformation) => {
  const { t } = useTranslation();

  const [accountName, setAccountName] = useState("");
  const [accountNameHasError, setAccountNameHasError] = useState(false);

  const [fullName, setFullName] = useState("");
  const [isFullNameVisible, setIsFullNameVisible] = useState(true);

  const [agreedToTerms, setAgreedToTerms] = useState(false);

  useEffect(() => {
    setAccountName(props.accountName);
    setFullName(props.fullName);
    setIsFullNameVisible(props.isFullNameVisible);
    setAgreedToTerms(props.agreedToTerms);
  }, [props]);

  const nextPageHandler = () => {
    props.changePage("AboutYou");
  };

  const accountNameChangedHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value.toLocaleLowerCase();
    if (value.length < 3) setAccountNameHasError(true);
    if (value === "" || isAccountNameValid(value)) {
      if (value.length >= 3) {
        setAccountNameHasError(false);
      }
      setAccountName(value);
      props.onAccountNameChange(value);
    } else {
      setAccountName((oldValue) => oldValue);
    }
  };

  const isAccountNameValid = (accountName: string) => {
    if (!accountName.match(/^[a-z_-]+$/)) {
      return false;
    }
    return true;
  };

  const accountNameBlurHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (value.length < 3) {
      setAccountNameHasError(true);
    } else {
      setAccountNameHasError(false);
    }
  };

  const fullNameChangedHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setFullName(value);
    props.onFullNameChange(value);
  };

  const onFullNameVisibleChange = () => {
    const value = !isFullNameVisible;
    setIsFullNameVisible(value);
    props.onFullNameVisibleChange(value);
  };

  const agreedToTermsChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.checked;
    setAgreedToTerms(value);
    props.onAgreedToTermsChange(value);
  };

  return (
    <div className={classes.firstColumn}>
      <div className="h-group">
        <h1>
          <Translator path="profileRegistration.requiredProfileInformation.title" />
        </h1>
        <p className="text-light">
          <Translator path="profileRegistration.requiredProfileInformation.subtitle" />
        </p>
      </div>
      <div>
        <h3>
          <Translator path="profileRegistration.requiredProfileInformation.accountNameLabel" />
        </h3>
        <p className={"input-description text-light"}>
          <Translator path="profileRegistration.requiredProfileInformation.accountNameDesc" />
        </p>
        <input
          type="text"
          placeholder={t(
            "profileRegistration.requiredProfileInformation.accountNameInputPlaceholder"
          )}
          onChange={accountNameChangedHandler}
          value={accountName}
          onBlur={accountNameBlurHandler}
          className={`banner ${accountNameHasError ? classes.error : ""}`}
        />
      </div>

      <div>
        <h3>
          <Translator path="profileRegistration.requiredProfileInformation.fullNameLabel" />
        </h3>
        <p className={"input-description text-light"}>
          <Translator path="profileRegistration.requiredProfileInformation.fullNameDesc" />
        </p>
        <div className={"flex-row"} style={{ gap: "0.8rem" }}>
          <input
            type="text"
            placeholder={t(
              "profileRegistration.requiredProfileInformation.fullNameInputPlaceholder"
            )}
            onChange={fullNameChangedHandler}
            value={fullName}
          />
          <CheckboxItem
            label={t(
              "profileRegistration.requiredProfileInformation.fullNameVisible"
            )}
            onChange={onFullNameVisibleChange}
            checked={isFullNameVisible}
          />
        </div>
      </div>

      <CheckboxItem
        checked={agreedToTerms}
        onChange={agreedToTermsChangeHandler}
      >
        <span>
          <Translator path="profileRegistration.requiredProfileInformation.agreedToTerms1" />
          <a href="#">
            <Translator path="profileRegistration.requiredProfileInformation.termsOfUseLink" />
          </a>
          <Translator path="profileRegistration.requiredProfileInformation.agreedToTerms2" />
          <a href="#">
            <Translator path="profileRegistration.requiredProfileInformation.privacyPolicyLink" />
          </a>
        </span>
      </CheckboxItem>

      <PrevNextButtons
        disableNext={!agreedToTerms || accountNameHasError}
        nextPageHandler={nextPageHandler}
      />
    </div>
  );
};

export default RequiredProfileInformation;
