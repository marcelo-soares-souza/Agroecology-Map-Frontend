import { useEffect, useState } from "react";

// types
import { ContactMethods, IAccount } from "../../interfaces/IAccount";

// icons
import { BsPersonLinesFill, BsWhatsapp } from "react-icons/bs";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FiMail, FiPhone } from "react-icons/fi";
import { BiWindows } from "react-icons/bi";

// components
import { Button } from "../UI/Button";
import { FormattedLocation } from "./FormattedLocation";

// styles
import classes from "./ProfileView.module.css";

const ProfileView = (props: IAccount) => {
  const [hasPronouns, setHasPronouns] = useState(false);
  const [hasAboutMe, setHasAboutMe] = useState(false);
  const [hasHighLights, setHasHighLights] = useState(false);
  const [hasRelatedLocations, setHasRelatedLocations] = useState(false);
  const [hasRelatedExperiences, sethasRelatedExperiences] = useState(false);
  const [hasFullNameVisible, setHasFullNameVisible] = useState(true);
  const [hasCountryVisible, setHasCountryVisible] = useState(false);

  const services = props.professionalDetails?.services ?? [];
  const hasServices = Boolean(
    props.professionalDetails?.services && services.length > 0
  );

  const contactMethod: ContactMethods = props.contact?.contactMethod ?? "Email";
  const contactIsVisible: boolean = props.contact?.isContactVisible ?? true;
  const contactInfo: string = props.contact?.contactInfo ?? "";

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
          {contactIsVisible && (
            <Button color="2" fill="normal">
              {contactMethod == "Email" ? (
                <FiMail size={30} />
              ) : contactMethod == "Phone" ? (
                <FiPhone size={30} />
              ) : contactMethod == "Social" ? (
                <BiWindows size={30} />
              ) : contactMethod == "WhatsApp" ? (
                <BsWhatsapp size={30} />
              ) : (
                false
              )}
              &nbsp;
              {"Contact me"}
            </Button>
          )}
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
          <div className={classes.servicesDiv}>
            <h2>Services</h2>
            <ul
              style={{
                columns: services.length >= 5 ? "2" : "1"
              }}
            >
              {props.professionalDetails?.services?.map((service) => (
                <li>{service}</li>
              ))}
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
