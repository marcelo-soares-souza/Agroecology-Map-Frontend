import { useEffect, useMemo, useState } from "react";

// Components
import PrevNextButtons from "./PrevNextButtons";
import ServicesTagInput from "./ServicesTagInput";

// Styles
import classes from "../../pages/Profile.module.css";

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
        <h1>Professional Information</h1>
        <p className="text-light">
          {
            "Show your skills and experience! Share information about your profession and services with your connections."
          }
        </p>
      </div>
      <div className="w-full">
        <h3>Profession</h3>
        <input
          type="text"
          className="w-full"
          maxLength={30}
          defaultValue={profession}
          onChange={professionChangeHandler}
          placeholder="Farmer, Horticulturist, Teacher, Photographer..."
        />
      </div>
      <div className="w-full">
        <h3>Services you offer</h3>
        <p className="input-description text-light">
          {
            'Write a list of services you offer to your clients. Press "Enter" to add more items.'
          }
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
