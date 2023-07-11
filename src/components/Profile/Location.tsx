import { useEffect, useState } from "react";
import {
  Country,
  State,
  City,
  ICountry,
  IState,
  ICity
} from "country-state-city";
import Select, { ActionMeta } from "react-select";

import classes from "../../pages/Profile.module.css";
import { PrevNextButtons } from "./PrevNextButtons";

interface ILocation {
  country: string;
  state: string;
  city: string;
  changePage: Function;
  onCountryChange: Function;
  onStateChange: Function;
  onCityChange: Function;
}

const Location = (props: ILocation) => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const [cscCountry, setCscCountry] = useState<ICountry>({} as ICountry);
  const [cscState, setCscState] = useState<IState>({} as IState);
  const [cscCity, setCscCity] = useState<ICity>({} as ICity);

  useEffect(() => {
    setCountry(props.country);
    setState(props.state);
    setCity(props.city);
  }, []);

  useEffect(() => {
    if (country) {
      setCscCountry(
        updatedCountries.filter(
          (fCountry) => fCountry.name === props.country
        )[0]
      );
    }
  }, [country]);

  useEffect(() => {
    if (cscCountry) {
      setCscState(
        updatedStates(cscCountry).filter(
          (fState) => fState.name === props.state
        )[0]
      );
    }
  }, [cscCountry]);

  useEffect(() => {
    if (cscState) {
      setCscCity(
        updatedCities(cscState).filter((fCity) => fCity.name === props.city)[0]
      );
    }
  }, [cscState]);

  const updatedCountries = Country.getAllCountries().map(
    (uCountry: ICountry) => ({
      label: uCountry.name,
      value: uCountry.isoCode,
      ...uCountry
    })
  );

  const updatedStates = (country: ICountry) =>
    State.getStatesOfCountry(country.isoCode).map((uState) => ({
      label: uState.name,
      value: uState.isoCode,
      ...uState
    }));

  const updatedCities = (state: IState) =>
    City.getCitiesOfState(state.countryCode, state.isoCode).map((uCity) => ({
      label: uCity.name,
      value: uCity.name,
      ...uCity
    }));

  const previousPageHandler = () => {
    props.changePage("AboutYou");
  };

  const nextPageHandler = () => {
    props.changePage("ImageSelection");
  };

  const countryChangedHandler = (
    country: ICountry | null,
    actionMeta: ActionMeta<ICountry>
  ) => {
    if (country) {
      setCscCountry(country);
      setCountry(country.name);
      props.onCountryChange(country.name);

      setCscState({} as IState);
      setState("");
      props.onStateChange("");

      setCscCity({} as ICity);
      setCity("");
      props.onCityChange("");
    }
  };

  const stateChangedHandler = (
    state: IState | null,
    actionMeta: ActionMeta<IState>
  ) => {
    if (state) {
      setCscState(state);
      setState(state.name);
      props.onStateChange(state.name);

      setCscCity({} as ICity);
      setCity("");
      props.onCityChange("");
    }
  };

  const cityChangedHandler = (
    city: ICity | null,
    actionMeta: ActionMeta<ICity>
  ) => {
    if (city) {
      setCscCity(city);
      setCity(city.name);
      props.onCityChange(city.name);
    }
  };

  return (
    <>
      <div className={classes.firstColumn}>
        <div>
          <h1 className={classes.title}>Location</h1>
          <p className="text-light break-words">
            {
              "Share your location to find people nearby\nand have an even better experience!"
            }
          </p>
        </div>
        <div>
          <h3>Country</h3>
          <Select
            id="country"
            name="country"
            options={updatedCountries}
            onChange={countryChangedHandler}
            className={classes.react_select}
          />
        </div>

        <div>
          <h3>State or Province</h3>
          <Select
            id="state"
            name="state"
            onChange={stateChangedHandler}
            options={updatedStates(cscCountry ? cscCountry : ({} as ICountry))}
            className={classes.react_select}
          />
        </div>

        <div>
          <h3>City</h3>
          <Select
            id="city"
            name="city"
            onChange={cityChangedHandler}
            options={updatedCities(cscState ? cscState : ({} as IState))}
            className={classes.react_select}
          />
        </div>

        <PrevNextButtons
          previousPageHandler={previousPageHandler}
          nextPageHandler={nextPageHandler}
        />
      </div>
    </>
  );
};

export default Location;
