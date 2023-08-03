import { useState } from "react";
import { useTranslation } from "react-i18next";
// Types
import { ContactMethods } from "~/interfaces/IAccount";
// Components
import Translator from "../i18n/Translator";
import { CheckboxItem } from "../CheckboxItem";
import Button from "../UI/Button";
import PrevNextButtons from "./PrevNextButtons";
// Styles
import classes from "../../pages/ProfileRegistration.module.css";

interface IContactInformationProps {
  contact: {
    contactMethod?: ContactMethods;
    contactInfo?: string;
    isContactVisible?: boolean;
  };
  changePage: Function;
  onContactChange: Function;
  onContactMethodChange: Function;
  onContactVisibilityChange: Function;
}

const ContactInformation = (props: IContactInformationProps) => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      text: t("profileRegistration.contactInformation.contactMethods.email"),
      value: ContactMethods.email
    },

    {
      text: t("profileRegistration.contactInformation.contactMethods.phone"),
      value: ContactMethods.phone
    },

    {
      text: t("profileRegistration.contactInformation.contactMethods.social"),
      value: ContactMethods.social
    },

    {
      text: t("profileRegistration.contactInformation.contactMethods.whatsapp"),
      value: ContactMethods.whatsapp
    }
  ];

  const contactPlaceholder = {
    Email: "email address.",
    Phone: "phone number with country and area codes.",
    Social: "social media link.",
    WhatsApp: "WhatsApp number with country and area codes."
  };

  const [contactMethod, setContactMethod] = useState<ContactMethods>(
    props.contact.contactMethod ?? ContactMethods.email
  );
  const [contactInfo, setContactInfo] = useState<string>(
    props.contact.contactInfo ?? ""
  );
  const [contactIsVisible, setContactIsVisible] = useState(
    props.contact.isContactVisible ?? true
  );

  const handleContactMethodChange = (method: ContactMethods) => {
    if (method !== props.contact.contactMethod) {
      setContactMethod(method);
      props.onContactMethodChange(method);
    }
  };

  const handleContactVisibilityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isVisible = event.target.checked ?? false;
    if (isVisible !== props.contact.isContactVisible) {
      setContactIsVisible(isVisible);
      props.onContactVisibilityChange(isVisible);
    }
  };

  const handleContactInfoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const info = event.target.value;
    if (info !== props.contact.contactInfo) {
      setContactInfo(info);
      props.onContactChange(info);
    }
  };

  return (
    <div className={classes.firstColumn}>
      <div>
        <h1>
          <Translator path="profileRegistration.contactInformation.title" />
        </h1>
        <p className="text-light">
          <Translator path="profileRegistration.contactInformation.subtitle" />
        </p>
      </div>
      <div className="w-full">
        <h3>
          <Translator path="profileRegistration.contactInformation.contactMethodLabel" />
        </h3>
        <div
          className="d-flex"
          style={{
            textAlign: "center",
            gap: "2rem",
            margin: "0rem 1rem 0.5rem 1rem"
          }}
        >
          {contactMethods.map((method) => (
            <Button
              fill={contactMethod === method.value ? "normal" : "outline"}
              color={contactMethod === method.value ? "1" : "0"}
              onClick={() => {
                handleContactMethodChange(method.value);
              }}
            >
              {method.text}
            </Button>
          ))}
        </div>
        <div>
          <h3>
            <Translator path="profileRegistration.contactInformation.contactInformationLabel" />
          </h3>
          <input
            className="w-full"
            onChange={handleContactInfoChange}
            placeholder={
              t(
                "profileRegistration.contactInformation.contactInformationInputPlaceholder.prefix"
              ) + contactPlaceholder[contactMethod]
            }
            type="text"
            autoComplete="true"
          />
        </div>
        <div
          style={{
            marginLeft: "0.1rem",
            width: "max-content",
            cursor: "pointer"
          }}
        >
          <CheckboxItem
            label={t(
              "profileRegistration.contactInformation.contactVisibleLabel"
            )}
            checked={contactIsVisible}
            onChange={handleContactVisibilityChange}
          />
        </div>
      </div>

      <PrevNextButtons
        isFinal
        disableNext
        previousPageHandler={() => {
          props.changePage("ProfessionalInformation");
        }}
        nextPageHandler={() => {}}
      />
    </div>
  );
};

export default ContactInformation;
