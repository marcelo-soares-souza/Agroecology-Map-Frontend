import { useEffect, useState } from "react";

// Components
import RequiredProfileInformation from "../components/Profile/RequiredProfileInformation";
import AboutYou from "../components/Profile/AboutYou";
import ProfilePreview from "../components/Profile/ProfilePreview";

// Mock Data
import { mockAccount } from "../mocks/mock-account";

// CSS
import classes from "./Profile.module.css";

// Interfaces
import { IAccount } from "../interfaces/IAccount";
import WhereAreYouFrom from "../components/Profile/WhereAreYouFrom";

const Profile = () => {
  // const mockProfile: IAccount = useLoaderData() as IAccount;

  const [whichPage, setWhichPage] = useState("RequiredProfileInformation");
  const [profile, setProfile] = useState<IAccount>();

  useEffect(() => {
    setProfile({
      accountName: "",
      displayName: "",
      fullName: "",
      isFullNameVisible: true,
      pronouns: "",
      shortBio: "",
      location: {
        country: "",
        state: "",
        city: ""
      }
    });
  }, []);

  const changePageHandler = (page: string) => {
    setWhichPage(page);
  };

  const onAccountNameChangeHandler = (accountName: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, accountName }));
  };

  const onFullNameChangeHandler = (fullName: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, fullName }));
  };

  const onPronounsChangeHandler = (pronouns: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, pronouns }));
  };

  const onShortBioChangeHandler = (shortBio: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, shortBio }));
  };

  const onCountryChangeHandler = (country: string) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      location: { ...prevProfile?.location, country: country }
    }));
  };

  const onStateChangeHandler = (state: string) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      location: { ...prevProfile?.location, state: state }
    }));
  };

  const onCityChangeHandler = (city: string) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      location: { ...prevProfile?.location, city: city }
    }));
  };

  const onIsFullNameVisibleHandler = (isFullNameVisible: boolean) => {
    setProfile((prevProfile) => ({ ...prevProfile, isFullNameVisible }));
  };

  return (
    <div className="column-justify-center">
      <div className={classes.columnsContainer + " two-columns"}>
        <div className="grid-container">
          {whichPage === "RequiredProfileInformation" && (
            <RequiredProfileInformation
              accountName={profile?.accountName ?? ""}
              fullName={profile?.fullName ?? ""}
              isFullNameVisible={profile?.isFullNameVisible ?? true}
              changePage={changePageHandler}
              onAccountNameChange={onAccountNameChangeHandler}
              onFullNameChange={onFullNameChangeHandler}
              onFullNameVisibleChange={onIsFullNameVisibleHandler}
            />
          )}

          {whichPage === "AboutYou" && (
            <AboutYou
              pronouns={profile?.pronouns ?? ""}
              shortBio={profile?.shortBio ?? ""}
              changePage={changePageHandler}
              onShortBioChange={onShortBioChangeHandler}
              onPronounsChange={onPronounsChangeHandler}
            />
          )}

          {whichPage === "WhereAreYouFrom" && (
            <WhereAreYouFrom
              country={profile?.location?.country ?? ""}
              state={profile?.location?.state ?? ""}
              city={profile?.location?.city ?? ""}
              changePage={changePageHandler}
              onCountryChange={onCountryChangeHandler}
              onStateChange={onStateChangeHandler}
              onCityChange={onCityChangeHandler}
            />
          )}
        </div>
        <div
          style={{
            display: "flex"
          }}
        >
          <ProfilePreview {...profile} />
        </div>
      </div>
    </div>
  );
};

export default Profile;

export const loader = async () => {
  return mockAccount;
};
