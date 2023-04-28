import { useEffect, useState } from "react";

import classes from "../../pages/Profile.module.css";

interface IWhereAreYouFrom {
  country: string;
  state: string;
  city: string;
  changePage: Function;
  onCountryChange: Function;
  onStateChange: Function;
  onCityChange: Function;
}

const WhereAreYouFrom = (props: IWhereAreYouFrom) => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    setCountry(props.country);
    setState(props.state);
    setCity(props.city);
  }, []);

  const previousPageHandler = () => {
    props.changePage("AboutYou");
  };

  const countryChangedHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setCountry(value);
    props.onCountryChange(value);
  };

  const stateChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setState(value);
    props.onStateChange(value);
  };

  const cityChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCity(value);
    props.onCityChange(value);
  };

  return (
    <>
      <div className={classes.firstColumn}>
        <div>
          <h1 className={classes.title}>Where are You From?</h1>
        </div>
        <div>
          <h3>Country</h3>
          <input
            type="text"
            placeholder="e.g.: Kenya"
            onChange={countryChangedHandler}
            value={country}
          />
        </div>

        <div>
          <h3>State</h3>
          <input
            type="text"
            placeholder="e.g.: Bahia"
            onChange={stateChangedHandler}
            value={state}
          />
        </div>

        <div>
          <h3>City</h3>
          <input
            type="text"
            placeholder="e.g.: Kampala"
            onChange={cityChangedHandler}
            value={city}
          />
        </div>

        <div className="contain-center" style={{ alignSelf: "stretch" }}>
          <button
            className={classes.btnPrevious + " btn-highlight-1"}
            onClick={previousPageHandler}
          >
            Previous
          </button>
        </div>
      </div>
    </>
  );
};

export default WhereAreYouFrom;
