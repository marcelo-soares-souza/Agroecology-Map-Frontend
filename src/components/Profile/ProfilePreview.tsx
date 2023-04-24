import ProfileView from "./ProfileView";
import classes from "./ProfilePreview.module.css";
import { IAccount } from "../../interfaces/IAccount";

const ProfilePreview = (props: IAccount) => {
  return (
    <div className={classes.profilePreviewContainer}>
      <ProfileView {...props} />
    </div>
  );
};

export default ProfilePreview;
