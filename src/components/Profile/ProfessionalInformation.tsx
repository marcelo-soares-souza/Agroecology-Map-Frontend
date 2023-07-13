import { Button } from "../UI/Button";
import { PrevNextButtons } from "./PrevNextButtons";

import classes from "../../pages/Profile.module.css";
import { useEffect, useMemo, useState } from "react";

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
            defaultValue={profession}
            onChange={professionChangeHandler}
            placeholder="Farmer, Horticulturist, Teacher, Photographer..."
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
      </div>
      <PrevNextButtons
        previousPageHandler={previousPageHandler}
        nextPageHandler={() => {}}
        isFinal
        disableNext
      />
    </div>
  );
};

interface IServiceTagInput {
  services: string[];
  onServicesChange: Function;
}

const ServicesTagInput = (props: IServiceTagInput) => {
  const [tags, setTags] = useState<string[]>(props.services);

  useEffect(() => {
    setTags(props.services);
  }, [props]);

  const servicesInputKeyHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      servicesSubmitHandler(event.currentTarget.value);
      event.currentTarget.value = "";
    }
  };

  const servicesInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // this may handle lookup later
    const value = event.target.value;
    return;
  };

  const servicesSubmitHandler = (value: string) => {
    const escapedValue = value.trim().replace(/[><;"'\/\\]/g, "");
    if (!escapedValue) return;
    const newTags = escapedValue.split(", ");
    props.onServicesChange(tags.concat(newTags));
  };

  const onTagClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.textContent;
    props.onServicesChange(
      tags.filter((tag) => tag.toLowerCase() !== value?.toLowerCase())
    );
  };

  return (
    <>
      <input
        className="w-full"
        type="text"
        onKeyUp={servicesInputKeyHandler}
        onChange={servicesInputChangeHandler}
        placeholder="Organic Food Baskets, Agrotourism, Tree Pruning Workshops..."
      />
      <div className={classes.tags}>
        {tags.length > 0 &&
          tags.map((el, i) => (
            <Button
              color="2"
              fill="outline"
              icon="x"
              onClick={onTagClickHandler}
              key={`${el}-${i}`}
            >
              {el}
            </Button>
          ))}
      </div>
    </>
  );
};

export default ProfessionalInformation;
