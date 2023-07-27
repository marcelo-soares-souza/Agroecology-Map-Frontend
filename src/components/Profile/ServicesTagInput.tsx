import { useEffect, useState } from "react";

import Button from "../UI/Button";

import classes from "./ServicesTagInput.module.css";

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

export default ServicesTagInput;
