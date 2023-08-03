import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Country,
  State,
  City,
  ICountry,
  IState,
  ICity
} from "country-state-city";
// Components
import Translator from "../i18n/Translator";
import Select, { ActionMeta } from "react-select";
import PrevNextButtons from "./PrevNextButtons";
// Styles
import classes from "@pages/ProfileRegistration.module.css";

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
  const { t } = useTranslation();

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
    <div className={classes.firstColumn}>
      <div className="h-group">
        <h1>
          <Translator path="profileRegistration.location.title" />
        </h1>
        <p className="text-light break-words">
          <Translator path="profileRegistration.location.subtitle" />
        </p>
      </div>
      <div className="w-full">
        <h3>
          <Translator path="profileRegistration.location.countryLabel" />
        </h3>
        <Select
          id="country"
          name="country"
          placeholder={t("ui.select.selectOne")}
          options={updatedCountries}
          onChange={countryChangedHandler}
          className={classes.react_select}
        />
      </div>

      <div className="w-full">
        <h3>
          <Translator path="profileRegistration.location.stateLabel" />
        </h3>
        <Select
          id="state"
          name="state"
          placeholder={t("ui.select.selectOne")}
          onChange={stateChangedHandler}
          options={updatedStates(cscCountry ? cscCountry : ({} as ICountry))}
          className={classes.react_select}
        />
      </div>

      <div className="w-full">
        <h3>
          <Translator path="profileRegistration.location.cityLabel" />
        </h3>
        <Select
          id="city"
          name="city"
          placeholder={t("ui.select.selectOne")}
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
  );
};

export default Location;
