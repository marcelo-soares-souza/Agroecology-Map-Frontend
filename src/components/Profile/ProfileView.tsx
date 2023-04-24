import { IAccount } from "../../interfaces/IAccount";
import classes from "./ProfileView.module.css";

const ProfileView = (props: IAccount) => {
  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        {/* <img src="#" alt="Profile Banner" /> */}
      </div>
      <div className={classes.avatarCtaContainer}>
        <div className={classes.avatar}>
          <div className={classes.avatarMock} />
          {/* <img src="#" alt="Profile Avatar" /> */}
        </div>
        <div className={classes.ctaContainer}>
          <button className="btn-highlight-2">
            <img src="#" alt="icon" />
            {"Contact me"}
          </button>
        </div>
      </div>
      <div className={classes.textContainer}>
        <div>
          <h1>{props.displayName}</h1>
          <p>
            <strong>{"@" + props.accountName}</strong>
          </p>
          <p>{"(he/him)"}</p>
          <ul className={classes.details}>
            <li>
              <img src="#" alt="i " />
              <p>Region, Country</p>
            </li>
            <li>
              <img src="#" alt="i " />
              <p>Farmer</p>
            </li>
          </ul>
        </div>
        <div>
          <h2>About me</h2>
          <p>{props.shortBio}</p>
        </div>
        <div className={classes.highlightsContainer}>
          <h2>My highlights</h2>
          <div className={classes.hlContainer}>
            <div className={classes.hlCard}>card</div>
          </div>
        </div>
        <div>
          <h2>Services</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Consectetur adipisicing elit. </li>
            <li>Atque quis officiis repudiandae. </li>
          </ul>
        </div>
        <div>
          <h2>Related Locations</h2>
          <div>
            <div>
              <div>img</div>
              <p>name</p>
            </div>
            <div>
              <div>img</div>
              <p>name</p>
            </div>
            <div>
              <div>img</div>
              <p>name</p>
            </div>
            <div>
              <div>img</div>
              <p>name</p>
            </div>
          </div>
        </div>
        <div>
          <h2>Related Experiences</h2>
          <div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
