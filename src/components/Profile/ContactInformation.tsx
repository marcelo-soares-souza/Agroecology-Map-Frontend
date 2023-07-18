import { useEffect, useState } from "react";
import { ContactMethods } from "../../interfaces/IAccount";

import classes from "../../pages/Profile.module.css";
import { CheckboxItem } from "../CheckboxItem";
import { PrevNextButtons } from "./PrevNextButtons";
import { Button } from "../UI/Button";

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

const contactMethods: ContactMethods[] = [
  "Email",
  "Phone",
  "Social",
  "WhatsApp"
];

const contactPlaceholder = {
  Email: "email address",
  Phone: "phone number with country and area codes",
  Social: "social media link",
  WhatsApp: "WhatsApp number with country and area codes"
};

const ContactInformation = (props: IContactInformationProps) => {
  const [contactMethod, setContactMethod] = useState<ContactMethods>(
    props.contact.contactMethod ?? "Email"
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
        <h1>Get contacted by other users</h1>
        <p className="text-light">
          How would you like to be reached out by other agroecology peers?
        </p>
      </div>
      <div className="w-full">
        <h3>Preferred contact method</h3>
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
              fill={contactMethod === method ? "normal" : "outline"}
              color={contactMethod === method ? "1" : "0"}
              onClick={() => {
                handleContactMethodChange(method);
              }}
            >
              {method}
            </Button>
          ))}
        </div>
        <div>
          <h3>Contact information</h3>
          <input
            className="w-full"
            onChange={handleContactInfoChange}
            placeholder={
              "Type here your " + contactPlaceholder[contactMethod] + "."
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
            label="Visible in profile"
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
