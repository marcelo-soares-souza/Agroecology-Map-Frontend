import { useEffect, useState } from "react";

import PrevNextButtons from "./PrevNextButtons";

import classes from "../../pages/Profile.module.css";
import { textArea } from "./AboutYou.module.css";
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
    props.changePage("Location");
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
    <div className={classes.firstColumn}>
      <div className="h-group">
        <h1>About you...</h1>
        <p className="text-light">
          Every detail counts for you to be found by future clients or partners,
          enthusiasts and researchers!
        </p>
      </div>
      <div className="w-full">
        <h3>Pronouns</h3>
        <input
          className="w-full"
          type="text"
          placeholder="They, She, He, Any"
          onChange={pronounsChangeHandler}
        />
      </div>
      <div className="w-full">
        <h3>Short Bio</h3>
        <textarea
          className={textArea}
          placeholder="What's your experience? What do you do? Tell the community about yourself..."
          onChange={shortBioChangedHandler}
        />
      </div>

      <PrevNextButtons
        previousPageHandler={previousPageHandler}
        nextPageHandler={nextPageHandler}
      />
    </div>
  );
};

export default AboutYou;
