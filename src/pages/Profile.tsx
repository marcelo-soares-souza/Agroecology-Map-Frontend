import { useState, useEffect } from "react";
import { IAccount } from "../interfaces/IAccount";
import { mockAccount } from "../mocks/mock-account";

import classes from "./Profile.module.css";

const Profile = () => {
  const [account, setAccount] = useState<IAccount>({});

  useEffect(() => {
    setAccount(mockAccount);
  }, []);

  return (
    <div className={classes.content}>
      <p>
        <label>Account Name: </label>
        {account?.accountName}
      </p>
      <p>
        <label>Full Name: </label>
        {account.fullName}
      </p>
    </div>
  );
};

export default Profile;
