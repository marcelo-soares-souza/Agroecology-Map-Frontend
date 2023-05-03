import { useEffect, useState } from "react";
import { Country, State, City, ICountry, IState } from "country-state-city";
import Select, { ActionMeta } from "react-select";

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

  const [cscCountry, setCscCountry] = useState<ICountry>({} as ICountry);
  const [cscState, setCscState] = useState<IState>({} as IState);

  useEffect(() => {
    setCountry(props.country);
    setState(props.state);
    setCity(props.city);
  }, []);

  const updatedCountries = Country.getAllCountries().map(
    (uCountry: ICountry) => ({
      label: uCountry.name,
      value: uCountry.isoCode,
      ...uCountry
    })
  );

  const updatedStates = (isoCode: string) =>
    State.getStatesOfCountry(isoCode).map((uState) => ({
      label: uState.name,
      value: uState.isoCode,
      ...uState
    }));

  const previousPageHandler = () => {
    props.changePage("AboutYou");
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
    }
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
          <Select
            id="country"
            name="country"
            options={updatedCountries}
            onChange={countryChangedHandler}
            value={cscCountry}
            className={classes.react_select}
          />
        </div>

        <div>
          <h3>State</h3>
          <Select
            id="state"
            name="state"
            onChange={stateChangedHandler}
            value={cscState}
            options={updatedStates(
              cscCountry.isoCode ? cscCountry.isoCode : ""
            )}
            className={classes.react_select}
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
