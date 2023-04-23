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
import ProfilePreview from "../components/Profile/ProfilePreview";

const Profile = () => {
  const profile: IAccount = useLoaderData() as IAccount;

  const [whichPage, setWhichPage] = useState("RequiredProfileInformation");

  const nextPageHandler = (page: string) => {
    setWhichPage(page);
  };

  return (
    <div className="column-justify-center" style={{ padding: "0 2%" }}>
      <div className={classes.columnsContainer + " two-columns"}>
        <div className="contain-center">
          {whichPage === "RequiredProfileInformation" && (
            <RequiredProfileInformation nextPage={nextPageHandler} />
          )}
          {whichPage === "AboutYou" && <AboutYou nextPage={nextPageHandler} />}
        </div>
        <div
          style={{
            display: "flex"
          }}
        >
          <ProfilePreview />
        </div>
      </div>
    </div>
  );
};

export default Profile;

export const loader = async () => {
  return mockAccount;
};
