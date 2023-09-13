import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// types
import { ContactMethods, IAccount } from "../..//interfaces/IAccount";

// icons
import { BsPersonLinesFill, BsWhatsapp } from "react-icons/bs";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FiMail, FiPhone } from "react-icons/fi";
import { BiWindows } from "react-icons/bi";

// components
import Translator from "../i18n/Translator";
import Button from "../UI/Button";
import { FormattedLocation } from "./FormattedLocation";

// styles
import classes from "./ProfileView.module.css";

const ProfileView = (props: IAccount) => {
  const { t } = useTranslation();

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

  const contactMethod: ContactMethods =
    props.contact?.contactMethod ?? ContactMethods.email;
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
        <img
          src={props.images?.banner}
          alt={t("userAccountProfile.bannerImgAlt")}
        />
      </div>
      <div className={classes.avatarCtaContainer}>
        <div className={classes.avatar}>
          <img
            src={props.images?.avatar}
            alt={t("userAccountProfile.avatarImgAlt")}
          />
        </div>
        <div className={classes.ctaContainer + " mb-0"}>
          {contactIsVisible && (
            <Button color="2" fill="normal">
              {contactMethod === ContactMethods.email ? (
                <FiMail size={30} />
              ) : contactMethod === ContactMethods.phone ? (
                <FiPhone size={30} />
              ) : contactMethod === ContactMethods.social ? (
                <BiWindows size={30} />
              ) : contactMethod === ContactMethods.whatsapp ? (
                <BsWhatsapp size={30} />
              ) : (
                false
              )}
              &nbsp;
              <Translator path="userAccountProfile.contactButtonText" />
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
            <h2>
              <Translator path="userAccountProfile.aboutMe" />
            </h2>
            <p>{props.shortBio}</p>
          </div>
        )}
        {hasHighLights && (
          <div>
            <h2>
              <Translator path="userAccountProfile.highlights" />
            </h2>
            <div className={classes.hlContainer}>
              <div className={classes.hlCard}>card</div>
            </div>
          </div>
        )}

        {hasServices && (
          <div className={classes.servicesDiv}>
            <h2>
              <Translator path="userAccountProfile.services" />
            </h2>
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
            <h2>
              <Translator path="userAccountProfile.relatedLocations" />
            </h2>
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
            <h2>
              <Translator path="userAccountProfile.relatedExperiences" />
            </h2>
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
