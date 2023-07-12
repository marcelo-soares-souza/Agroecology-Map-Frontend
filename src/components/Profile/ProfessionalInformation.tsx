import { Button } from "../UI/Button";
import { PrevNextButtons } from "./PrevNextButtons";

import classes from "../../pages/Profile.module.css";

interface IProfessionalInformation {
  changePage: Function;
  professionalDetails: {
    profession?: string;
    services?: string;
  };
}

const ProfessionalInformation = (props: IProfessionalInformation) => {
  return (
    <div className={classes.firstColumn}>
      <div>
        <div className="mb-1">
          <h1>Professional Information</h1>
          <p className="text-light">
            {
              "Show your skills and experience! Share information about your profession and services with your connections."
            }
          </p>
        </div>
        <div className="mb-3">
          <h3>Profession</h3>
          <input
            type="text"
            className="w-full"
            maxLength={30}
            placeholder="Farmer, Agroforester, Horticulturist and others"
          />
        </div>
        <div>
          <div className="mb-0">
            <h3>Services you offer</h3>
            <p className="input-description text-light">
              {
                'Write a list of services you offer to your clients. Press "Enter" to add more items.'
              }
            </p>
          </div>
          <div>
            <ServicesTagInput />
          </div>
        </div>
      </div>
      <PrevNextButtons
        previousPageHandler={() => {
          props.changePage("ImageSelection");
        }}
        nextPageHandler={() => {}}
        isFinal
        disableNext
      />
    </div>
  );
};

const ServicesTagInput = () => {
  const tags = ["organic food", "seed bank", "agrotourism"];

  return (
    <>
      <input
        className="w-full"
        type="text"
        placeholder="Farmer, Agroforester, Horticulturist and others"
      />
      <div className={classes.tags}>
        {tags.length > 0 &&
          tags.map((el, i) => (
            <Button key={`${el}-${i}`} color="2" fill="outline" icon="x">
              {el}
            </Button>
          ))}
      </div>
    </>
  );
};

export default ProfessionalInformation;
