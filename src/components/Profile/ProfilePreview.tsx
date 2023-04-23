import ProfileView from "./ProfileView";
import classes from "./ProfilePreview.module.css";

const ProfilePreview = () => {
  return (
    <div className={classes.profilePreviewContainer}>
      <ProfileView />
    </div>
  );
};

export default ProfilePreview;
