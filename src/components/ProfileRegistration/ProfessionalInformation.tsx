import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
// Components
import Translator from "../i18n/Translator";
import PrevNextButtons from "./PrevNextButtons";
import ServicesTagInput from "./ServicesTagInput";
// Styles
import classes from "@pages/ProfileRegistration.module.css";

interface IProfessionalInformation {
  changePage: Function;
  professionalDetails: {
    profession: string;
    services: string[];
  };
  onProfessionChange: Function;
  onServicesChange: Function;
}

const ProfessionalInformation = (props: IProfessionalInformation) => {
  const { t } = useTranslation();

  const [profession, setProfession] = useState(
    props.professionalDetails.profession || ""
  );

  useEffect(() => {
    setProfession(profession);
  }, [props.professionalDetails.profession]);

  const professionChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value.trim();
    if (value !== props.professionalDetails.profession) {
      props.onProfessionChange(value);
    }
  };

  const previousPageHandler = () => props.changePage("ImageSelection");
  const nextPageHandler = () => props.changePage("ContactInformation");

  return (
    <div className={classes.firstColumn}>
      <div className="h-group">
        <h1>
          <Translator path="profileRegistration.professionalInformation.title" />
        </h1>
        <p className="text-light">
          <Translator path="profileRegistration.professionalInformation.subtitle" />
        </p>
      </div>
      <div className="w-full">
        <h3>
          <Translator path="profileRegistration.professionalInformation.professionLabel" />
        </h3>
        <input
          type="text"
          className="w-full"
          maxLength={30}
          defaultValue={profession}
          onChange={professionChangeHandler}
          placeholder={t(
            "profileRegistration.professionalInformation.professionInputPlaceholder"
          )}
        />
      </div>
      <div className="w-full">
        <h3>
          <Translator path="profileRegistration.professionalInformation.servicesLabel" />
        </h3>
        <p className="input-description text-light">
          <Translator path="profileRegistration.professionalInformation.servicesDesc" />
        </p>

        <div style={{ minHeight: "5rem" }}>
          {
            // Avoid re-render on profession input text change
            useMemo(
              () => (
                <ServicesTagInput
                  onServicesChange={props.onServicesChange}
                  services={props.professionalDetails.services}
                />
              ),
              [props.professionalDetails.services]
            )
          }
        </div>
      </div>

      <PrevNextButtons
        previousPageHandler={previousPageHandler}
        nextPageHandler={nextPageHandler}
      />
    </div>
  );
};

export default ProfessionalInformation;
