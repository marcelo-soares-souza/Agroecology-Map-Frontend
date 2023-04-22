import { useLoaderData } from "react-router-dom";
import { useState } from "react";

// Components
import AboutYou from "../components/Profile/AboutYou";
import RequiredProfileInformation from "../components/Profile/RequiredProfileInformation";

// Mock Data
import { mockAccount } from "../mocks/mock-account";

// CSS
import classes from "./Profile.module.css";

// Interfaces
import { IAccount } from "../interfaces/IAccount";

const Profile = () => {
  const profile: IAccount = useLoaderData() as IAccount;

  const [whichPage, setWhichPage] = useState("RequiredProfileInformation");

  const nextPageHandler = (page: string) => {
    setWhichPage(page);
  };

  return (
    <div className="two-columns">
      {whichPage === "RequiredProfileInformation" && (
        <RequiredProfileInformation nextPage={nextPageHandler} />
      )}
      {whichPage === "AboutYou" && <AboutYou nextPage={nextPageHandler} />}

      <div
        className={
          classes.profilePreviewContainer + " contain-center light-text"
        }
      >
        <p>{profile.email}</p>
      </div>
    </div>
  );
};

export default Profile;

export const loader = async () => {
  return mockAccount;
};
