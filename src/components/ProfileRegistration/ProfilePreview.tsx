// Components
import ProfileView from "./ProfileView";
// Types
import { IAccount } from "~/interfaces/IAccount";
// Styles
import classes from "./ProfilePreview.module.css";

const ProfilePreview = (props: IAccount) => {
  return (
    <div className={classes.profilePreviewContainer}>
      <ProfileView {...props} />
    </div>
  );
};

export default ProfilePreview;
