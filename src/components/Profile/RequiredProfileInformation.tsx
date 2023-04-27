import { useEffect, useState } from "react";
import { CheckboxItem } from "../../components/CheckboxItem";

import classes from "../../pages/Profile.module.css";

const RequiredProfileInformation = (props: {
  accountName: string;
  fullName: string;
  isFullNameVisible: boolean;
  nextPage: Function;
  onAccountNameChange: Function;
  onFullNameChange: Function;
  onFullNameVisibleChange: Function;
}) => {
  const [accountName, setAccountName] = useState("");
  const [accountNameHasError, setAccountNameHasError] = useState(false);

  const [fullName, setFullName] = useState("");
  const [isFullNameVisible, setIsFullNameVisible] = useState(true);

  useEffect(() => {
    setAccountName(props.accountName);
    setFullName(props.fullName);
    setIsFullNameVisible(props.isFullNameVisible);
  }, [props]);

  const nextPageHandler = () => {
    props.nextPage("AboutYou");
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

  return (
    <>
      <div className={classes.firstColumn}>
        <div>
          <h1 className={classes.title}>Required Profile Information</h1>
          <p className="light-text">
            Your profile will only be public after you fill this basic details.
          </p>
        </div>
        <div>
          <h3>Account name</h3>
          <p className={"input-description light-text " + classes.mbSm}>
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
          <p className={"input-description light-text " + classes.mbSm}>
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
              label="Visible in profile"
              onChange={onFullNameVisibleChange}
              checked={isFullNameVisible}
            />
          </div>
        </div>

        <CheckboxItem>
          <span>
            {"I have read and agree with Agroecology Map's "}
            <a href="#">{"terms of use"}</a>
            {" and "}
            <a href="#">{"privacy policy."}</a>
          </span>
        </CheckboxItem>

        <div className="contain-center" style={{ alignSelf: "stretch" }}>
          <button
            className={classes.btnNext + " btn-highlight-1"}
            onClick={nextPageHandler}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default RequiredProfileInformation;
