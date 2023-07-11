import { useEffect, useState } from "react";

import { CheckboxItem } from "../../components/CheckboxItem";
import { PrevNextButtons } from "./PrevNextButtons";

import classes from "../../pages/Profile.module.css";

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
    const value = event.target.value;
    setAccountNameHasError(false);
    setAccountName(value);
    props.onAccountNameChange(value);
  };

  const accountNameBlurHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (value.length <= 0) {
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
    <>
      <div className={classes.firstColumn}>
        <div className="h-group">
          <h1 className={classes.title}>Required Profile Information</h1>
          <p className="text-light">
            Your profile will only be public after you fill this basic details.
          </p>
        </div>
        <div>
          <h3>Account name</h3>
          <p className={"input-description text-light " + classes.mbSm}>
            {
              "This will help you be easily found. Just like the instagram/twitter @username."
            }
          </p>
          <input
            type="text"
            placeholder="e.g.: @some_name_123"
            onChange={accountNameChangedHandler}
            value={accountName}
            onBlur={accountNameBlurHandler}
            className={`banner ${accountNameHasError ? classes.error : ""}`}
          />
        </div>

        <div>
          <h3>Full name</h3>
          <p className={"input-description text-light " + classes.mbSm}>
            {
              "Please, fill your full name bellow. You can hide this from the profile if you want."
            }
          </p>
          <div className={classes.smallGap + " flex-row"}>
            <input
              type="text"
              placeholder="Type here your full name..."
              onChange={fullNameChangedHandler}
              value={fullName}
            />
            <CheckboxItem
              label="Visible&nbsp;in profile"
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
            {"I have read and agree with Agroecology Map's "}
            <a href="#">{"terms of use"}</a>
            {" and "}
            <a href="#">{"privacy policy."}</a>
          </span>
        </CheckboxItem>

        <PrevNextButtons
          disableNext={!agreedToTerms}
          nextPageHandler={nextPageHandler}
        />
      </div>
    </>
  );
};

export default RequiredProfileInformation;
