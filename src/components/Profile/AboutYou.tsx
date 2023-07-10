import { useEffect, useState } from "react";

import classes from "../../pages/Profile.module.css";
import { PrevNextButtons } from "./PrevNextButtons";

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

        <PrevNextButtons
          previousPageHandler={previousPageHandler}
          nextPageHandler={nextPageHandler}
        />
      </div>
    </>
  );
};

export default AboutYou;
