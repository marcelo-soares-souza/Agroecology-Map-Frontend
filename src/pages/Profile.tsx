import { useLoaderData } from "react-router-dom";
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

const Profile = () => {
  // const mockProfile: IAccount = useLoaderData() as IAccount;

  const [whichPage, setWhichPage] = useState("RequiredProfileInformation");
  const [profile, setProfile] = useState<IAccount>();

  useEffect(() => {
    setProfile({
      accountName: "",
      displayName: "",
      fullName: "",
      shortBio: ""
    });
  }, []);

  const nextPageHandler = (page: string) => {
    setWhichPage(page);
  };

  const onAccountNameChangeHandler = (accountName: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, accountName }));
  };

  const onFullNameChangeHandler = (fullName: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, fullName }));
  };

  const onShortBioChangeHandler = (shortBio: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, shortBio }));
  };

  return (
    <div className="column-justify-center" style={{ padding: "0 2%" }}>
      <div className={classes.columnsContainer + " two-columns"}>
        <div className="contain-center">
          {whichPage === "RequiredProfileInformation" && (
            <RequiredProfileInformation
              accountName={profile?.accountName ?? ""}
              fullName={profile?.fullName ?? ""}
              nextPage={nextPageHandler}
              onAccountNameChange={onAccountNameChangeHandler}
              onFullNameChange={onFullNameChangeHandler}
            />
          )}

          {whichPage === "AboutYou" && (
            <AboutYou
              shortBio={profile?.shortBio ?? ""}
              nextPage={nextPageHandler}
              onShortBioChange={onShortBioChangeHandler}
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
