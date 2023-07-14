import { useEffect, useState } from "react";

// types
import { IAccount } from "../../interfaces/IAccount";

// icons
import { BsPersonLinesFill } from "react-icons/bs";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FiMail } from "react-icons/fi";

// components
import { Button } from "../UI/Button";
import { FormattedLocation } from "./FormattedLocation";

// styles
import classes from "./ProfileView.module.css";

const ProfileView = (props: IAccount) => {
  const [hasPronouns, setHasPronouns] = useState(false);
  const [hasAboutMe, setHasAboutMe] = useState(false);
  const [hasHighLights, setHasHighLights] = useState(false);
  const [hasServices, setHasServices] = useState(false);
  const [hasRelatedLocations, setHasRelatedLocations] = useState(false);
  const [hasRelatedExperiences, sethasRelatedExperiences] = useState(false);
  const [hasFullNameVisible, setHasFullNameVisible] = useState(true);
  const [hasCountryVisible, setHasCountryVisible] = useState(false);

  useEffect(() => {
    setHasAboutMe(props.shortBio?.length ?? 0 > 0 ? true : false);
    setHasFullNameVisible(props.isFullNameVisible ?? true);
    setHasCountryVisible(
      props.location?.country?.length ?? 0 > 0 ? true : false
    );
    setHasPronouns(props.pronouns?.length ?? 0 > 0 ? true : false);
  }, [props]);

  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <img src={props.images?.banner} alt="Profile Banner" />
      </div>
      <div className={classes.avatarCtaContainer}>
        <div className={classes.avatar}>
          {/* <div className={classes.avatarMock} /> */}
          <img src={props.images?.avatar} alt="Profile Avatar" />
        </div>
        <div className={classes.ctaContainer + " mb-0"}>
          <Button color="2" fill="normal">
            <FiMail size={32} />
            &nbsp;
            {"Contact me"}
          </Button>
        </div>
      </div>
      <div className={classes.textContainer}>
        <div>
          <div className="d-flex">
            <div>
              {props.accountName && (
                <h1>
                  {hasFullNameVisible && props.fullName
                    ? props.fullName
                    : "@" + props.accountName}
                </h1>
              )}
              {hasFullNameVisible && props.fullName && (
                <p>
                  <strong>{"@" + props.accountName}</strong>
                </p>
              )}
            </div>
            {hasPronouns && (
              <small style={{ margin: "0.15rem 0.25rem" }}>
                <p>{"(" + props.pronouns + ")"}</p>
              </small>
            )}
          </div>
          <ul className={classes.details}>
            {hasCountryVisible && props.location && (
              <li>
                <HiOutlineMapPin />
                &nbsp;
                <p>
                  <FormattedLocation location={props.location} />
                </p>
              </li>
            )}
            {props.professionalDetails?.profession && (
              <li>
                <BsPersonLinesFill />
                &nbsp;
                <p>{props.professionalDetails.profession}</p>
              </li>
            )}
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

        {hasRelatedLocations && (
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
