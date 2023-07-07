import { useEffect, useState } from "react";

import classes from "../../pages/Profile.module.css";
import { Button } from "../UI/Button";

interface IAboutYou {
  shortBio: string;
  changePage: Function;
  onShortBioChange: Function;
}

const AboutYou = (props: IAboutYou) => {
  const [shortBio, setShortBio] = useState("");

  useEffect(() => {
    setShortBio(props.shortBio);
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

  return (
    <>
      <div className={classes.firstColumn}>
        <div>
          <h1 className={classes.title}>About You</h1>
          <p className="light-text">
            Every detail counts for you to be found by future clients or
            partners, enthusiasts and researchers!
          </p>
        </div>
        <div>
          <h3>Short Bio</h3>
          <p className={"input-description light-text " + classes.mbSm}>
            {
              "What's your experience? What do you do? Tell the community about yourself..."
            }
          </p>
          <textarea
            className={classes.textArea}
            placeholder=""
            onChange={shortBioChangedHandler}
            value={shortBio}
          />
        </div>

        <div className="contain-center" style={{ alignSelf: "stretch" }}>
          <Button
            icon="<"
            color="1"
            fill="outline"
            onClick={previousPageHandler}
          >
            Previous
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


