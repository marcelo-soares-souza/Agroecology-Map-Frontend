import { useEffect, useState } from "react";

// types
import { IAccount } from "../../interfaces/IAccount";

// icons
import { GiPlantRoots, GiGreenhouse, GiMailbox } from "react-icons/gi";

// components
import { FormattedLocation } from "./FormattedLocation";

// styles
import classes from "./ProfileView.module.css";

const ProfileView = (props: IAccount) => {
  const [hasPronouns, setHasPronouns] = useState(false);
  const [hasAboutMe, setHasAboutMe] = useState(false);
  const [hasHighLights, setHasHighLights] = useState(false);
  const [hasServices, setHasServices] = useState(false);
  const [hasRelatetLocations, setHasRelatedLocations] = useState(false);
  const [hasRelatedExperiences, sethasRelatedExperiences] = useState(false);
  const [hasFullNameVisible, setHasFullNameVisible] = useState(true);
  const [hasCountryVisible, setHasCountryVisible] = useState(false);

  useEffect(() => {
    setHasAboutMe(props.shortBio?.length ?? 0 > 0 ? true : false);
    setHasFullNameVisible(props.isFullNameVisible ?? true);
    setHasCountryVisible(
      props.location?.country?.length ?? 0 > 0 ? true : false
    );
  }, [props]);

  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        {/* <img src="#" alt="Profile Banner" /> */}
      </div>
      <div className={classes.avatarCtaContainer}>
        <div className={classes.avatar}>
          <div className={classes.avatarMock} />
          {/* <img src="#" alt="Profile Avatar" /> */}
        </div>
        <div className={classes.ctaContainer}>
          <button className="btn-highlight-2">
            <GiMailbox />
            &nbsp;
            {"Contact me"}
          </button>
        </div>
      </div>
      <div className={classes.textContainer}>
        <div>
          {hasFullNameVisible && <h1>{props.fullName}</h1>}
          <p>
            <strong>{"@" + props.accountName}</strong>
          </p>
          {hasPronouns && <p>{"(he/him)"}</p>}
          <ul className={classes.details}>
            {hasCountryVisible && props.location && (
              <li>
                <GiGreenhouse />
                &nbsp;
                <p>
                  <FormattedLocation location={props.location} />
                </p>
              </li>
            )}
            <li>
              <GiPlantRoots />
              &nbsp;
              <p>Farmer</p>
            </li>
          </ul>
        </div>
        {hasAboutMe && (
          <div>
            <h2>About me</h2>
            <p>{props.shortBio}</p>
          </div>
        )}
        {hasHighLights && (
          <div className={classes.highlightsContainer}>
            <h2>My highlights</h2>
            <div className={classes.hlContainer}>
              <div className={classes.hlCard}>card</div>
            </div>
          </div>
        )}

        {hasServices && (
          <div>
            <h2>Services</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Consectetur adipisicing elit. </li>
              <li>Atque quis officiis repudiandae. </li>
            </ul>
          </div>
        )}

        {hasRelatetLocations && (
          <div>
            <h2>Related Locations</h2>
            <div>
              <div>
                <div>img</div>
                <p>name</p>
              </div>
              <div>
                <div>img</div>
                <p>name</p>
              </div>
              <div>
                <div>img</div>
                <p>name</p>
              </div>
              <div>
                <div>img</div>
                <p>name</p>
              </div>
            </div>
          </div>
        )}

        {hasRelatedExperiences && (
          <div>
            <h2>Related Experiences</h2>
            <div>
              <div>card</div>
              <div>card</div>
              <div>card</div>
              <div>card</div>
              <div>card</div>
              <div>card</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileView;
