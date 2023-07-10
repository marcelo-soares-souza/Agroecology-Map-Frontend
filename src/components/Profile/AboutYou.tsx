import { useEffect, useState } from "react";

import classes from "../../pages/Profile.module.css";
import { Button } from "../UI/Button";

interface IAboutYou {
  pronouns: string;
  shortBio: string;
  changePage: Function;
  onShortBioChange: Function;
  onPronounsChange: Function;
}

const AboutYou = (props: IAboutYou) => {
  const [shortBio, setShortBio] = useState("");
  const [pronouns, setPronouns] = useState("");

  useEffect(() => {
    setShortBio(props.shortBio);
    setPronouns(props.pronouns);
  }, []);

  const nextPageHandler = () => {
    props.changePage("WhereAreYouFrom");
  };

  const previousPageHandler = () => {
    props.changePage("RequiredProfileInformation");
  };

  const shortBioChangedHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    setShortBio(value);
    props.onShortBioChange(value);
  };

  const pronounsChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (pronouns != value) setPronouns(value);
    props.onPronounsChange(value);
  };

  return (
    <>
      <div className={classes.firstColumn}>
        <div className="h-group">
          <h1 className={classes.title}>About You</h1>
          <p className="light-text">
            Every detail counts for you to be found by future clients or
            partners, enthusiasts and researchers!
          </p>
        </div>
        <div className="w-full">
          <h3 className="mb-1">Pronouns</h3>
          <input
            className="w-full"
            type="text"
            placeholder="They, She, He, Any"
            onChange={pronounsChangeHandler}
          />
        </div>
        <div className="w-full">
          <h3 className="mb-1">Short Bio</h3>
          <textarea
            className={classes.textArea + " w-full"}
            placeholder="What's your experience? What do you do? Tell the community about yourself..."
            onChange={shortBioChangedHandler}
          />
        </div>

        <div
          className="contain-center"
          style={{
            alignSelf: "stretch",
            justifyContent: "flex-start",
            gap: "1rem"
          }}
        >
          <Button
            icon="<"
            color="1"
            fill="outline"
            onClick={previousPageHandler}
          >
            Back
          </Button>

          <Button icon={">"} color="1" fill="normal" onClick={nextPageHandler}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default AboutYou;
