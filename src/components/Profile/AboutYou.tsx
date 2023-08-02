import { useEffect, useState } from "react";

import Translator from "../i18n/Translator";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

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
        <h1>
          <Translator path="profileRegistration.aboutYou.title" />
        </h1>
        <p className="text-light">
          <Translator path="profileRegistration.aboutYou.subtitle" />
        </p>
      </div>
      <div className="w-full">
        <h3>
          <Translator path="profileRegistration.aboutYou.pronounsLabel" />
        </h3>
        <input
          className="w-full"
          type="text"
          placeholder={t(
            "profileRegistration.aboutYou.pronounsInputPlaceholder"
          )}
          onChange={pronounsChangeHandler}
        />
      </div>
      <div className="w-full">
        <h3>
          <Translator path="profileRegistration.aboutYou.shortBioLabel" />
        </h3>
        <textarea
          className={textArea}
          placeholder={t(
            "profileRegistration.aboutYou.shortBioInputPlaceholder"
          )}
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
