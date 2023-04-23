import { CheckboxItem } from "../../components/CheckboxItem";
import classes from "../../pages/Profile.module.css";

const RequiredProfileInformation = (props: any) => {
  const nextPageHandler = () => {
    props.nextPage("AboutYou");
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
              "This will help you be easily found. Just like the instagram @username."
            }
          </p>
          <input type="text" placeholder="e.g.: @some_name_123" />
        </div>

        <div>
          <h3>Full name</h3>
          <p className={"input-description light-text " + classes.mbSm}>
            {
              "Please, fill your full name bellow. You can hide this from the profile if you want."
            }
          </p>
          <div className={classes.smallGap + " flex-row"}>
            <input type="text" placeholder="Type here your full name..." />
            <CheckboxItem label="Visible in profile" />
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
